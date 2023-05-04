INSERT INTO department (id, name)
VALUES (1, "Finance"),
       (2, "Sales"),
       (3, "Engineering"),
       (4, "Legal");

INSERT INTO role (id, title, salary, department, department_id)
VALUES (001, "CEO", 100000, Finance, 101,),
        (002, "CFO", 100000, marketing, 102),
        (003, "COO", 100000, services, 103),
        (004, "CTO", 100000, manager, 104);
       
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (0001, "John", "Doe", 1001, 2001),
        (0002, "Jane", "Doe", 1002, 2002),
        (0030, "Jack", "Doe", 1003, 2003),
        (0004, "Jill", "Doe", 1004, 2004);
