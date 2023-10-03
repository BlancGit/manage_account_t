const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
global.__basedir = __dirname;
var cors0ptions = {origin: "*"};
app.use(cors(cors0ptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get("/",(req,res)=>{
    res.json({ message: "Welcome to the Manage count API."})
});

require ("./app/routes/user.route")(app);