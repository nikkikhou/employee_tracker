CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(100),
    salary DECIMAL,
   department_id INT
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
   role_id INT
   manager_id  INT
);