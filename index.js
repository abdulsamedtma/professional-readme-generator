// Import the required Node.js modules
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Function to validate the input here
function validateInput (value) {
    return value !== "" || "Please answer the question with your input to continue.";
}
// Array of questions for the user input
const questions = [
    // Question for the project  Title
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: validateInput,
    },
    // Question for the project Description
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project?.",
        validate: validateInput,
    },

    // Question for Installation
    {
        type: "input",
        name: "installation",
        message: "How do you install your application?.",
        validate: validateInput,
    },

    // Question On Application Usage
    {
        type: "input",
        name: "usage",
        message: "Please describe how we can use this application?.",
        validate: validateInput,
    },

    // Question for License 
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
        validate: validateInput,
    },

    // Question on how to  Contribute
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project?.",
        validate: validateInput,
    },

    // Question for Tests
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions you would like to provide for this project?.",
        validate: validateInput,
    },

    // QUESTIONS section -- github 
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
        validate: validateInput,
    },

    // QUESTIONS section -- email address
    {
        type: "input",
        name: "userEmail",
        message: "What is your email address that contributors may contact?",
        validate: function (value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true;
            } else {
                return "This is not a valid email address. Please enter a valid email address.";
            }
        },
    },
];


// // Function to write ReadMe content to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
    });
    console.log('Readme file generated successfully!');
}

// Function to initialize the application
function init() {
    inquirer.prompt(questions).then((data) => {
    const readMe = generateMarkdown(data);
    writeToFile(`${data.title}.md`, readMe);
    });
}

// Call the initialization function to start the application
init();
