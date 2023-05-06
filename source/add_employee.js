
const connection = require('../db/connection')
const inquirer = require('inquirer');

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
                message: 'write role',
                choices: ["Finance", "Sales", "Engineering", "Legal"]
                // TODO choices: results.map(x => {id: x.id, rolename: x.title})
            }]).then(roleRes => {

                connection.query('INSERT INTO department SET name = ?, role_id = ?;', res.firstname, roleRes.id, function (err, results, fields) {
                    console.log(results);
                });
            })
        })
    });

}
module.exports = { addEmployee }