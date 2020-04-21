let config = {
    mode: 'local',
    port: 3000,
    cron_port: 3001,
    base_url: 'http://127.0.0.1:3000',
    mysql:{
        HOST: "localhost",
        USER: "root",
        PASSWORD: "o9J1DLukLy:E",
        DB: "legaldb",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    dev_info: {
        name: 'Technical Manager',
        email: 'dev@dev.com',
        password: 'dev'
    },
    admin_info: {
        name: 'Administrator',
        email: 'admin@admin.com',
        password: 'admin'
    },
    mail_info: {
        host: 'smtp.gmail.com',
        user: '',
        password: '',
    }
};

module.exports = function() {
    return config;
};
