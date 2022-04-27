const inquirer = require('inquirer');





// prompt user for action
const promptAction = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'newAction',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
        }
    ])
    .then(choice => {
        if (choice.newAction === 'View all departments') {
            
        }
        if (choice.newAction === 'Add a department') {
         
        }
        if (choice.newAction === 'Update an employee role') {

        }
    })
};









// call start function
promptAction();

