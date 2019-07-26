const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const db = require("../models");

process.env.SECRET_KEY = 'secret'

module.exports = function(app) {
    app.post("/register", (req, res) => {
        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber
        }

        db.apartmentPortal.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (!user) {
                const hash = bcrypt.hashSync(newUser.password, 10)
                newUser.password = hash
                
                db.apartmentPortal.create(
                    newUser
                )
                .then(currentUser => {
                    let token = jwt.sign(currentUser.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    });

                    res.json({ token: token })
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
            } else {
                res.json({ error: "User already exists"})
            }
        })
        .catch(err => {
            res.send("error: " + err)
        })
    })

    
}