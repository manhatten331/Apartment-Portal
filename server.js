const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// the routes file name here
// require("./routes/")(app);

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT)
})