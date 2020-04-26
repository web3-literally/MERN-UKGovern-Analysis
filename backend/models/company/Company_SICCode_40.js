
module.exports = (sequelize, Sequelize) => {
    let CompanySICCode40Model = sequelize.define("tbl_company_siccode_40", {
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

    return CompanySICCode40Model;
};