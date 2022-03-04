// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const input = [];


// TODO: Create an array of questions for user input
inquirer.prompt([{ // name of project
            type: 'input',
            message: 'What is the name of your project?',
            name: 'projectName',
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
        { // contribution guidlines
            type: 'input',
            message: 'Does your app have contribution guidelines?',
            name: 'contribution',
        },
        { // test instructions
            type: 'input',
            message: 'Test Instructions?',
            name: 'testInstructions',
        },
    ])

    .then((response) => {

        const input = `# Title\n\n${response.projectName}
        ## Description\n\n${response.description}
        ## Table of Contents\n\n${response.toc}
        ## Installation\n\n${response.installation}
        ## App Usage\n\n${response.usage}
        ## Contrabution Guidlines\n\n${response.contribution}
        ## Test Instructions\n\n${response.testInstructions}`

        fs.writeFile("README.md", input, (err) => {
            err ? console.log(err) : console.log("file has been written")
        });
        
    })






// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();