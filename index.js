// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const mysql = require('mysql2');
const { viewAllDepartments, addDepartment } = require("./source/department_crud");
const { viewEmployee, addEmployee } = require('./source/add_employee')
const { viewAllRoles, addRole } = require('./source/roles')
const cTable = require('console.table');



// TODO: Create an array of questions for user input

const questions = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      "view all departments",
      "add a department",
      "view all roles",
      "add a role",
      "view all employees",
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
      viewAllRoles()
    } else if (answers.action === 'add a role') {
      addRole()
    } else if (answers.action === 'view all employees') {
      viewEmployee()
    } else if (answers.action === 'add an employee') {
      addEmployee()
    } else if (answers.action === 'update an employee role') {
      updateEmployeeRole()
    }
  })
}

// Function call to initialize app
init();
