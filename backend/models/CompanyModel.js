
module.exports = (sequelize, Sequelize) => {
    let CompanyModel = sequelize.define("tbl_company", {
        CompanyName: {
            type: Sequelize.STRING
        },
        CompanyNumber: {
            type: Sequelize.STRING
        },
        RegAddress_CareOf: {
            type: Sequelize.STRING
        },
        RegAddress_POBox: {
            type: Sequelize.STRING
        },
        RegAddress_AddressLine1: {
            type: Sequelize.STRING
        },
        RegAddress_AddressLine2: {
            type: Sequelize.STRING
        },
        RegAddress_PostTown: {
            type: Sequelize.STRING
        },
        RegAddress_County: {
            type: Sequelize.STRING
        },
        RegAddress_Country: {
            type: Sequelize.STRING
        },
        RegAddress_PostCode: {
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
        DissolutionDate: {
            type: Sequelize.STRING
        },
        IncorporationDate: {
            type: Sequelize.STRING
        },
        Accounts_AccountRefDay: {
            type: Sequelize.STRING
        },
        Accounts_AccountRefMonth: {
            type: Sequelize.STRING
        },
        Accounts_NextDueDate: {
            type: Sequelize.STRING
        },
        Accounts_LastMadeUpDate: {
            type: Sequelize.STRING
        },
        Accounts_AccountCategory: {
            type: Sequelize.STRING
        },
        Returns_NextDueDate: {
            type: Sequelize.STRING
        },
        Returns_LastMadeUpDate: {
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
        LimitedPartnerships_NumGenPartners: {
            type: Sequelize.STRING
        },
        LimitedPartnerships_NumLimPartners: {
            type: Sequelize.STRING
        },
        URI: {
            type: Sequelize.INTEGER
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
        },
        ConfStmtNextDueDate: {
            type: Sequelize.STRING
        },
        ConfStmtLastMadeUpDate: {
            type: Sequelize.STRING
        },
    });

    return CompanyModel;
};