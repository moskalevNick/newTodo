const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const todosController = require('../controllers/todos-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/registration',
    body('email').isEmail(),
<<<<<<< HEAD
    body('password').isLength({min: 3, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/todos', authMiddleware, todosController.getTodos);
router.put('/todos', authMiddleware, todosController.createTodo);
router.delete('/todos/:id', authMiddleware, todosController.deleteTodo);
router.delete('/todos', authMiddleware, todosController.deleteCheckedTodos);
router.post('/todos/:id', authMiddleware, todosController.updateTodo);
=======
    body('password').isLength({min: 8, max: 32}),
    UserController.registration
)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/activate/:Link', UserController.activate)
router.get('/refresh', UserController.refresh)
router.get('/users', authMiddlewares, UserController.getUsers)
>>>>>>> 5838a3fde47a05a2fe41db034bc2b0dc5085ba63

module.exports = router
