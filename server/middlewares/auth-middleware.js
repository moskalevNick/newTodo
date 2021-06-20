const ApiError = require('../exceptions/api-errors')
const tokenService = require('../services/token-service')

module.exports = function (req, res, next){
    try{
        const autorizationHeader = req.headers.authorization
        if(!autorizationHeader){
            return next(ApiError.UnautorizedError())
        }

        const accessToken = autorizationHeader.split(' ')[1]
        if(!accessToken){
            return next(ApiError.UnautorizedError())
        }

        const userData = tokenService.validateAccessToken(accessToken)
        if(!userData){
            return next(ApiError.UnautorizedError())
        }

        req.user = userData
        next()
    }catch(e){
        return next(ApiError.UnautorizedError())
    }
}