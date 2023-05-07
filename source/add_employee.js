
const connection = require('../db/connection')
const inquirer = require('inquirer');

function viewEmployee() {
    connection.query('SELECT * FROM employee;', function (err, results, fields) {
        console.table(results);
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
        connection.query('SELECT * FROM employee;', function (err, results, fields) {
            console.table(results)
            inquirer.prompt([{
                type: 'list',
                name: 'title',
                message: 'write role title',
                choices: [
                    {
                        name: 'Sales',
                        value: 1
                    },
                    {
                        name: 'Engineering',
                        value: 2
                    },
                    {
                        name: 'Finance',
                        value: 3
                    },
                    {
                        name: 'Legal',
                        value: 4
                    },
            
                ]
                
            }]).then(roleRes => {

                connection.query('INSERT INTO employee SET first_name = ?, last_name = ?, role_id = ?;', [res.firstname, roleRes.id], function (err, results, fields) {
                    console.log(results);
                });
            })
        })
    });

}
module.exports = { addEmployee, viewEmployee }