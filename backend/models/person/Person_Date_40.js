
module.exports = (sequelize, Sequelize) => {
    let PersonDate40Model = sequelize.define("tbl_person_date_40", {
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

    return PersonDate40Model;
};