const inquirer = require('inquirer')
const fs = require('fs')
const {Square, Circle, Triangle} = require('./lib/shape')


const questions = [
    {
        name: "logoTitle",
        message: "what is your logo name?",
        type: "input"
    },
    {
        name: "logoTextColor",
        message: "what is your text color?",
        type: "input"
    },
    {
        name: "logoShapeColor",
        message: "what is your logo color?",
        type: "input"
    },
    {
        name: "logoShape",
        message: "what is your logo shape?",
        type: "list",
        choices: [
            "Circle",
            "Square",
            "Triangle",
        ]
    }
];

function init() {
    inquirer.prompt(questions).then(data =>{
        let shape;
        if (data.logoShape === "Circle"){
            shape = new Circle(data.logoTitle, data.logoTextColor, data.logoShapeColor)
        }
        else if (data.logoShape === "Square"){
            shape = new Square(data.logoTitle, data.logoTextColor, data.logoShapeColor)
        }
        else if (data.logoShape === "Triangle"){
            shape = new Triangle(data.logoTitle, data.logoTextColor, data.logoShapeColor)
        }
        fs.writeFileSync("./logo.svg", shape.render())
    })
}

init();