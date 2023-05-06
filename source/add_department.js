connection.query('SELECT role.id, role.title FROM role ORDER BY role.id;', async (err, res) => {
    if (err) throw err;
    const { role } = await inquirer.prompt([
        {
            name: 'role',
            type: 'list',
            choices: () => res.map(res => res.title),
            message: 'What is the new employee role?: '
        }
    ]);
    let roleId;
    for (const row of res) {
        if (row.title === role) {
            roleId = row.id;
            continue;
        }
    }