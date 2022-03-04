

const generateMarkdown = (data) => {
  return `
  # ${data.project}
  ![license](https://img.shields.io/badge/license-${data.license}-green.svg)

  ## Description
  ${data.project}

  ## Table of Context
  *Installation(#installation)

  ## Installation
  
  ${data.installation}

  ## Usage
  Here are some examples of how this app could be used
  ${data.usage}


  ## Contributing
    \nIf you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

    Fork the Project
    Create your Feature Branch (git checkout -b feature/AmazingFeature)
    Commit your Changes (git commit -m 'Add some AmazingFeature')
    Push to the Branch (git push origin feature/AmazingFeature)
    Open a Pull Request


  ## Testing Requierments 

  ## License
  Dsitributed uder the ${data.license} license. 
  `;
}


module.exports = { 
  generateMarkdown
}
