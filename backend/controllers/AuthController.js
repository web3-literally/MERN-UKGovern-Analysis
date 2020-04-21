let View = require('../views/base');
let path = require('path');
let fs = require('fs');
let crypto = require('crypto');
let config = require('../config/index')();
let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: config.mail_info.host,
    port: 587,
    secure: false,
    auth: {
        user: config.mail_info.user,
        pass: config.mail_info.password
    }
});
let speakeasy = require('speakeasy');
let ejs = require('ejs');

let db = require('../models');
let UserModel = db.users;

let BaseController = require('./BaseController');

module.exports = BaseController.extend({
    name: 'AuthController',
    login: async function (req, res, next) {
        if (req.session.login === 1) return res.redirect('/');
        await this.checkDev();
        let v = new View(res, 'auth/login');
        v.render({
            title: 'UK-GOV | Login',
            session: req.session,
            i18n: res,
        })
    },
    register: async function (req, res, next) {
        if (req.session.login === 1) return res.redirect('/');
        let v = new View(res, 'auth/register');
        v.render({
            title: 'UK-GOV | Register',
            session: req.session,
            i18n: res,
        })
    },
    logout: async function (req, res, next) {
        req.session.login = 0;
        req.session.user = null;
        req.session.save();
        return res.redirect('/');
    },
    postLogin: async function (req, res, next) {
        let login_email = req.body.login_email;
        let login_password = req.body.login_password;
        if (login_email === '' || login_password === '' || login_email.indexOf('@') <= 0) {
            return res.send({status: 'error', message: res.cookie().__('Login information is not valid')});
        }
        let user = await UserModel.findAll({limit:1, where:{email: login_email}});
        if (user.length === 0) return res.send({status: 'error', message: res.cookie().__('Unknown user')});
        if (user[0].email_verify_flag !== 2) return res.send({status: 'error', message: res.cookie().__('Verify your email')});
        if (!UserModel.verifyPassword(user[0], login_password)) return res.send({status: 'error', message: res.cookie().__('Password is not correct')});
        req.session.user = user[0];
        req.session.login = 1;
        return res.send({status: 'success', message: res.cookie().__('Login success')});
    },
    verify_email: async function (req, res, next) {
        let token = req.query.token;
        if (!token) {
            let v = new View(res, 'auth/email_verify');
            v.render({
                title: 'UK-GOV | Phone verify',
                session: req.session,
                i18n: res,
            })
        } else {
            let user = await UserModel.findOne({email_verify_token: token});
            if (!user) return res.redirect('/404');
            await user.updateOne({email_verify_flag: 2, email_verify_token: ''});
            return res.redirect('/');
        }

    },
});
