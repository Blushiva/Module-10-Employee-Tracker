/* creates database, employees, roles, and departments tables */

DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE departments (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(30) UNIQUE NOT NULL,
    PRIMARY KEY (id) NOT NULL
);

CREATE TABLE role (
    id: SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INT,
    PRIMARY KEY (id), NOT NULL,
);

/*must figure out how to code if no manager*/
CREATE TABLE employee (
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id) NOT NULL,
);
