let View = require('../views/base');
let path = require('path');
let fs = require('fs');

let db = require('../models');
let UserModel = db.users;

Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
        return this.reduce(function (flat, toFlatten) {
            return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
        }, []);
    }
});

let AccountDataModels = [db.account_2020_04];

let CompanyAccountModels =
  [ db.company_account_5, db.company_account_10, db.company_account_15, db.company_account_20, db.company_account_25,
    db.company_account_30, db.company_account_35, db.company_account_40, db.company_account_45, db.company_account_50 ];

let CompanyDateModels =
  [ db.company_date_5, db.company_date_10, db.company_date_15, db.company_date_20, db.company_date_25,
    db.company_date_30, db.company_date_35, db.company_date_40, db.company_date_45, db.company_date_50 ];

let CompanyMortgageModels =
  [ db.company_mortgage_5, db.company_mortgage_10, db.company_mortgage_15, db.company_mortgage_20 , db.company_mortgage_25,
    db.company_mortgage_30, db.company_mortgage_35, db.company_mortgage_40, db.company_mortgage_45, db.company_mortgage_50 ];

let CompanyPreviousNameModels =
  [ db.company_previousname_5, db.company_previousname_10, db.company_previousname_15, db.company_previousname_20,
    db.company_previousname_25, db.company_previousname_30, db.company_previousname_35, db.company_previousname_40,
    db.company_previousname_45, db.company_previousname_50 ];

let CompanyRegAddressModels =
  [ db.company_regaddress_5, db.company_regaddress_10, db.company_regaddress_15, db.company_regaddress_20,
    db.company_regaddress_25, db.company_regaddress_30, db.company_regaddress_35, db.company_regaddress_40,
    db.company_regaddress_45, db.company_regaddress_50 ];

let CompanySICCodeModels =
  [ db.company_siccode_5, db.company_siccode_10, db.company_siccode_15, db.company_siccode_20, db.company_siccode_25,
    db.company_siccode_30, db.company_siccode_35, db.company_siccode_40, db.company_siccode_45, db.company_siccode_50 ];

let CompanySummaryModels =
  [ db.company_summary_5, db.company_summary_10, db.company_summary_15, db.company_summary_20, db.company_summary_25,
    db.company_summary_30, db.company_summary_35, db.company_summary_40, db.company_summary_45, db.company_summary_50 ];

let PersonAddressModels =
  [ db.person_address_5, db.person_address_10, db.person_address_15, db.person_address_20, db.person_address_25,
    db.person_address_30, db.person_address_35, db.person_address_40, db.person_address_45, db.person_address_50,
    db.person_address_55, db.person_address_60, db.person_address_65, db.person_address_70, db.person_address_75,
  ];

let PersonDateModels =
  [ db.person_date_5, db.person_date_10, db.person_date_15, db.person_date_20, db.person_date_25, db.person_date_30,
    db.person_date_35, db.person_date_40, db.person_date_45, db.person_date_50, db.person_date_55, db.person_date_60,
    db.person_date_65, db.person_date_70, db.person_date_75 ];

let PersonNameModels =
  [ db.person_name_5, db.person_name_10, db.person_name_15, db.person_name_20, db.person_name_25, db.person_name_30,
    db.person_name_35, db.person_name_40, db.person_name_45, db.person_name_50, db.person_name_55, db.person_name_60,
    db.person_name_65, db.person_name_70, db.person_name_75 ];

let PersonSummaryModels =
  [ db.person_summary_5, db.person_summary_10, db.person_summary_15, db.person_summary_20, db.person_summary_25,
    db.person_summary_30, db.person_summary_35, db.person_summary_40, db.person_summary_45, db.person_summary_50,
    db.person_summary_55, db.person_summary_60, db.person_summary_65, db.person_summary_70, db.person_summary_75];

