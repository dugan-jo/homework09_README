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
            name: 'contribution',

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
    fs.writeFile("README.md", JSON.stringify(data), (err) => {
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
//



// // TODO: Create a function to initialize app
// // function init() {}

// // Function call to initialize app
// // init();

//     // .then((input) => {

//     //     // const userInput = `# ${input.projectName}
//     //     // \n## Description\n\n${input.description}
//     //     // \n## Table of Contents\n\n${input.toc}
//     //     // \n## Installation\n\n${input.installation}
//     //     // \n## App Usage\n\n${input.usage}
//     //     // \n## App license\n\n${input.license}
//     //     // \n## Contrabution Guidlines\n\n${input.contribution}
//     //     // \n## Test Instructions\n\n${input.testInstructions}`

//     //     fs.writeFile("README.md", input, (err) => {
//     //         err ? console.log(err) : console.log("file has been written")
//     //     });

//     // })






// // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// // function init() {}

// // Function call to initialize app
// // init();