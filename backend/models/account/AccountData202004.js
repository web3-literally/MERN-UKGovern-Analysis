
module.exports = (sequelize, Sequelize) => {
    let Account202004Model = sequelize.define("tbl_account_202004", {
        zip_name: {
            type: Sequelize.STRING
        },
        run_process: {
            type: Sequelize.STRING
        },
        company_number: {
            type: Sequelize.STRING
        },
        balance_date: {
            type: Sequelize.STRING
        },
        current_assets_value: {
            type: Sequelize.STRING
        },
        previous_assets_value: {
            type: Sequelize.STRING
        },
        current_creditors_value: {
            type: Sequelize.STRING
        },
        previous_creditors_value: {
            type: Sequelize.STRING
        },
    });

    return Account202004Model;
};