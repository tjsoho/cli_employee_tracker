
const connection = require('../db/connection')
const inquirer = require('inquirer');

function viewEmployee() {
    connection.query('SELECT * FROM employee;', function (err, results, fields) {
        console.log(results);
    });
}

function addEmployee() {
    inquirer.prompt([{
        name: 'firstname',
        message: 'write name',
    },
    {
        name: 'lastname',
        message: 'write surname',
    },
    ]).then(res => {
        connection.query('SELECT * FROM roles;', function (err, results, fields) {
            console.log(results)
            inquirer.prompt([{
                type: 'list',
                name: 'title',
                message: 'write role title',
                choices: ["Finance", "Sales", "Engineering", "Legal"]
                
            }]).then(roleRes => {

                connection.query('INSERT INTO department SET name = ?, role_id = ?;', res.firstname, roleRes.id, function (err, results, fields) {
                    console.log(results);
                });
            })
        })
    });

}
module.exports = { addEmployee, viewEmployee }