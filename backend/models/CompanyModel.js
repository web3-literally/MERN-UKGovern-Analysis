
module.exports = (sequelize, Sequelize) => {
    let CompanyModel = sequelize.define("tbl_company", {
        CompanyName: {
            type: Sequelize.STRING
        },
        CompanyNumber: {
            type: Sequelize.STRING
        },
        CountryOfOrigin: {
            type: Sequelize.STRING
        },
        URI: {
            type: Sequelize.INTEGER
        },
    });

    return CompanyModel;
};