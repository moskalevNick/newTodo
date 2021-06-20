const Router = require('express').Router;
const bodyParser = require("body-parser")
const UserController = require('../controllers/user-controller')
const {body} = require('express-validator')
const authMiddlewares = require('../middlewares/auth-middleware')

const router = Router()
router.use(bodyParser.json())

router.post('/registration', 
    body('email').isEmail(),
    body('password').isLength({min: 8, max: 32}),
    UserController.registration)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/activate/:Link', UserController.activate)
router.get('/refresh', UserController.refresh)
router.get('/users', authMiddlewares, UserController.getUsers)

module.exports = router