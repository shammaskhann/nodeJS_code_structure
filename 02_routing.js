const express = require('express');
const app = express();

const home = express.Router();
const about = express.Router();
const contact = express.Router();

home.get("/", (req, res) => { 
    res.send("Home Page");
});
home.get("/task2", (req, res) => { res.send(task2) });
home.get("/products", (req, res) => { res.send("Products calling") });
home.get("/orders", (req, res) => { res.send("Orders Calling") });

about.get("/:username", (req, res) => { res.send(req.params) });

contact.get("/", (req, res) => { res.send("Contact Us") });

app.use("/", home);
app.use("/about", about);
app.use("/contact", contact);

app.listen(3000, () => {
    console.log("Api is Live on http://localhost:3000");
});

