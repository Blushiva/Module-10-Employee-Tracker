
// Code taken from public code for the pretty shiny look will add more if I dont get sick of this project.
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

// View All Departments
const viewDepartments = () => {
    const query = `SELECT * FROM department`;
    connection.query(query, (error, response) => {
        if (error) throw error;
        console.table(response);
        promptUser();
    });
};

// View All Roles
const viewRoles = () => {
    const query = `SELECT * FROM role`;
    connection.query(query, (error, response) => {
        if (error) throw error;
        console.table(response);
        promptUser();
    });
};

// View All Employees
const viewEmployees = () => {
    const query = `SELECT * FROM employee`;
    connection.query(query, (error, response) => {
        if (error) throw error;
        console.table(response);
        promptUser();
    });
};

// Add A Department
const addDepartment = () => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter the name of the department:',
            validate: validate.validateString
        }
    ])
    .then ((response) => {
        const query = `INSERT INTO department SET ?`;
        connection.query(query, response, (error) => {
            if (error) throw error;
            console.log('The department has been added successfully!');
            promptUser();
        });
    });
};

// Add A Role
const addRole = () => {
    const query = `SELECT * FROM department`;
    connection.query(query, (error, response) => {
        if (error) throw error;
        inquirer.prompt([
            {
                name: 'title',
                type: 'input',
                message: 'Enter the title of the role:',
                validate: validate.validateString
            },
            {
                name: 'salary',
                type: 'input',
                message: 'Enter the salary of the role:',
                validate: validate.validateSalary
            },
            {
                name: 'department_id',
                type: 'list',
                message: 'Select the department of the role:',
                choices: response.map(department => {
                    return {
                        name: department.name,
                        value: department.id
                    }
                })
            }
        ])
        .then ((response) => {
            const query = `INSERT INTO role SET ?`;
            connection.query(query, response, (error) => {
                if (error) throw error;
                console.log('The role has been added successfully!');
                promptUser();
            });
        });
    });
};

// Add An Employee
const addEmployee = () => {
    const query = `SELECT * FROM role`;
    connection.query(query, (error, response) => {
        if (error) throw error;
        inquirer.prompt([
            {
                name: 'first_name',
                type: 'input',
                message: 'Enter the first name of the employee:',
                validate: validate.validateString
            },
            {
                name: 'last_name',
                type: 'input',
                message: 'Enter the last name of the employee:',
                validate: validate.validateString
            },
            {
                name: 'role_id',
                type: 'list',
                message: 'Select the role of the employee:',
                choices: response.map(role => {
                    return {
                        name: role.title,
                        value: role.id
                    }
                })
            }
        ])
        .then ((response) => {
            const query = `INSERT INTO employee SET ?`;
            connection.query(query, response, (error) => {
                if (error) throw error;
                console.log('The employee has been added successfully!');
                promptUser();
            });
        });
    });
};

// Update An Employee Role
const updateEmployeeRole = () => {
    const query = `SELECT * FROM employee`;
    connection.query(query, (error, employees) => {
        if (error) throw error;
        const query = `SELECT * FROM role`;
        connection.query(query, (error, roles) => {
            if (error) throw error;
            inquirer.prompt([
                {
                    name: 'employee_id',
                    type: 'list',
                    message: 'Select the employee you want to update the role:',
                    choices: employees.map(employee => {
                        return {
                            name: employee.first_name + ' ' + employee.last_name,
                            value: employee.id
                        }
                    })
                },
                {
                    name: 'role_id',
                    type: 'list',
                    message: 'Select the new role of the employee:',
                    choices: roles.map(role => {
                        return {
                            name: role.title,
                            value: role.id
                        }
                    })
                }
            ])
            .then ((response) => {
                const query = `UPDATE employee SET role_id = ? WHERE id = ?`;
                connection.query(query, [response.role_id, response.employee_id], (error) => {
                    if (error) throw error;
                    console.log('The employee role has been updated successfully!');
                    promptUser();
                });
            });
        });
    });
};

// Update Employee Manager
const updateEmployeeManager = () => {
    const query = `SELECT * FROM employee`;
    connection.query(query, (error, employees) => {
        if (error) throw error;
        inquirer.prompt([
            {
                name: 'employee_id',
                type: 'list',
                message: 'Select the employee that you want to update their manager:',
                choices: employees.map(employee => {
                    return {
                        name: employee.first_name + ' ' + employee.last_name,
                        value: employee.id
                    }
                })
            },
            {
                name: 'manager_id',
                type: 'list',
                message: 'Select the new manager of the employee:',
                choices: employees.map(employee => {
                    return {
                        name: employee.first_name + ' ' + employee.last_name,
                        value: employee.id
                    }
                })
            }
        ])
        .then ((response) => {
            const query = `UPDATE employee SET manager_id = ? WHERE id = ?`;
            connection.query(query, [response.manager_id, response.employee_id], (error) => {
                if (error) throw error;
                console.log('The employee manager has been updated successfully!');
                promptUser();
            });
        });
    });
};

