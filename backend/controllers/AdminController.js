let View = require('../views/base');
let path = require('path');
let fs = require('fs');

let db = require('../models');
let UserModel = db.users;
let CompanyModel = db.company;
let PersonModel = db.person;

let BaseController = require('./BaseController');

module.exports = BaseController.extend({
    name: 'UserController',

    account_settings: async function (req, res, next) {
        let user = await UserModel.findByPk(req.session.user.id);
        let v = new View(res, 'settings/account_settings');
        v.render({
            title: 'UK-GOV|Profile',
            session: req.session,
            i18n: res,
            tab_text: 'settings',
            sub_text: 'settings_profile',
            user: user,
        })
    },
    editProfile: async function (req, res, next) {
        let username = req.body.username, email = req.body.email,
            old_password = req.body.old_password, new_password = req.body.new_password;
        let user = await UserModel.findByPk(req.session.user.id);
        if (user.email !== email) return res.send({status: 'error', message: res.cookie().__('Undefined user')});
        if (!UserModel.verifyPassword(user, old_password)) return res.send({
            status: 'error',
            message: res.cookie().__('Old password is not correct')
        });
        user.username = username;
        user.password = new_password;
        UserModel.encryptPassword(user);
        await user.save();
        req.session.user = user;
        return res.send({status: 'success', message: res.cookie().__('Updated user profile successfully')});
    },
    changeAvatar: async function (req, res, next) {
        let user = await UserModel.findByPk(req.session.user.id);
        let avatarPath = user.avatar;
        if (req.body.avatarImg.length > 1000) {
            let avatarData = req.body.avatarImg.replace(/^data:image\/\w+;base64,/, "");
            let file_extension = '.png';
            if (avatarData.charAt(0) === '/') file_extension = '.jpg';
            else if (avatarData.charAt(0) === 'R') file_extension = '.gif';
            let public_path = path.resolve('public');
            avatarPath = '/avatars/avatar_' + user.id + file_extension;
            let avatarUploadPath = path.resolve('public') + avatarPath;
            fs.writeFileSync(avatarUploadPath, avatarData, 'base64');
        }
        await user.update({avatar: avatarPath});
        req.session.user.avatar = avatarPath;
        return res.send({
            status: 'success',
            message: res.cookie().__('Changed avatar successfully'),
            avatarPath: avatarPath
        });
    },
    error: function (req, res, next) {
        let v = new View(res, 'partials/error');
        v.render({
            title: 'UK-GOV|Error',
            session: req.session,
            i18n: res,
        })
    },

    dashboard: async function (req, res, next) {
        let db = req.db;
        let user = req.session.user;
        let company_number = req.query.cn;
        let results = [];
        try {
            if (company_number) {
                company = await CompanyModel.findOne({ where: {CompanyNumber: company_number }});
                if (company) {
                    people = await PersonModel.findAll({ where: {company_number: company_number} });
                    people.forEach(function(person) {
                        results.push({
                            CompanyName: company.CompanyName,
                            CompanyNumber: company.CompanyNumber,
                            CountryOfOrigin: company.CountryOfOrigin,
                            CompanyURI: company.URI,
                            PersonName: person.name,
                            PersonLinks: person.links_self
                        })
                    })
                }
            }
        } catch (err) {
            console.log(err);
        }
        let v = new View(res, 'admin_vs/dashboard');
        v.render({
            title: 'UK-GOV|Dashboard',
            session: req.session,
            i18n: res,
            tab_text: 'admin_dashboard',
            sub_text: '',
            user: user,
            results: results
        })
    },
});
