//link to HTML generation
const generateHTML = require('./utils/generateHTML');

//team profiles
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

//node.js modules
const fs = require('fs');
const inquirer = require('inquire');

const teamArray = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the name of the team manager.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's id.", 
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email address.",
        },      {
            type: 'input',
            name: 'oNumber',
            message: "Please enter the manager's office phone number.",
        },
    ])
    .then(managerInput => {
        const { name, id, email, oNumber } = managerInput;
        const manager = new manager (name, id, email, oNumber);
        teamArray.push(manager);
        console.log(manager);
    })
};
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
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === 'Engineer',
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === 'Intern',
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
        },

    ])
}