const express = require('express');
const app = express();
const port = 8080;
var courses = [
    {
        name: "Node JS",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "React JS",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "Angular JS",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "Vue JS",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "Express JS",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "Next JS",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "Nest JS",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "Nuxt JS",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "Three JS",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "Sequelize JS",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "Mongoose JS",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "JavaScript",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "HTML",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "CSS",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "Bootstrap",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "Material UI",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "Redux",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "React Redux",
        duration: "2 days",
        price: "2000"
    },
    {
        name: "React Native",
        duration: "2 days",
        price: "2000"
    },
];
app.set("port", process.env.PORT || port);

//static folder
app.use("/static", express.static(__dirname + "/public"));

app.listen(app.get("port"), () => {
    console.log(`Server started on port http://localhost:${app.get("port")}`);
}
);

app.get("/", (req, res) => {
    res.json(courses);
});
