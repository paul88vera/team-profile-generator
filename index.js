const { data } = require("browserslist");
const fs = require("fs");
// const generateMarkdown = require('./src/template-markdown');
const inquirer = require("inquirer");
manageData = [];


const promptTeam = projectData => {
  return inquirer.prompt([
   {
    type: "input",
    name: "teamName",
    message: "Manager: What is your team name?",
    validate: (teamName) => {
      if (teamName) {
        return true;
      } else {
        console.log("Manager: Please enter the TEAM NAME");
        return false;
      }
    },
  },
    {
      type: "input",
      name: "name",
      message: "Manager: What is your full name?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          console.log("Manager: Please enter YOUR FULL NAME");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Manager: What is your Employee ID?",
      validate: (id) => {
        if (id) {
          return true;
        } else {
          console.log("Manager: Please enter your EMPLOYEE ID");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Manager: What is your email address?",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Employee: Please enter your EMAIL ADDRESS");
          return false;
        }
      },
    },
    {
     type: "input",
     name: "officeNumber",
     message: "Manager: What is your office number?",
     validate: (officeNumber) => {
       if (officeNumber) {
         return true;
       } else {
         console.log("Employee: Please enter your OFFICE NUMBER");
         return false;
       }
     },
   },
    {
      type: "list",
      name: "role",
      message: "Manager: Would you like to add another team member?",
      choices: ["Engineer", "Intern", 'None'],
      default: false,
      validate: (role) => {
       if (role === 'Engineer'){
        addEngineer();
       }
       else if (role === 'Intern') {
        addIntern();
       } else {
        return false;
       }
      }
     },
    ])
    .then(projectData => {
     manageData.push(projectData);
     if (projectData.role === 'Engineer'){
      return addEngineer(projectData);
     }
     else {
      return projectData;
     }
    });
};

const addEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is the Manager's github username?",
      validate: (github) => {
        if (github) {
          return true;
        } else {
          console.log("Please enter a GITHUB USERNAME");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "addMore",
      message: "Would you like to add another Engineer or Intern?",
      default: false,
      choices: ['Engineer', 'Intern', 'None'],
      validate: (addMore) => {
       if ('Engineer'){
        addEngineer();
       }
       else if ('Intern') {
        addIntern();
       } else {
        return false;
       }
      }
    },
  ]);
};

promptTeam();
