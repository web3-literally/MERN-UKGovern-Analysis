
module.exports = (sequelize, Sequelize) => {
    let CompanyPreviousName25Model = sequelize.define("tbl_company_previousname_25", {
        CompanyNumber: {
            type: Sequelize.STRING
        },
        PreviousName_1_CONDATE: {
            type: Sequelize.STRING
        },
        PreviousName_1_CompanyName: {
            type: Sequelize.STRING
        },
        PreviousName_2_CONDATE: {
            type: Sequelize.STRING
        },
        PreviousName_2_CompanyName: {
            type: Sequelize.STRING
        },
        PreviousName_3_CONDATE: {
            type: Sequelize.STRING
        },
        PreviousName_3_CompanyName: {
            type: Sequelize.STRING
        },
        PreviousName_4_CONDATE: {
            type: Sequelize.STRING
        },
        PreviousName_4_CompanyName: {
            type: Sequelize.STRING
        },
        PreviousName_5_CONDATE: {
            type: Sequelize.STRING
        },
        PreviousName_5_CompanyName: {
            type: Sequelize.STRING
        },
        PreviousName_6_CONDATE: {
            type: Sequelize.STRING
        },
        PreviousName_6_CompanyName: {
            type: Sequelize.STRING
        },
        PreviousName_7_CONDATE: {
            type: Sequelize.STRING
        },
        PreviousName_7_CompanyName: {
            type: Sequelize.STRING
        },
        PreviousName_8_CONDATE: {
            type: Sequelize.STRING
        },
        PreviousName_8_CompanyName: {
            type: Sequelize.STRING
        },
        PreviousName_9_CONDATE: {
            type: Sequelize.STRING
        },
        PreviousName_9_CompanyName: {
            type: Sequelize.STRING
        },
        PreviousName_10_CONDATE: {
            type: Sequelize.STRING
        },
        PreviousName_10_CompanyName: {
            type: Sequelize.STRING
        }
    });

    return CompanyPreviousName25Model;
};