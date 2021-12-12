//link to HTML generation
const generateHTML = require('./src/generateHTML');

//team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//node.js modules
const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

//Manager Prompts
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the name of the team manager.",
            validate: nameInput => {
                valid = /^\w+([\.-]?\w+)+$/.test(nameInput)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's id.",
            validate: idInput => {
                valid = /^[0-9]+$/.test(idInput)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter the manager's ID.")
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email address.",
            validate: emailInput => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter the manager's email address.")
                    return false;
                }
            }
        },      
        {
            type: 'input',
            name: 'oNumber',
            message: "Please enter the manager's office phone number.",
            validate: officeInput => {
                valid = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(officeInput)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter the manager's office phone number.")
                    return false;
                }
            }
        },
    ])
    .then(managerInput => {
        const { name, id, email, oNumber } = managerInput;
        const manager = new Manager (name, id, email, oNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

//Employee Prompts
const addEmployee = () => {
    console.log('Adding employees to the team');

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?",
            validate: nameInput => {
                valid = /^\w+([\.-]?\w+)+$/.test(nameInput)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter the employee's name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: idInput => {
                valid = /^[0-9]+$/.test(idInput)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter the employee's ID.")
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: emailInput => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter the employee's email address.")
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === 'Engineer',
            validate: nameInput => {
                valid = /^\w+([\.-]?\w+)+$/.test(nameInput)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter the Github username.")
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the employee's school name.",
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                valid = /^\w+([\.-]?\w+)+$/.test(nameInput)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter the employee's school name.")
                    return false;
                }
            },
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        },

    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if(role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
            
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

//function that generates the HTML page
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err  => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been created! Please checkout the index.html to see it.")
        }
    })
}
addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });