let express = require('express');
let router = express.Router();

let middleware_controller = require('../controllers/MiddlewareController');
let auth_controller = require('../controllers/AuthController');

router.get('/login', function (req, res, next) {
    auth_controller.login(req, res, next);
});
router.post('/login', function (req, res, next) {
    auth_controller.postLogin(req, res, next);
});

router.get('/logout', function (req, res, next) {
    auth_controller.logout(req, res, next);
});




module.exports = router;