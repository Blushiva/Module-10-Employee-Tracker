# Module 10 Employee Tracker


# DESCRIPTION 

This is an employee tracker that allows for the management of the departments, roles and employees.  It was an assignment for bootcamp class. It requests that we use a CMS to easily view and interact with the information.

## Table of Contents
- [Description](#description)
- [User Story](https://github.com/Blushiva/Module-10-Employee-Tracker/blob/main/README.md#user-story)
- [Acceptance Criteria](https://github.com/Blushiva/Module-10-Employee-Tracker/blob/main/README.md#acceptance-criteria)
- [Table of Contents](##table-of-contents)
- [Video Demonstration](https://github.com/Blushiva/Module-10-Employee-Tracker/blob/main/README.md#video-demonstration)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [Questions](#questions)
- [CLASS REQUIREMENTS](https://github.com/Blushiva/Module-10-Employee-Tracker/blob/main/README.md#for-class-requirements-must-do-all-of-the-following)


# VIDEO DEMONSTRATION
    *Please View Here for Video demonstartion
    *This is placement unitl video is created...

[Module 10 Demo](https: whatever-link this is. com)

# INSTALLATION

# USAGE



# TESTING

Testing is not currently set up.

# CONTRIBUTING

Brandi Rasmussen

References:

How to build CRUD

[CRUD LINK](https://www.freecodecamp.org/news/how-to-build-a-command-line-application-with-nodejs/)

Connecting to PostGres SQL

[How to Connect](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql)

Prisma

[Getting Started](https://www.prisma.io/docs/getting-started)

[Overview of Databases](https://www.prisma.io/docs/orm/overview/databases/postgresql)

[Connecting the Database](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-postgresql)

[Control Functions](https://www.postgresql.org/docs/10/libpq-connect.html#id-1.7.3.8.3.6)

# QUESTIONS

Contact me with any questions.

#
#

## FOR CLASS REQUIREMENTS MUST DO ALL OF THE FOLLOWING

## USER STORY
 I WANT to be able to view and manage the departments, roles, and employees in my company SO THAT I can organize and plan my business.

 ## ACCEPTANCE CRITERIA

 * I should be GIVEN a command-line application that accepts user input WHEN I start the application.

* THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

* WHEN I choose to view all departments...THEN I am presented with a formatted table showing department names and department ids

* WHEN I choose to view all roles...THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

* WHEN I choose to view all employees...THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

* WHEN I choose to add a department...THEN I am prompted to enter the name of the department and that department is added to the database

* WHEN I choose to add a role...THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

* WHEN I choose to add an employee...THEN I am prompted to enter the employee's first name, last name, role, and manager, and that employee is added to the database

* WHEN I choose to update an employee role...THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## GETTING STARTED ON PROJECT

You'll need to use the pg package Links to an external site. to connect to your PostgreSQL database and perform queries, and the Inquirer package Links to an external site. to interact with the user via the command line.

<img src="Assets/100-sql-challenge-ERD.png" alt="a graph with department, role, and employee" title="your schema should contain the following three tables">

As the image illustrates, your schema should contain the following three tables:

* department
  * id: SERIAL PRIMARY KEY
  * name: VARCHAR(30) UNIQUE NOT NULL to hold department name

* role
    * id: SERIAL PRIMARY KEY
    * title: VARCHAR(30) UNIQUE NOT NULL to hold role title
    * salary: DECIMAL NOT NULL to hold role salary
    * department_id: INTEGER NOT NULL to hold reference to department role belongs to

* employee
    * id: SERIAL PRIMARY KEY
    * first_name: VARCHAR(30) NOT NULL to hold employee first name
    * last_name: VARCHAR(30) NOT NULL to hold employee last name
    * role_id: INTEGER NOT NULL to hold reference to employee role
    * manager_id: INTEGER to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)


You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a seeds.sql file to pre-populate your database, making the development of individual features much easier.

## BONUS

#### Try to add some additional functionality to your application, such as the ability to do the following:

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.

# Grading Requirements

### NOTE

If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
A repository that has no code
A repository that includes a unique name but nothing else
A repository that includes only a README file but nothing else
A repository that only includes starter code
This Challenge is graded based on the following criteria:

### Deliverables: 10%

Your GitHub repository containing your application code.

### Walkthrough Video: 27%

* A walkthrough video that demonstrates the functionality of the employee tracker must be submitted, and a link to the video should be included in your README file.
* The walkthrough video must show all of the technical acceptance criteria being met.
* The walkthrough video must demonstrate how a user would invoke the application from the command line.
* The walkthrough video must demonstrate a functional menu with the options outlined in the acceptance criteria.

### Technical Acceptance Criteria: 40%

Satisfies all of the preceding acceptance criteria plus the following:

* Uses the Inquirer package Links to an external site..
* Uses the pg package Links to an external site. to connect to a PostgreSQL database.
* Follows the table schema outlined in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains a high-quality README with description and a link to a walkthrough video.

### Application Quality 10%

* The application user experience is intuitive and easy to navigate.

### Bonus

Fulfilling any of the following can add up to 20 points to your grade. Note that the highest grade you can achieve is still 100:

* Application allows users to update employee managers (2 points).
* Application allows users to view employees by manager (2 points).
* Application allows users to view employees by department (2 points).
* Application allows users to delete departments, roles, and employees (2 points for each).
* Application allows users to view the total utilized budget of a department—in other words, the combined salaries of all employees in that department (8 points).

### How to Submit the Challenge

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application.
* The URL of the GitHub repository, with a unique name and a README describing the project.





