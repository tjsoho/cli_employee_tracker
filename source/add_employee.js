
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
                name: 'id',
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

                connection.query('INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?);', [res.firstname, res.lastname, roleRes.id], function (err, results, fields) {
                    if (err) console.log(err);
                    connection.query('SELECT * FROM employee;', function (err, results, fields) {
                        console.table(results);
                    });
                });
            })
        })
    });
}

function updateEmployee() {
    // Get the list of employees from the database
    connection.query('SELECT * FROM employee', function (err, results, fields) {
        if (err) console.log(err);
        // Prompt user to select an employee to update
        inquirer.prompt([
            {
                type: 'list',
                name: 'employee',
                message: 'Select an employee to delete:',
                choices: results.map(result => ({ name: `${result.first_name} ${result.last_name}`, value: result.id }))
            }
        ]).then(res => {
            // Prompt user to enter the updated employee information
            inquirer.prompt([
                {
                    name: 'first_name',
                    message: 'Enter employee first name:',
                },
                {
                    name: 'last_name',
                    message: 'Enter employee last name:',
                },
                {
                    name: 'role_id',
                    message: 'Enter employee role id:',
                },
                {
                    name: 'manager_id',
                    message: 'Enter employee manager id:',
                }
            ]).then(updatedEmployee => {
                // Update the employee in the database
                connection.query('UPDATE employee SET first_name = ?, last_name = ?, role_id = ?, manager_id = ? WHERE id = ?', [
                    updatedEmployee.first_name,
                    updatedEmployee.last_name,
                    updatedEmployee.role_id,
                    updatedEmployee.manager_id,
                    res.employee
                ], function (err, results, fields) {
                    if (err) console.log(err);
                    console.log(`Employee ${res.employee} has been updated.`);
                    connection.query('SELECT * FROM employee;', function (err, results, fields) {
                        console.table(results);
                    });
                });
            });
        });
    });
}


function deleteEmployee() {
    // Get the list of employees from the database
    connection.query('SELECT * FROM employee', function (err, results, fields) {
        if (err) console.log(err);
        // Prompt user to select an employee to update
        inquirer.prompt([
            {
                type: 'list',
                name: 'employee',
                message: 'Select an employee to delete:',
                choices: results.map(result => ({ name: `${result.first_name} ${result.last_name}`, value: result.id }))
            }
        ]).then(res => {
            // Update the employee in the database
            connection.query('DELETE FROM employee WHERE id = ?', [res.employee], function (err, results, fields) {
                if (err) console.log(err);
                console.log(`Employee ${res.employee} has been deleted.`);
                connection.query('SELECT * FROM employee;', function (err, results, fields) {
                    console.table(results);
                });
            });
        });
    });
}




module.exports = { addEmployee, viewEmployee, updateEmployee, deleteEmployee }