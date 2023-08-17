// License function and  if/else section here 
function getLicense(value) {
  if (value === "GNU AGPLv3") {
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (value === "GNU GPLv3") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "GNU LGPLv3") {
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (value === "Apache 2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (value === "Boost Software 1.0") {
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (value === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //const {title, description, table of content, installation, license, contributing, Test, Questions }= data  
  const licenseLink = getLicense(data.license)
  return `# ${data.title}
  ${licenseLink}
  ## Description
  ${data.description}
    ## Table of Contents
  * [Installation](#Installation) 
  * [Usage](#Usage) 
  * [License](#License) 
  * [Contributing](#Contributing)  
  * [Tests](#Tests) 
  * [Questions](#Contact-Information) 
  
  ## Installation <a name="installation"></a>
  ${data.installation} 
  ## Usage <a name="usage"></a>
  ${data.usage} 
  ## License  <a name="license"></a>
  ${data.license}
  ## Contributing <a name="contributing"></a>
  ${data.contributing}
  ## Tests <a name="tests"></a>
  ${data.tests}
  ## Questions , Contact-Information <a name="contact-information"></a>
  For questions or concerns, please contact [${data.userName}](https://github.com/${data.userName}) or reach out via email at ${data.userEmail}.
  
  ---
                                                  This README was generated with ❤️ by README Generator. ✨  Every day is a learning day!  ✨

`;
}

module.exports = generateMarkdown;


