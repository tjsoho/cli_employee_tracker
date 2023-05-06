

// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const mysql = require('mysql2');
const view_department = require("./source/view_department");
require('console.table');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'tjcarroll1',
      database: 'employee_tracker_db'
    },
    console.log(`Connected to the employee_tracker_db database.`)
  );


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


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        if(answers.action === 'view all departments'){
            DESCRIBE department;
        } else if (answers.action === 'view all roles') {
            console.log('roles')
        } else if (answers.action === 'view all employees') {
            console.log('employees')
        }  
    })
}

// Function call to initialize app
init();

//what are the different types of prompt from iquirer