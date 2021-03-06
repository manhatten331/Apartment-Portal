const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));


require("./routes/api-routes")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, () => {
        console.log("App listening on PORT " + PORT)
    });
});
