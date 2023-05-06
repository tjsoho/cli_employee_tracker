const connection = require('../db/connection')
const { prompt } = require('inquirer')

function viewAllDepartments() {
   connection.query('SELECT * FROM department;', function (err, results, fields) {
      console.log(results);
   });
}


function addDepartment() {
   prompt([{
      name: 'name',
      message: 'write department name',
   }]).then(res => {
      connection.query('INSERT INTO department SET name = ?;', res.name, function (err, results, fields) {
         console.log(results);
      });
   })
}




module.exports = { viewAllDepartments, addDepartment };