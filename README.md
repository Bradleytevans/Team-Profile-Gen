const generateMarkdown = data => {
return `# ${data.title}

![Badge for license](https://img.shields.io/badge/license-${data.license}-blue)

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is covered under the ${data.license} license.

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions 
If you have any questions, please reach out to me at the links below!

GitHub: [@${data.githubUSer}](https://github.com/${data.githubUSer})
  
Email: [Send me an email!](mailto:${data.email})
`;
}
module.exports = generateMarkdown;
