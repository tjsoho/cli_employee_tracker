INSERT INTO department (name)
VALUES ("Finance"),
       ("Sales"),
       ("Engineering"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 100000, 1),
        ("CFO", 100000, 2),
        ("COO", 100000, 3),
        ("CTO", 100000, 4);
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Frank", 1, NULL),
        ("Jane", "Doe", 2, 1),
        ("Jack", "Mi", 3, 2),
        ("Jill", "Si", 4, 2);
