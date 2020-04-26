
module.exports = (sequelize, Sequelize) => {
    let PersonModel = sequelize.define("tbl_person", {
        company_number: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        links_self: {
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
        premises: {
            type: Sequelize.STRING
        },
        region: {
            type: Sequelize.STRING
        },
        ceased_on: {
            type: Sequelize.STRING
        },
        country_of_residence: {
            type: Sequelize.STRING
        },
        date_of_birth_month: {
            type: Sequelize.STRING
        },
        date_of_birth_year: {
            type: Sequelize.STRING
        },
        etag: {
            type: Sequelize.STRING
        },
        kind: {
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
        },
        nationality: {
            type: Sequelize.STRING
        },
        natures_of_control: {
            type: Sequelize.STRING
        },
        notified_on: {
            type: Sequelize.STRING
        }
    });

    return PersonModel;
};