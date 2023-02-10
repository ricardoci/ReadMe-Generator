// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return ` "https://opensource.org/licenses/MIT"`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function getLicenseSection(data) {
  // The startsWith() method is used to determine if the string starts with the specified string, in this case, "## license"
  const licenseIndex = data.findIndex(function(line) {
    return line.toLowerCase().startsWith("## license");
  });

  if (licenseIndex === -1) {
    return "";
  }

  const licenseSection = data.slice(licenseIndex + 1);
  const endIndex = licenseSection.findIndex(function(line) {
    return line.startsWith("#");
  });

  if (endIndex === -1) {
    return licenseSection.join("\n");
  } else {
    return licenseSection.slice(0, endIndex).join("\n");
  }
}

      
  




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  
  ## Description
${data.description}
## Deployed Application URL
${data.link}
## Screenshot
![alt-text](${data.screenshot})
## Table of Contents
* [Features](#features)
* [Languages & Dependencies](#languagesanddependencies)
* [How to Use This Application](#HowtoUseThisApplication)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
## Features
${data.features}
## Languages & Dependencies
${data.require}
## How to Use This Application:
${data.usage}
## Contributors
${data.contributors}
## license
${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  
## Testing
${data.test}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).


`;
}

module.exports = generateMarkdown;