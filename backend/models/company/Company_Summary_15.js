
module.exports = (sequelize, Sequelize) => {
    let CompanySummary15Model = sequelize.define("tbl_company_summary_15", {
        CompanyName: {
            type: Sequelize.STRING
        },
        CompanyNumber: {
            type: Sequelize.STRING
        },
        CompanyCategory: {
            type: Sequelize.STRING
        },
        CompanyStatus: {
            type: Sequelize.STRING
        },
        CountryOfOrigin: {
            type: Sequelize.STRING
        },
        LimitedPartnerships_NumGenPartners: {
            type: Sequelize.STRING
        },
        LimitedPartnerships_NumLimPartners: {
            type: Sequelize.STRING
        },
        URI: {
            type: Sequelize.INTEGER
        },
    });

    return CompanySummary15Model;
};