let CompanyDBModels = {
    Accounts_AccountRefDay: CompanyAccountModels,
    Accounts_AccountRefMonth: CompanyAccountModels,
    Accounts_NextDueDate: CompanyAccountModels,
    Accounts_LastMadeUpDate: CompanyAccountModels,
    Accounts_AccountCategory: CompanyAccountModels,
    DissolutionDate: CompanyDateModels,
    IncorporationDate: CompanyDateModels,
    Returns_NextDueDate: CompanyDateModels,
    Returns_LastMadeUpDate: CompanyDateModels,
    ConfStmtNextDueDate: CompanyDateModels,
    ConfStmtLastMadeUpDate: CompanyDateModels,
    Mortgages_NumMortCharges: CompanyMortgageModels,
    Mortgages_NumMortOutstanding: CompanyMortgageModels,
    Mortgages_NumMortPartSatisfied: CompanyMortgageModels,
    Mortgages_NumMortSatisfied: CompanyMortgageModels,
    PreviousName_1_CONDATE: CompanyPreviousNameModels,
    PreviousName_1_CompanyName: CompanyPreviousNameModels,
    PreviousName_2_CONDATE: CompanyPreviousNameModels,
    PreviousName_2_CompanyName: CompanyPreviousNameModels,
    PreviousName_3_CONDATE: CompanyPreviousNameModels,
    PreviousName_3_CompanyName: CompanyPreviousNameModels,
    PreviousName_4_CONDATE: CompanyPreviousNameModels,
    PreviousName_4_CompanyName: CompanyPreviousNameModels,
    PreviousName_5_CONDATE: CompanyPreviousNameModels,
    PreviousName_5_CompanyName: CompanyPreviousNameModels,
    PreviousName_6_CONDATE: CompanyPreviousNameModels,
    PreviousName_6_CompanyName: CompanyPreviousNameModels,
    PreviousName_7_CONDATE: CompanyPreviousNameModels,
    PreviousName_7_CompanyName: CompanyPreviousNameModels,
    PreviousName_8_CONDATE: CompanyPreviousNameModels,
    PreviousName_8_CompanyName: CompanyPreviousNameModels,
    PreviousName_9_CONDATE: CompanyPreviousNameModels,
    PreviousName_9_CompanyName: CompanyPreviousNameModels,
    PreviousName_10_CONDATE: CompanyPreviousNameModels,
    PreviousName_10_CompanyName: CompanyPreviousNameModels,
    RegAddress_CareOf: CompanyRegAddressModels,
    RegAddress_POBox: CompanyRegAddressModels,
    RegAddress_AddressLine1: CompanyRegAddressModels,
    RegAddress_AddressLine2: CompanyRegAddressModels,
    RegAddress_PostTown: CompanyRegAddressModels,
    RegAddress_County: CompanyRegAddressModels,
    RegAddress_Country: CompanyRegAddressModels,
    RegAddress_PostCode: CompanyRegAddressModels,
    SICCode_SicText_1: CompanySICCodeModels,
    SICCode_SicText_2: CompanySICCodeModels,
    SICCode_SicText_3: CompanySICCodeModels,
    SICCode_SicText_4: CompanySICCodeModels,
    CompanyName: CompanySummaryModels,
    CompanyNumber: CompanySummaryModels,
    CompanyCategory: CompanySummaryModels,
    CompanyStatus: CompanySummaryModels,
    CountryOfOrigin: CompanySummaryModels,
    LimitedPartnerships_NumGenPartners: CompanySummaryModels,
    LimitedPartnerships_NumLimPartners: CompanySummaryModels,
    URI: CompanySummaryModels
  };

let PersonDBModels = {
    address_line_1: PersonAddressModels,
    address_line_2: PersonAddressModels,
    country: PersonAddressModels,
    locality: PersonAddressModels,
    postal_code: PersonAddressModels,
    region: PersonAddressModels,
    country_of_residence: PersonAddressModels,
    ceased_on: PersonDateModels,
    date_of_birth_month: PersonDateModels,
    date_of_birth_year: PersonDateModels,
    notified_on: PersonDateModels,
    name: PersonNameModels,
    forename: PersonNameModels,
    middle_name: PersonNameModels,
    surname: PersonNameModels,
    name_title: PersonNameModels,
    company_number: PersonSummaryModels,
    links_self: PersonSummaryModels,
    premises: PersonSummaryModels,
    etag: PersonSummaryModels,
    kind: PersonSummaryModels,
    nationality: PersonSummaryModels,
    natures_of_control: PersonSummaryModels
};

let BaseController = require('./BaseController');

