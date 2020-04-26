
module.exports = (sequelize, Sequelize) => {
    let PersonDate75Model = sequelize.define("tbl_person_date_75", {
        company_number: {
            type: Sequelize.STRING
        },
        ceased_on: {
            type: Sequelize.STRING
        },
        date_of_birth_month: {
            type: Sequelize.STRING
        },
        date_of_birth_year: {
            type: Sequelize.STRING
        },
        notified_on: {
            type: Sequelize.STRING
        }
    });

    return PersonDate75Model;
};