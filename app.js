const express = require("express");

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.render("index.ejs");
});

const PORT = 5000;

app.listen(PORT, () =>{
    console.log("app running on port " + PORT);
});