
// Code taken from public code for the pretty shiny look
const connection = require('./config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const chalk = require('chalk');
const figlet = require('figlet');
const validate = require('./javascript/validate');

// Database Connect and Starter Title
connection.connect((error) => {
  if (error) throw error;
  console.log(chalk.yellow.bold(`====================================================================================`));
  console.log(``);
  console.log(chalk.greenBright.bold(figlet.textSync('Employee Tracker')));
  console.log(``);
  console.log(`                                                          ` + chalk.greenBright.bold('Created By: Brandi Rasmussen'));
  console.log(``);
  console.log(chalk.yellow.bold(`====================================================================================`));
  promptUser();
});

// Prompt user with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.
// * Update employee managers. * View employees by manager. * View employees by department. * Delete departments, roles, and employees.
//* View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.
// The user can also exit the application.

// The user will be prompted with the following options:
const promptUser = () => {
    inquirer.prompt([
        {
            name: 'options',     
            type: 'list',
            message: 'Please select an option:',
            options: [  
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add A Department',
                'Add A Role',
                'Add An Employee',
                'Update An Employee Role',
                'Update Employee Manager',
                'Update Employee Department',
                'View Employees By Manager',
                'View employees By Department',
                'Delete Department',
                'Delete Role',
                'Delete Employee',
                'View Total Utilized Budget Of A Department',
                'Exit'
            ]
        }
    ])
    .then ((response) => {
        const { options } = response;
        if (options === 'View All Departments') {
            viewDepartments();
        }   else if (options === 'View All Roles') {            
            viewRoles();
        }
        else if (options === 'View All Employees') {
            viewEmployees();
        }
        else if (options === 'Add A Department') {
            addDepartment();
        }
        else if (options === 'Add A Role') {
            addRole();
        }
        else if (options === 'Add An Employee') {
            addEmployee();
        }
        else if (options === 'Update An Employee Role') {
            updateEmployeeRole();
        }
        else if (options === 'Update Employee Manager') {
            updateEmployeeManager();
        }
        else if (options === 'Update Employee Department') {
            updateEmployeeDepartment();
        }
        else if (options === 'View Employees By Manager') {
            viewEmployeesByManager();
        }
        else if (options === 'View Employees By Department') {
            viewEmployeesByDepartment();
        }
        else if (options === 'Delete Department') {
            deleteDepartment();
        }
        else if (options === 'Delete Role') {
            deleteRole();
        }
        else if (options === 'Delete Employee') {
            deleteEmployee();
        }
        else if (options === 'View Total Utilized Budget Of A Department') {
            viewTotalUtilizedBudgetOfADepartment();
        }
        else {
            connection.end();
        }
    }       
    )}  
