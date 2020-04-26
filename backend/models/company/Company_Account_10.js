
module.exports = (sequelize, Sequelize) => {
    let CompanyAccount10Model = sequelize.define("tbl_company_account_10", {
        CompanyNumber: {
            type: Sequelize.STRING
        },
        Accounts_AccountRefDay: {
            type: Sequelize.STRING
        },
        Accounts_AccountRefMonth: {
            type: Sequelize.STRING
        },
        Accounts_NextDueDate: {
            type: Sequelize.STRING
        },
        Accounts_LastMadeUpDate: {
            type: Sequelize.STRING
        },
        Accounts_AccountCategory: {
            type: Sequelize.STRING
        },
    });

    return CompanyAccount10Model;
};
