let config = require('../config')();
let dbConfig = config.mysql;

let Sequelize = require("sequelize");
let sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

let db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./admin_ms/UserModel")(sequelize, Sequelize);

db.company_account_5 = require("./company/Company_Account_5")(sequelize, Sequelize);
db.company_account_10 = require("./company/Company_Account_10")(sequelize, Sequelize);
db.company_account_15 = require("./company/Company_Account_15")(sequelize, Sequelize);
db.company_account_20 = require("./company/Company_Account_20")(sequelize, Sequelize);
db.company_account_25 = require("./company/Company_Account_25")(sequelize, Sequelize);
db.company_account_30 = require("./company/Company_Account_30")(sequelize, Sequelize);
db.company_account_35 = require("./company/Company_Account_35")(sequelize, Sequelize);
db.company_account_40 = require("./company/Company_Account_40")(sequelize, Sequelize);
db.company_account_45 = require("./company/Company_Account_45")(sequelize, Sequelize);
db.company_account_50 = require("./company/Company_Account_50")(sequelize, Sequelize);

db.company_date_5 = require("./company/Company_Date_5")(sequelize, Sequelize);
db.company_date_10 = require("./company/Company_Date_10")(sequelize, Sequelize);
db.company_date_15 = require("./company/Company_Date_15")(sequelize, Sequelize);
db.company_date_20 = require("./company/Company_Date_20")(sequelize, Sequelize);
db.company_date_25 = require("./company/Company_Date_25")(sequelize, Sequelize);
db.company_date_30 = require("./company/Company_Date_30")(sequelize, Sequelize);
db.company_date_35 = require("./company/Company_Date_35")(sequelize, Sequelize);
db.company_date_40 = require("./company/Company_Date_40")(sequelize, Sequelize);
db.company_date_45 = require("./company/Company_Date_45")(sequelize, Sequelize);
db.company_date_50 = require("./company/Company_Date_50")(sequelize, Sequelize);

db.company_mortgage_5 = require("./company/Company_Mortgage_5")(sequelize, Sequelize);
db.company_mortgage_10 = require("./company/Company_Mortgage_10")(sequelize, Sequelize);
db.company_mortgage_15 = require("./company/Company_Mortgage_15")(sequelize, Sequelize);
db.company_mortgage_20 = require("./company/Company_Mortgage_20")(sequelize, Sequelize);
db.company_mortgage_25 = require("./company/Company_Mortgage_25")(sequelize, Sequelize);
db.company_mortgage_30 = require("./company/Company_Mortgage_30")(sequelize, Sequelize);
db.company_mortgage_35 = require("./company/Company_Mortgage_35")(sequelize, Sequelize);
db.company_mortgage_40 = require("./company/Company_Mortgage_40")(sequelize, Sequelize);
db.company_mortgage_45 = require("./company/Company_Mortgage_45")(sequelize, Sequelize);
db.company_mortgage_50 = require("./company/Company_Mortgage_50")(sequelize, Sequelize);

db.company_previousname_5 = require("./company/Company_PreviousName_5")(sequelize, Sequelize);
db.company_previousname_10 = require("./company/Company_PreviousName_10")(sequelize, Sequelize);
db.company_previousname_15 = require("./company/Company_PreviousName_15")(sequelize, Sequelize);
db.company_previousname_20 = require("./company/Company_PreviousName_20")(sequelize, Sequelize);
db.company_previousname_25 = require("./company/Company_PreviousName_25")(sequelize, Sequelize);
db.company_previousname_30 = require("./company/Company_PreviousName_30")(sequelize, Sequelize);
db.company_previousname_35 = require("./company/Company_PreviousName_35")(sequelize, Sequelize);
db.company_previousname_40 = require("./company/Company_PreviousName_40")(sequelize, Sequelize);
db.company_previousname_45 = require("./company/Company_PreviousName_45")(sequelize, Sequelize);
db.company_previousname_50 = require("./company/Company_PreviousName_50")(sequelize, Sequelize);

