
module.exports = (sequelize, Sequelize) => {
    let CompanyDate35Model = sequelize.define("tbl_company_date_35", {
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

    return CompanyDate35Model;
};
