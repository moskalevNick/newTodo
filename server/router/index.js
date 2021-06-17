const Router = require('express').Router;
const bodyParser = require("body-parser")
const UserController = require('../controllers/user-controller')

const router = Router()
router.use(bodyParser.json())

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/activate/:Link', UserController.activate)
router.get('/refresh', UserController.refresh)
router.get('/users', UserController.getUsers)

module.exports = router