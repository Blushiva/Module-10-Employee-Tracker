/* Must ADD the Values here I dont understand where they come from is it just an open array?*/
/*Must include the values for the department, role, and employee tables.*/

/* google SQL insert to figure out what to put in there*/

INSERT INTO department(department_id, department_name, total_utilized_budget)  
VALUES ("Department ID", "Department Name", "Total Utilized Budget");

INSERT INTO role(role_id, title, salary, department_id)
VALUES ("Role ID", "Title", "Salary", "Department ID");

INSERT INTO employee(Employee_id,first_name, last_name, role_id, manager_id)    
VALUES ("Employee ID", "First Name", "Last Name", "Role ID", "Manager ID");
