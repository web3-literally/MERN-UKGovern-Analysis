
module.exports = (sequelize, Sequelize) => {
    let CompanyMortgage5Model = sequelize.define("tbl_company_mortgage_5", {
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

    return CompanyMortgage5Model;
};