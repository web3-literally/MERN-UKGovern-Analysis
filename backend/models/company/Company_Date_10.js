
module.exports = (sequelize, Sequelize) => {
    let CompanyDate10Model = sequelize.define("tbl_company_date_10", {
        CompanyNumber: {
            type: Sequelize.STRING
        },
        DissolutionDate: {
            type: Sequelize.STRING
        },
        IncorporationDate: {
            type: Sequelize.STRING
        },
        Returns_NextDueDate: {
            type: Sequelize.STRING
        },
        Returns_LastMadeUpDate: {
            type: Sequelize.STRING
        },
        ConfStmtNextDueDate: {
            type: Sequelize.STRING
        },
        ConfStmtLastMadeUpDate: {
            type: Sequelize.STRING
        },
    });

    return CompanyDate10Model;
};
