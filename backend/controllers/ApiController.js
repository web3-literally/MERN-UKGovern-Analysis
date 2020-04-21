let View = require('../views/base');

let BaseController = require('./BaseController');

module.exports = BaseController.extend({
    name: 'ApiController',

    error: function (req, res, next) {
        let v = new View(res, 'partials/error');
        v.render({
            title: 'UK-GOV|Error',
            session: req.session,
            i18n: res,
        })
    },
});
