module.exports = function (sequelize, Datatypes) {
    const apartmentPortal = sequelize.define("apartmentPortal", {
        apartmentNum: { 
            type: Datatypes.FLOAT,
            allowNull: false
        },
        paymentNum: { 
            type: Datatypes.FLOAT,
            allowNull: false
        }
    });
    return apartmentPortal;
};