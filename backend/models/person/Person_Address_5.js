
module.exports = (sequelize, Sequelize) => {
    let PersonAddress5Model = sequelize.define("tbl_person_address_5", {
        company_number: {
            type: Sequelize.STRING
        },
        address_line_1: {
            type: Sequelize.STRING
        },
        address_line_2: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        locality: {
            type: Sequelize.STRING
        },
        postal_code: {
            type: Sequelize.STRING
        },
        region: {
            type: Sequelize.STRING
        },
        country_of_residence: {
            type: Sequelize.STRING
        },
    });

    return PersonAddress5Model;
};