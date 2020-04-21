let express = require('express');
let router = express.Router();

let MiddlewareController = require('../controllers/MiddlewareController');
let AdminController = require('../controllers/AdminController');


router.get('/account-settings', MiddlewareController.m_checkLogin, function (req, res, next) {
    AdminController.account_settings(req, res, next);
});
router.post('/account-settings/edit-profile', MiddlewareController.m_checkLoginPost, function (req, res, next) {
    AdminController.editProfile(req, res, next);
});
router.post('/account-settings/change-avatar', MiddlewareController.m_checkLoginPost, function (req, res, next) {
    AdminController.changeAvatar(req, res, next);
});

router.get('/dashboard', MiddlewareController.m_checkLogin, MiddlewareController.m_checkAdmin, function (req, res, next) {
    AdminController.dashboard(req, res, next);
});
router.get('/', MiddlewareController.m_checkLogin, MiddlewareController.m_checkAdmin, function (req, res, next) {
    AdminController.dashboard(req, res, next);
});
module.exports = router;
