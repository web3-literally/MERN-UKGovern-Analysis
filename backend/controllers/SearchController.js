let View = require('../views/base');

let db = require('../models');

let CompanySummaryModels =
  [ db.company_summary_5, db.company_summary_10, db.company_summary_15, db.company_summary_20, db.company_summary_25,
    db.company_summary_30, db.company_summary_35, db.company_summary_40, db.company_summary_45, db.company_summary_50 ];

let CompanyDBModels = {
    CompanyName: CompanySummaryModels,
    CompanyNumber: CompanySummaryModels,
  };

let BaseController = require('./BaseController');

module.exports = BaseController.extend({
    name: 'SearchController',

    dashboard: async function (req, res, next) {
        let user = req.session.user;
        let search_category = req.query.sc;
        let search_value = req.query.sv;
        let results = [];
        try {
            let str_token = search_category.split('_');
            let search_field = str_token[1];
            let table_type = str_token[0];

            if (search_field && search_value) {
                // If search with company table key, execute query first in tbl_companies
                if (table_type === 'c') {
                    // First execute query for getting company numbers and indices matching condition
                    const companyResults = await Promise.all(CompanySummaryModels.map(model => model.findAll({
                        attributes: ['CompanyNumber', 'id', 'CompanyName'],
                        where: { [search_field]: search_value }
                    })));

                    companyResults.forEach(function(recordGroup, index) {
                        if (recordGroup.length) {
                            recordGroup.forEach(function(record) {
                                results.push({
                                    CompanyName: record.CompanyName,
                                    CompanyNumber: record.CompanyNumber,
                                });
                            });
                        }
                    });
                }
            }
        } catch (err) {
            console.log(err);
        }

        let v = new View(res, 'search_vs/dashboard');
        v.render({
            title: 'UK-GOV|Search',
            session: req.session,
            i18n: res,
            tab_text: 'search_dashboard',
            sub_text: '',
            user: user,
            results: results
        })
    },
});
