
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
        }
    });

    return PersonModel;
};