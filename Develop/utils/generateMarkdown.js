

const generateMarkdown = (data) => {
  return `
  # ${data.project}
  ![license](https://img.shields.io/badge/license-${data.license}-green.svg)

  ## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Testing Requierments](#testing)
  5. [License](#license)

  ## Installation <a id="installation"></a>
  
  ${data.installation}

  ## Usage <a id="usage"></a>
  Here are some examples of how this app could be used 
    \n${data.usage}


  ## Contributing <a id="contributing"></a>

  Instruction: ${data.contributing}

    \nIf you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

    Fork the Project
    Create your Feature Branch (git checkout -b feature/AmazingFeature)
    Commit your Changes (git commit -m 'Add some AmazingFeature')
    Push to the Branch (git push origin feature/AmazingFeature)
    Open a Pull Request
  
  If you have any questions please contact ${data.yourName} at https://github.com/${data.github} or ${data.email}.
  Thank you!


  ## Testing Requirement's <a id="testing"></a>

  

  ## License <a id="license"></a>
  Distributed under the ${data.license} license. 
  `;
}


module.exports = { 
  generateMarkdown
}