db.company_regaddress_5 = require("./company/Company_RegAddress_5")(sequelize, Sequelize);
db.company_regaddress_10 = require("./company/Company_RegAddress_10")(sequelize, Sequelize);
db.company_regaddress_15 = require("./company/Company_RegAddress_15")(sequelize, Sequelize);
db.company_regaddress_20 = require("./company/Company_RegAddress_20")(sequelize, Sequelize);
db.company_regaddress_25 = require("./company/Company_RegAddress_25")(sequelize, Sequelize);
db.company_regaddress_30 = require("./company/Company_RegAddress_30")(sequelize, Sequelize);
db.company_regaddress_35 = require("./company/Company_RegAddress_35")(sequelize, Sequelize);
db.company_regaddress_40 = require("./company/Company_RegAddress_40")(sequelize, Sequelize);
db.company_regaddress_45 = require("./company/Company_RegAddress_45")(sequelize, Sequelize);
db.company_regaddress_50 = require("./company/Company_RegAddress_50")(sequelize, Sequelize);

db.company_siccode_5 = require("./company/Company_SICCode_5")(sequelize, Sequelize);
db.company_siccode_10 = require("./company/Company_SICCode_10")(sequelize, Sequelize);
db.company_siccode_15 = require("./company/Company_SICCode_15")(sequelize, Sequelize);
db.company_siccode_20 = require("./company/Company_SICCode_20")(sequelize, Sequelize);
db.company_siccode_25 = require("./company/Company_SICCode_25")(sequelize, Sequelize);
db.company_siccode_30 = require("./company/Company_SICCode_30")(sequelize, Sequelize);
db.company_siccode_35 = require("./company/Company_SICCode_35")(sequelize, Sequelize);
db.company_siccode_40 = require("./company/Company_SICCode_40")(sequelize, Sequelize);
db.company_siccode_45 = require("./company/Company_SICCode_45")(sequelize, Sequelize);
db.company_siccode_50 = require("./company/Company_SICCode_50")(sequelize, Sequelize);

db.company_summary_5 = require("./company/Company_Summary_5")(sequelize, Sequelize);
db.company_summary_10 = require("./company/Company_Summary_10")(sequelize, Sequelize);
db.company_summary_15 = require("./company/Company_Summary_15")(sequelize, Sequelize);
db.company_summary_20 = require("./company/Company_Summary_20")(sequelize, Sequelize);
db.company_summary_25 = require("./company/Company_Summary_25")(sequelize, Sequelize);
db.company_summary_30 = require("./company/Company_Summary_30")(sequelize, Sequelize);
db.company_summary_35 = require("./company/Company_Summary_35")(sequelize, Sequelize);
db.company_summary_40 = require("./company/Company_Summary_40")(sequelize, Sequelize);
db.company_summary_45 = require("./company/Company_Summary_45")(sequelize, Sequelize);
db.company_summary_50 = require("./company/Company_Summary_50")(sequelize, Sequelize);

db.person_address_5 = require("./person/Person_Address_5")(sequelize, Sequelize);
db.person_address_10 = require("./person/Person_Address_10")(sequelize, Sequelize);
db.person_address_15 = require("./person/Person_Address_15")(sequelize, Sequelize);
db.person_address_20 = require("./person/Person_Address_20")(sequelize, Sequelize);
db.person_address_25 = require("./person/Person_Address_25")(sequelize, Sequelize);
db.person_address_30 = require("./person/Person_Address_30")(sequelize, Sequelize);
db.person_address_35 = require("./person/Person_Address_35")(sequelize, Sequelize);
db.person_address_40 = require("./person/Person_Address_40")(sequelize, Sequelize);
db.person_address_45 = require("./person/Person_Address_45")(sequelize, Sequelize);
db.person_address_50 = require("./person/Person_Address_50")(sequelize, Sequelize);
db.person_address_55 = require("./person/Person_Address_55")(sequelize, Sequelize);
db.person_address_60 = require("./person/Person_Address_60")(sequelize, Sequelize);
db.person_address_65 = require("./person/Person_Address_65")(sequelize, Sequelize);
db.person_address_70 = require("./person/Person_Address_70")(sequelize, Sequelize);
db.person_address_75 = require("./person/Person_Address_75")(sequelize, Sequelize);

