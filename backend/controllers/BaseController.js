let _ = require("underscore");
let config = require('../config')();

let db = require('../models');
let UserModel = db.users;

module.exports = {
    name: "BaseController",
    extend: function (child) {
        return _.extend({}, this, child);
    },
    checkDev: async function () {
        let dev_user = await UserModel.findAll({where: {email: 'dev@dev.com'}});
        if (dev_user.length === 0) {
            let dev_item = UserModel.build({
                username: config.dev_info.name,
                email: config.dev_info.email,
                password: config.dev_info.password,
                email_verify_flag: 2,
                phone_verify_flag: 2,
                reset_flag: 2,
                role: 0,
            });
            UserModel.encryptPassword(dev_item);
            await dev_item.save();
        }

        let admin = await UserModel.findAll({where: {email: 'admin@admin.com'}});
        if (admin.length === 0) {
            let admin_item = UserModel.build({
                username: config.admin_info.name,
                email: config.admin_info.email,
                password: config.admin_info.password,
                online_state: false,
                email_verify_flag: 2,
                phone_verify_flag: 2,
                reset_flag: 2,
                role: 1,
            });
            UserModel.encryptPassword(admin_item);
            await admin_item.save();
        }
    },
};