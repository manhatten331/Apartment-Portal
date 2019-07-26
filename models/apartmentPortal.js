module.exports = function (sequelize, Datatypes) {
    const apartmentPortal = sequelize.define("apartmentPortal", {
        firstName: { 
            type: Datatypes.STRING,
            allowNull: false
        },
        lastName: { 
            type: Datatypes.STRING,
            allowNull: false
        },
        email: { 
            type: Datatypes.STRING,
            allowNull: false
        },
        password: { 
            type: Datatypes.STRING,
            allowNull: false
        },
        phoneNumber: { 
            type: Datatypes.STRING,
            allowNull: false
        },
    });
    return apartmentPortal;
};