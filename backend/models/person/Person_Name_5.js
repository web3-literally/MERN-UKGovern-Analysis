
module.exports = (sequelize, Sequelize) => {
    let PersonName5Model = sequelize.define("tbl_person_name_5", {
        company_number: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        forename: {
            type: Sequelize.STRING
        },
        middle_name: {
            type: Sequelize.STRING
        },
        surname: {
            type: Sequelize.STRING
        },
        name_title: {
            type: Sequelize.STRING
        }
    });

    return PersonName5Model;
};