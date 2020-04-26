
module.exports = (sequelize, Sequelize) => {
    let CompanyDate5Model = sequelize.define("tbl_company_date_5", {
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

    return CompanyDate5Model;
};
