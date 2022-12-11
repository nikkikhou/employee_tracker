const mysql = require('mysql2');
const inquirer = require('inquirer')
const consoletable = require('console.table')


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

// function which determines action user wishes to take 
// (view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role)

// function which view all departments
function viewAllDepartments(){
  return []
}

// function which view all roles
function viewAllRoles(){
  return []
}

// function which adds a department
function addDepartment(){
  return {}
}

// function which adds a role
function addRole(){
  return {}
}

// function which adds an Employee
function addEmployee(){
  return {}
}
// function which updates an employee role
function updateRole(){
  return {}
}


// function init() {
//   inquirer
//     .prompt(questions)
//     .then((answers) => {
//       writeToFile("README.md", generateMarkdown(answers));
//     })
//     .catch((error) => {
//       if (error.isTtyError) {
//         console.log("Could not be rendered")
//       } else {
//        console.log("Please enter more")
//       }
//     });
// }

// // Function call to initialize app
// init();
