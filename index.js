//link to HTML generation
const generateHTML = require('./utils/generateHTML');

//team profiles
const manager = require('./list/manager');
const engineer = require('./list/engineer');
const intern = require('./list/intern');

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
