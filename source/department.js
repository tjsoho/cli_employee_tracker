const connection = require('../db/connection')
const { prompt } = require('inquirer')



function viewAllDepartments() {
   connection.query('SELECT * FROM department;', function (err, results, fields) {
      console.table(results);
   });
}


function addDepartment() {
   prompt([{
      name: 'name',
      message: 'write department name',
   }]).then(res => {
      connection.query('INSERT INTO department SET name = ?;', res.name, function (err, results, fields) {
         connection.query('SELECT * FROM department;', function (err, results, fields) {
            console.table(results);
         });
      })
   })
}

function deleteDepartment() {
   connection.query('SELECT * FROM department;', function (err, results, fields) {
      console.table(results)
      prompt([{
         type: 'list',
         name: 'id',
         message: 'write department name',
         choices: results.map(result => ({ name: `${result.name}`, value: result.id }))
      }]).then(res => {
         connection.query('DELETE FROM department WHERE id = ?;', res.id, function (err, results, fields) {
            connection.query('SELECT * FROM department;', function (err, results, fields) {
               console.table(results);
            });
         })
      })
   })
}





module.exports = { viewAllDepartments, addDepartment, deleteDepartment };