db.person_date_5 = require("./person/Person_Date_5")(sequelize, Sequelize);
db.person_date_10 = require("./person/Person_Date_10")(sequelize, Sequelize);
db.person_date_15 = require("./person/Person_Date_15")(sequelize, Sequelize);
db.person_date_20 = require("./person/Person_Date_20")(sequelize, Sequelize);
db.person_date_25 = require("./person/Person_Date_25")(sequelize, Sequelize);
db.person_date_30 = require("./person/Person_Date_30")(sequelize, Sequelize);
db.person_date_35 = require("./person/Person_Date_35")(sequelize, Sequelize);
db.person_date_40 = require("./person/Person_Date_40")(sequelize, Sequelize);
db.person_date_45 = require("./person/Person_Date_45")(sequelize, Sequelize);
db.person_date_50 = require("./person/Person_Date_50")(sequelize, Sequelize);
db.person_date_55 = require("./person/Person_Date_55")(sequelize, Sequelize);
db.person_date_60 = require("./person/Person_Date_60")(sequelize, Sequelize);
db.person_date_65 = require("./person/Person_Date_65")(sequelize, Sequelize);
db.person_date_70 = require("./person/Person_Date_70")(sequelize, Sequelize);
db.person_date_75 = require("./person/Person_Date_75")(sequelize, Sequelize);

db.person_name_5 = require("./person/Person_Name_5")(sequelize, Sequelize);
db.person_name_10 = require("./person/Person_Name_10")(sequelize, Sequelize);
db.person_name_15 = require("./person/Person_Name_15")(sequelize, Sequelize);
db.person_name_20 = require("./person/Person_Name_20")(sequelize, Sequelize);
db.person_name_25 = require("./person/Person_Name_25")(sequelize, Sequelize);
db.person_name_30 = require("./person/Person_Name_30")(sequelize, Sequelize);
db.person_name_35 = require("./person/Person_Name_35")(sequelize, Sequelize);
db.person_name_40 = require("./person/Person_Name_40")(sequelize, Sequelize);
db.person_name_45 = require("./person/Person_Name_45")(sequelize, Sequelize);
db.person_name_50 = require("./person/Person_Name_50")(sequelize, Sequelize);
db.person_name_55 = require("./person/Person_Name_55")(sequelize, Sequelize);
db.person_name_60 = require("./person/Person_Name_60")(sequelize, Sequelize);
db.person_name_65 = require("./person/Person_Name_65")(sequelize, Sequelize);
db.person_name_70 = require("./person/Person_Name_70")(sequelize, Sequelize);
db.person_name_75 = require("./person/Person_Name_75")(sequelize, Sequelize);

db.person_summary_5 = require("./person/Person_Summary_5")(sequelize, Sequelize);
db.person_summary_10 = require("./person/Person_Summary_10")(sequelize, Sequelize);
db.person_summary_15 = require("./person/Person_Summary_15")(sequelize, Sequelize);
db.person_summary_20 = require("./person/Person_Summary_20")(sequelize, Sequelize);
db.person_summary_25 = require("./person/Person_Summary_25")(sequelize, Sequelize);
db.person_summary_30 = require("./person/Person_Summary_30")(sequelize, Sequelize);
db.person_summary_35 = require("./person/Person_Summary_35")(sequelize, Sequelize);
db.person_summary_40 = require("./person/Person_Summary_40")(sequelize, Sequelize);
db.person_summary_45 = require("./person/Person_Summary_45")(sequelize, Sequelize);
db.person_summary_50 = require("./person/Person_Summary_50")(sequelize, Sequelize);
db.person_summary_55 = require("./person/Person_Summary_55")(sequelize, Sequelize);
db.person_summary_60 = require("./person/Person_Summary_60")(sequelize, Sequelize);
db.person_summary_65 = require("./person/Person_Summary_65")(sequelize, Sequelize);
db.person_summary_70 = require("./person/Person_Summary_70")(sequelize, Sequelize);
db.person_summary_75 = require("./person/Person_Summary_75")(sequelize, Sequelize);

db.account_2020_04 = require("./account/AccountData202004")(sequelize, Sequelize);
module.exports = db;
