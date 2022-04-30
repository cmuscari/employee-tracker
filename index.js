const inquirer = require('inquirer');
const db = require('./db/connection');
require('console.table');



const viewDepartments = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        console.table(rows);
        promptAction();
    });
};

const viewRoles = () => {
    const sql = `SELECT role.title, role.id, department.name AS department, role.salary FROM role LEFT JOIN department ON department_id = department.id`;

    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        console.table(rows);
        promptAction();
    });
};

const viewEmployees = () => {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id`;

    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        console.table(rows);
        promptAction();
    });
};

const addDepartment = () => {
    inquirer.prompt(
        {
            type: "input",
            name: "newDepartment",
            message: "What is the name of the new department?"
        }
    )
        .then(departmentName => {
            const sql = `INSERT INTO department (name) VALUES ("${departmentName.newDepartment}")`
            db.query(sql, (err) => {
                if (err) {
                    throw err;
                }
                console.log("The new department was added to the database!");
                promptAction();
            });
        })
};

const addRole = () => {
    inquirer.prompt(
        {
            type: "input",
            name: "newRoleTitle",
            message: "What is the title of the new role?"
        },
        {
            type: "number",
            name: "newRoleSalary",
            message: "What is the salary of the new role?"
        },
        {
            type: "number",
            name: "newRoleDepartment",
            message: "What is the department id of the new role?"
        }
    )
        .then(roleInfo => {
            const sql = `INSERT INTO role (title, salary, department_id) VALUES ("${roleInfo.newRoleTitle}", ${roleInfo.newRoleSalary}, ${roleInfo.newRoleDepartment})`
            db.query(sql, (err) => {
                if (err) {
                    throw err;
                }
                console.log("The new role was added to the database!");
                promptAction();
            });
        })
};







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
                viewDepartments();
            }
            if (choice.newAction === 'View all roles') {
                viewRoles();
            }
            if (choice.newAction === 'View all employees') {
                viewEmployees();
            }
            if (choice.newAction === 'Add a department') {
                addDepartment();
            }
            if (choice.newAction === 'Add a role') {
                addRole();
            }
            if (choice.newAction === 'Add an employee') {
                addEmployee();
            }
            if (choice.newAction === 'Update an employee role') {
                updateEmployeeRole();
            }
        })
};













// call start function
promptAction();

