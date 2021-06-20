const uuid = require('uuid')
const bcrypt = require ('bcrypt')

const UserDto = require('../dtos/user-dto')
const mailService = require('./mail-service')
const tokenService = require('./token-service')
const UserModel = require ('../models/user-model')
const ApiError = require('../exceptions/api-errors')
const userModel = require('../models/user-model')

class UserService {
    async registration (email, password){
        const candidate = await UserModel.findOne({email})
        if(candidate){
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()

        const user = await UserModel.create({email, password: hashPassword, activationLink})
        //await mailService.sendActivationMail(email, `${process.env.API_URL}/api/registration/${activationLink}`)
        
        const userDto = new UserDto( user )
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        
        return {...tokens, user: userDto}
    }

    async activate(activationLink) {
       const user = await UserModel.findOne(activationLink)
       if(!user){
           throw ApiError.BadRequest('Некорректная ссылка активации')
       }
       user.isActivate = true
       await user.save()
    }

    async login(email,password){
        const user = await UserModel.findOne({email})
        if(!user){
            throw ApiError.BadRequest(`Пользователь с email: ${email} не найден`)
        }
        const isPassEquals = await bcrypt.compare(password, user.password)
        if(!isPassEquals){
            throw ApiError.BadRequest(`Неверный пароль`)
        }
        const userDto = new UserDto( user )
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        
        return {...tokens, user: userDto}
    }

    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken){
        if(!refreshToken){
            throw new ApiError.UnautorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDB = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDB){
            throw ApiError.UnautorizedError()
        }
        const user = await UserModel.findById(userData.id)
        const userDto = new UserDto( user )
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        
        return {...tokens, user: userDto}
    }

    async getAllUsers(){
        const users = UserModel.find()
        return users
    }
}

module.exports = new UserService()