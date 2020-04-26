
module.exports = (sequelize, Sequelize) => {
    let CompanySICCode25Model = sequelize.define("tbl_company_siccode_25", {
        CompanyNumber: {
            type: Sequelize.STRING
        },
        SICCode_SicText_1: {
            type: Sequelize.STRING
        },
        SICCode_SicText_2: {
            type: Sequelize.STRING
        },
        SICCode_SicText_3: {
            type: Sequelize.STRING
        },
        SICCode_SicText_4: {
            type: Sequelize.STRING
        },
    });

    return CompanySICCode25Model;
};