// Update Employee Department
const updateEmployeeDepartment = () => {
    const query = `SELECT * FROM employee`;
    connection.query(query, (error, employees) => {
        if (error) throw error;
        const query = `SELECT * FROM department`;
        connection.query(query, (error, departments) => {
            if (error) throw error;
            inquirer.prompt([
                {
                    name: 'employee_id',
                    type: 'list',
                    message: 'Select the employee that you want to update their department:',
                    choices: employees.map(employee => {
                        return {
                            name: employee.first_name + ' ' + employee.last_name,
                            value: employee.id
                        }
                    })
                },
                {
                    name: 'department_id',
                    type: 'list',
                    message: 'Select the new department of the employee:',
                    choices: departments.map(department => {
                        return {
                            name: department.name,
                            value: department.id
                        }
                    })
                }
            ])
            .then ((response) => {
                const query = `UPDATE employee SET department_id = ? WHERE id = ?`;
                connection.query(query, [response.department_id, response.employee_id], (error) => {
                    if (error) throw error;
                    console.log('The employee department has been updated successfully!');
                    promptUser();
                });
            });
        });
    });
}

// View Employees By Manager
const viewEmployeesByManager = () => {
    const query = `SELECT * FROM employee`;
    connection.query(query, (error, employees) => {
        if (error) throw error;
        inquirer.prompt([
            {
                name: 'manager_id',
                type: 'list',
                message: 'Select the manager to view their employees:',
                choices: employees.map(employee => {
                    return {
                        name: employee.first_name + ' ' + employee.last_name,
                        value: employee.id
                    }
                })
            }
        ])
        .then ((response) => {
            const query = `SELECT * FROM employee WHERE manager_id = ?`;
            connection.query(query, response.manager_id, (error, response) => {
                if (error) throw error;
                console.table(response);
                promptUser();
            });
        });
    });
};

// View Employees By Department
const viewEmployeesByDepartment = () => {
    const query = `SELECT * FROM department`;
    connection.query(query, (error, departments) => {
        if (error) throw error;
        inquirer.prompt([
            {
                name: 'department_id',
                type: 'list',
                message: 'Select the department to view their employees:',
                choices: departments.map(department => {
                    return {
                        name: department.name,
                        value: department.id
                    }
                })
            }
        ])
        .then ((response) => {
            const query = `SELECT * FROM employee WHERE department_id = ?`;
            connection.query(query, response.department_id, (error, response) => {
                if (error) throw error;
                console.table(response);
                promptUser();
            });
        });
    });
};

// Delete Department
const deleteDepartment = () => {
    const query = `SELECT * FROM department`;
    connection.query(query, (error, response) => {
        if (error) throw error;
        inquirer.prompt([
            {
                name: 'department_id',
                type: 'list',
                message: 'Select the department to delete:',
                choices: response.map(department => {
                    return {
                        name: department.name,
                        value: department.id
                    }
                })
            }
        ])
        .then ((response) => {
            const query = `DELETE FROM department WHERE id = ?`;
            connection.query(query, response.department_id, (error) => {
                if (error) throw error;
                console.log('The department has been deleted successfully!');
                promptUser();
            });
        });
    });
};

// Delete Role
const deleteRole = () => {
    const query = `SELECT * FROM role`;
    connection.query(query, (error, response) => {
        if (error) throw error;
        inquirer.prompt([
            {
                name: 'role_id',
                type: 'list',
                message: 'Select the role to delete:',
                choices: response.map(role => {
                    return {
                        name: role.title,
                        value: role.id
                    }
                })
            }
        ])
        .then ((response) => {
            const query = `DELETE FROM role WHERE id = ?`;
            connection.query(query, response.role_id, (error) => {
                if (error) throw error;
                console.log('The role has been deleted successfully!');
                promptUser();
            });
        });
    });
};

// Delete Employee
const deleteEmployee = () => {
    const query = `SELECT * FROM employee`;
    connection.query(query, (error, response) => {
        if (error) throw error;
        inquirer.prompt([
            {
                name: 'employee_id',
                type: 'list',
                message: 'Select the employee to delete:',
                choices: response.map(employee => {
                    return {
                        name: employee.first_name + ' ' + employee.last_name,
                        value: employee.id
                    }
                })
            }
        ])
        .then ((response) => {
            const query = `DELETE FROM employee WHERE id = ?`;
            connection.query(query, response.employee_id, (error) => {
                if (error) throw error;
                console.log('The employee has been deleted successfully!');
                promptUser();
            });
        });
    });
};

// View Total Utilized Budget Of A Department
const viewTotalUtilizedBudgetOfADepartment = () => {
    const query = `SELECT * FROM department`;
    connection.query(query, (error, departments) => {
        if (error) throw error;
        inquirer.prompt([
            {
                name: 'department_id',
                type: 'list',
                message: 'Select the department to view the total utilized budget:',
                choices: departments.map(department => {
                    return {
                        name: department.name,
                        value: department.id
                    }
                })
            }
        ])
        .then ((response) => {
            const query = `SELECT SUM(salary) AS total_utilized_budget FROM employee 
            INNER JOIN role ON employee.role_id = role.id 
            WHERE role.department_id = ?`;
            connection.query(query, response.department_id, (error, response) => {
                if (error) throw error;
                console.table(response);
                console.log('The departments total utilized budget is:' + response[0].total_utilized_budget);
                promptUser();
            });
        });
    });
};

// Exit
const exit = () => {
    connection.end();
    console.log('Goodbye!');
};