module.exports = BaseController.extend({
    name: 'UserController',

    account_settings: async function (req, res, next) {
        let user = await UserModel.findByPk(req.session.user.id);
        let v = new View(res, 'settings/account_settings');
        v.render({
            title: 'UK-GOV|Profile',
            session: req.session,
            i18n: res,
            tab_text: 'settings',
            sub_text: 'settings_profile',
            user: user,
        })
    },
    editProfile: async function (req, res, next) {
        let username = req.body.username, email = req.body.email,
            old_password = req.body.old_password, new_password = req.body.new_password;
        let user = await UserModel.findByPk(req.session.user.id);
        if (user.email !== email) return res.send({status: 'error', message: res.cookie().__('Undefined user')});
        if (!UserModel.verifyPassword(user, old_password)) return res.send({
            status: 'error',
            message: res.cookie().__('Old password is not correct')
        });
        user.username = username;
        user.password = new_password;
        UserModel.encryptPassword(user);
        await user.save();
        req.session.user = user;
        return res.send({status: 'success', message: res.cookie().__('Updated user profile successfully')});
    },
    changeAvatar: async function (req, res, next) {
        let user = await UserModel.findByPk(req.session.user.id);
        let avatarPath = user.avatar;
        if (req.body.avatarImg.length > 1000) {
            let avatarData = req.body.avatarImg.replace(/^data:image\/\w+;base64,/, "");
            let file_extension = '.png';
            if (avatarData.charAt(0) === '/') file_extension = '.jpg';
            else if (avatarData.charAt(0) === 'R') file_extension = '.gif';
            let public_path = path.resolve('public');
            avatarPath = '/avatars/avatar_' + user.id + file_extension;
            let avatarUploadPath = path.resolve('public') + avatarPath;
            fs.writeFileSync(avatarUploadPath, avatarData, 'base64');
        }
        await user.update({avatar: avatarPath});
        req.session.user.avatar = avatarPath;
        return res.send({
            status: 'success',
            message: res.cookie().__('Changed avatar successfully'),
            avatarPath: avatarPath
        });
    },
    error: function (req, res, next) {
        let v = new View(res, 'partials/error');
        v.render({
            title: 'UK-GOV|Error',
            session: req.session,
            i18n: res,
        })
    },

    dashboard: async function (req, res, next) {
        let user = req.session.user;
        let search_category = req.query.sc;
        let search_value = req.query.sv;
        let results = [];
        try {
            let str_token = search_category.split('_');
            let search_field = str_token[1];
            let table_type = str_token[0];

            let company_table_indices = [];       // indices of models matching condition
            let company_indices = [];
            let person_table_indices = [];
            let person_indices = [];
            let companyNumberArray = [];

            if (search_field && search_value) {
                // If search with company table key, execute query first in tbl_companies
                if (table_type === 'c') {
                    // First execute query for getting company numbers and indices matching condition
                    const companyIndexResults = await Promise.all(CompanyDBModels[search_field].map(model => model.findAll({
                        attributes: ['CompanyNumber', 'id'],
                        where: { [search_field]: search_value }
                    })));
                    companyIndexResults.forEach(function(recordGroup, index) {
                        if (recordGroup.length) {
                            company_table_indices.push(index);
                            recordGroup.forEach(function(record) {
                                companyNumberArray.push(record.CompanyNumber);
                                company_indices.push(record.id);
                            });
                        }
                    });

                    // Next, execute query for getting person indices having company numbers
                    const personIndexResults = await Promise.all(PersonDateModels.map(model => model.findAll({
                        attributes: [ 'id' ],
                        where: { company_number: companyNumberArray }
                    })));
                    personIndexResults.forEach(function(recordGroup, index) {
                        if (recordGroup.length) {
                            person_table_indices.push(index);
                            recordGroup.forEach(function(record) {
                                person_indices.push(record.id);
                            });
                        }
                    });
                }
                // If search with person table key, execute query first in tbl_people
                else if (table_type === 'p') {
                    // First, execute query for getting person indices having company numbers
                    const personIndexResults = await Promise.all(PersonDBModels[search_field].map(model => model.findAll({
                        attributes: [ 'id', 'company_number' ],
                        where: { [ search_field ]: search_value }
                    })));
                    personIndexResults.forEach(function(recordGroup, index) {
                        if (recordGroup.length) {
                            person_table_indices.push(index);
                            recordGroup.forEach(function(record) {
                                person_indices.push(record.id);
                                companyNumberArray.push(record.company_number);
                            });
                        }
                    });

                    // Next, execute query for getting company numbers and indices matching condition
                    const companyIndexResults = await Promise.all(CompanySICCodeModels.map(model => model.findAll({
                        attributes: [ 'id' ],
                        where: { CompanyNumber: companyNumberArray }
                    })));
                    companyIndexResults.forEach(function(recordGroup, index) {
                        if (recordGroup.length) {
                            company_table_indices.push(index);
                            recordGroup.forEach(function(record) {
                                company_indices.push(record.id);
                            });
                        }
                    });
                }

                let companyMap = {};
                let accountDataMap = {};
                let people = [];

                // Execute queries for each table group, with indices
                const [ companyAccountGroups, companyDateGroups, companyMortgageGroups, companyPreviousNameGroups,
                    companyRegAddressGroups, companySICCodeGroups, companySummaryGroups, personAddressGroups,
                    personDateGroups, personNameGroups, personSummaryGroups, AccountDataGroups ] = await Promise.all(
                  [
                      Promise.all(company_table_indices.map(index => CompanyAccountModels[index].findAll({
                          where: { id: company_indices }, order: [['CompanyNumber', 'ASC']]
                      }))),
                      Promise.all(company_table_indices.map(index => CompanyDateModels[index].findAll({
                          where: { id: company_indices }, order: [['CompanyNumber', 'ASC']]
                      }))),
                      Promise.all(company_table_indices.map(index => CompanyMortgageModels[index].findAll({
                          where: { id: company_indices }, order: [['CompanyNumber', 'ASC']]
                      }))),
                      Promise.all(company_table_indices.map(index => CompanyPreviousNameModels[index].findAll({
                          where: { id: company_indices }, order: [['CompanyNumber', 'ASC']]
                      }))),
                      Promise.all(company_table_indices.map(index => CompanyRegAddressModels[index].findAll({
                          where: { id: company_indices }, order: [['CompanyNumber', 'ASC']]
                      }))),
                      Promise.all(company_table_indices.map(index => CompanySICCodeModels[index].findAll({
                          where: { id: company_indices }, order: [['CompanyNumber', 'ASC']]
                      }))),
                      Promise.all(company_table_indices.map(index => CompanySummaryModels[index].findAll({
                          where: { id: company_indices }, order: [['CompanyNumber', 'ASC']]
                      }))),

                      Promise.all(person_table_indices.map(index => PersonAddressModels[index].findAll({
                          where: { id: person_indices }, order: [['id', 'ASC']]
                      }))),
                      Promise.all( person_table_indices.map(index => PersonDateModels[index].findAll({
                          where: { id: person_indices }, order: [['id', 'ASC']]
                      }))),
                      Promise.all( person_table_indices.map(index => PersonNameModels[index].findAll({
                          where: { id: person_indices }, order: [['id', 'ASC']]
                      }))),
                      Promise.all(person_table_indices.map(index => PersonSummaryModels[index].findAll({
                          where: { id: person_indices }, order: [['id', 'ASC']]
                      }))),

                      Promise.all(AccountDataModels.map(model => model.findAll({
                          where: { company_number: companyNumberArray }, order: [['id', 'ASC']]
                      }))),
                  ]);

                // Get flatted array, combine into company and person object
                const [ companyAccounts, companyDates, companyMortgages, companyPreviousNames,
                    companyRegAddresses, companySICCodes, companySummaries,
                    personAddresses, personDates, personNames, personSummaries, accountDatas ] = [
                    companyAccountGroups.flat(), companyDateGroups.flat(), companyMortgageGroups.flat(),
                    companyPreviousNameGroups.flat(), companyRegAddressGroups.flat(), companySICCodeGroups.flat(),
                    companySummaryGroups.flat(), personAddressGroups.flat(), personDateGroups.flat(),
                    personNameGroups.flat(), personSummaryGroups.flat(), AccountDataGroups.flat() ];

                const companyCount = Math.min(
                  companyAccounts.length,
                  companyDates.length,
                  companyMortgages.length,
                  companyPreviousNames.length,
                  companyRegAddresses.length,
                  companySICCodes.length,
                  companySummaries.length);
                for (let i = 0; i < companyCount; i++) {
                    let company = {
                        ...(companyAccounts[i].toJSON()),
                        ...(companyDates[i].toJSON()),
                        ...(companyMortgages[i].toJSON()),
                        ...(companyPreviousNames[i].toJSON()),
                        ...(companyRegAddresses[i].toJSON()),
                        ...(companySICCodes[i].toJSON()),
                        ...(companySummaries[i].toJSON()),
                    };
                    companyMap[company.CompanyNumber] = company;
                }

                const personCount = Math.min(
                  personAddresses.length,
                  personDates.length,
                  personNames.length,
                  personSummaries.length
                );
                for (let i = 0; i < personCount; i++) {
                    let person = {
                        ...(personAddresses[i].toJSON()),
                        ...(personDates[i].toJSON()),
                        ...(personNames[i].toJSON()),
                        ...(personSummaries[i].toJSON())
                    };
                    people.push(person);
                }

                for (let i = 0; i < accountDatas.length; i++) {
                    let accountData = { ...(accountDatas[i].toJSON()) };
                    accountDataMap[accountData.company_number] = accountData;
                }

                // Combine people array and company map
                people.forEach(function(person) {
                    if (companyMap.hasOwnProperty(person.company_number)) {
                        let company = companyMap[person.company_number];
                        let accountData = accountDataMap[person.company_number];
                        results.push({
                            ...company,
                            ...person,
                            ...accountData
                        });
                    }
                });
            }
        } catch (err) {
            console.log(err);
        }

        let v = new View(res, 'admin_vs/dashboard');
        v.render({
            title: 'UK-GOV|Dashboard',
            session: req.session,
            i18n: res,
            tab_text: 'admin_dashboard',
            sub_text: '',
            user: user,
            results: results
        })
    },
});
