// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");




// TODO: Create an array of questions for user input
// EXPRESSION FUNCTION

const init = () => {
    return inquirer.prompt([{ // name of project
            type: 'input',
            message: 'What is the name of your project?',
            name: 'project',
        
        },
        { // your name
            type: 'input',
            message: 'What is your name?',
            name: 'yourName',
        },
        { // description
            type: 'input',
            message: 'Please add a description of your project?',
            name: 'description',
        },
        { // installation
            type: 'input',
            message: 'Installation instructions',
            name: 'installation',
        },
        { // usage information
            type: 'input',
            message: 'What is this application used for?',
            name: 'usage',
        },
        { // github
            type: 'input',
            message: 'What is your github name?',
            name: 'github',
        },
        { // email
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        { //license information
            type: 'list',
            message: 'what type of license would you like?',
            choices: ['MIT', 'mozilla Public 2.0', 'GNU GPLv3', 'Rust', 'OpenBSD'],
            default: ['MIT'],
            name: 'license',
        },
        { // contribution guidlines
            type: 'input',
            message: 'Does your app have contribution guidelines?',
            name: 'contributing',

        },
        { // test instructions
            type: 'input',
            message: 'Test Instructions?',
            name: 'testInstructions',
        }

    ])

}
const writeReadme = data => {
    
    const title = data.project
    fs.writeFile("README.md", data, (err) => {
        err ? console.log(err) : console.log("file has been written")
    })
    console.log(data)
    return (data);
    
}


init()
    .then(data => {
        return generateMarkdown.generateMarkdown(data);
    })
    .then(input => {
        return writeReadme(input);
    })
    .catch(err => {
        console.log(err)
    })