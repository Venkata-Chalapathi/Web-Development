
const express = require("express");
let app = express();
const path = require("path");

let port = 8080;

app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
})
app.get("/hello", (req, res) => {
    res.send("Heloo");
})

app.get("/ig/:username", (req, res) => {
    // const followers = ["Gnani","Yashwanth", "imran__", "sai_krishna"];
    let { username } = req.params;
    const instaData = require("./data.json");
    // console.log(instaData);
    const data = instaData[username];
    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.render("error.ejs");
    }
})

app.get("/rolldice", (req, res) => {
    let random = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { random });
})
app.listen(port, () => {
    console.log("listen")
})