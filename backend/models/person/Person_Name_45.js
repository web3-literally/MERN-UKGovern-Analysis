
module.exports = (sequelize, Sequelize) => {
    let PersonName45Model = sequelize.define("tbl_person_name_45", {
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

    return PersonName45Model;
};