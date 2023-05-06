// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const mysql = require('mysql2');
const { viewAllDepartments, addDepartment } = require("./source/department_crud");
const { addEmployee} = require ('./source/add_employee')


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


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(answers => {
    if (answers.action === 'view all departments') {
      viewAllDepartments();
    } else if (answers.action === 'add a department') {
      addDepartment()
    } else if (answers.action === 'view all roles') {
      console.log('roles')
    } else if (answers.action === 'add an employee') {
      addEmployee()
    }
    // console.log('==========================')
    // init();
  })
}

// Function call to initialize app
init();

//what are the different types of prompt from iquirer