
module.exports = (sequelize, Sequelize) => {
    let CompanyMortgage45Model = sequelize.define("tbl_company_mortgage_45", {
        CompanyNumber: {
            type: Sequelize.STRING
        },
        Mortgages_NumMortCharges: {
            type: Sequelize.STRING
        },
        Mortgages_NumMortOutstanding: {
            type: Sequelize.STRING
        },
        Mortgages_NumMortPartSatisfied: {
            type: Sequelize.STRING
        },
        Mortgages_NumMortSatisfied: {
            type: Sequelize.STRING
        },
    });

    return CompanyMortgage45Model;
};