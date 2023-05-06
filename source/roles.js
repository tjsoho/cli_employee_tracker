const connection = require('../db/connection')
const inquirer = require('inquirer')

function viewAllRoles() {
   connection.query('SELECT * FROM role;', function (err, results, fields) {
      console.log(results);
   });
}

// Add roles

function addRole() {
   inquirer.prompt([{
      name: 'title',
      message: 'write role title',
   },
   {
      name: 'salary',
      message: 'write role salary',
   },
   {
      name: 'department_id',
      message: 'write department id',
   },
   ]).then(res => {
      connection.query('INSERT INTO role SET ?', res, function (err, results, fields) {
         console.log('it worked');
      });
   })
}


module.exports = { viewAllRoles, addRole };