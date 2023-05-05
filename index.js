//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const mysql = require('mysql2');
require('console.table');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role"
    ]
  }, 
];



























// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
        err ? console.log(err) : console.log("successful readme")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            return writeToFile("README.md", generateMarkdown(answers))
        })
}

// Function call to initialize app
init();

//what are the different types of prompt from iquirer