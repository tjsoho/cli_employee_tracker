INSERT INTO department (id, name)
VALUES (1, "Finance"),
       (2, "Sales"),
       (3, "Engineering"),
       (4, "Legal");

INSERT INTO role (id, title, salary, department)
VALUES (001, "CEO", 100000, 101),
        (002, "CFO", 100000, 102),
        (003, "COO", 100000, 103),
        (004, "CTO", 100000, 104);
       
INSERT INTO employee (id, first_name, last_name, role, manager)
VALUES (001, "John", "Doe", 001, 001),
        (002, "Jane", "Doe", 002, 002),
        (003, "Jack", "Doe", 003, 003),
        (004, "Jill", "Doe", 004, 004);
