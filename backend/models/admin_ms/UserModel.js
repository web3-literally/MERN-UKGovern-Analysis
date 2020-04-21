let crypto = require('crypto');

module.exports = (sequelize, Sequelize) => {
    let UserModel = sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email_verify_flag: {
            type: Sequelize.INTEGER
        },
        email_verify_token: {
            type: Sequelize.STRING
        },
        reset_flag: {
            type: Sequelize.INTEGER
        },
        reset_token: {
            type: Sequelize.STRING
        },
        avatar: {
            type: Sequelize.STRING,
            defaultValue: '/images/profiles/default.png'
        },
        role: {
            type: Sequelize.INTEGER
        }
    });
    UserModel.encryptPassword = function (user) {
        user.password = crypto.createHash('md5').update(user.password).digest('hex');
    };
    UserModel.verifyPassword = function (user, password) {
        return user.password === crypto.createHash('md5').update(password).digest("hex");
    };

    return UserModel;
};