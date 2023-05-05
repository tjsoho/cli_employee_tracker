DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  department_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_department_id
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE CASCADE
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  CONSTRAINT fk_role_id
  FOREIGN KEY (role_id)
  REFERENCES role(id)
  ON DELETE CASCADE
);

