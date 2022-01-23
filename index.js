const inquirer = require("inquirer");
const generatePage = require("./src/template-page");
const { writeFile } = require("./utils/generate-site");
const manageData = [];

const promptTeam = () => {
  return inquirer
    .prompt([
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
        name: "manName",
        message: "Manager: What is your full name?",
        validate: (manName) => {
          if (manName) {
            return true;
          } else {
            console.log("Manager: Please enter YOUR FULL NAME");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "manId",
        message: "Manager: What is your Employee ID?",
        validate: (manId) => {
          if (manId) {
            return true;
          } else {
            console.log("Manager: Please enter your EMPLOYEE ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "manEmail",
        message: "Manager: What is your email address?",
        validate: (manEmail) => {
          if (manEmail) {
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
        choices: ["Engineer", "Intern", "None"],
        default: "Manager",
        validate: (role) => {
          if (role === "None") {
            role = "Manager";
          }
        },
      },
    ])
    .then((projectData) => {
      manageData.push(projectData);
      if (projectData.role === "Engineer") {
        return addEngineer(projectData);
      } else if (projectData.role === "Intern") {
        return addIntern(projectData);
      } else {
        console.log("HTML has been created!");
        return projectData;
      }
    });
};

const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engName",
        message: "Engineer: What is the full name?",
        validate: (engName) => {
          if (engName) {
            return true;
          } else {
            console.log("Engineer: Please enter the FULL NAME");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engId",
        message: "Engineer: What is the Employee ID?",
        validate: (engengEd) => {
          if (engengEd) {
            return true;
          } else {
            console.log("Engineer: Please enter the EMPLOYEE ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engEmail",
        message: "Engineer: What is the email address?",
        validate: (engEmail) => {
          if (engEmail) {
            return true;
          } else {
            console.log("Engineer: Please enter the EMAIL ADDRESS");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Engineer: What is the Engineer's github username?",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Engineer: Please enter a GITHUB USERNAME");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "addMore",
        message: "Manager: Would you like to add another Engineer or Intern?",
        default: false,
        choices: ["Engineer", "Intern", "None"],
      },
    ])
    .then((projectData) => {
      manageData.push(projectData);
      if (projectData.addMore === "Engineer") {
        return addEngineer(projectData);
      } else if (projectData.addMore === "Intern") {
        return addIntern(projectData);
      } else {
        console.log("HTML has been created!");
        return projectData;
      }
    });
};

const addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "inName",
        message: "Intern: What is the full name?",
        validate: (inName) => {
          if (inName) {
            return true;
          } else {
            console.log("Intern: Please enter the FULL NAME");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "inId",
        message: "Intern: What is the Employee ID?",
        validate: (inId) => {
          if (inId) {
            return true;
          } else {
            console.log("Intern: Please enter the EMPLOYEE ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "inEmail",
        message: "Intern: What is the email address?",
        validate: (inEmail) => {
          if (inEmail) {
            return true;
          } else {
            console.log("Intern: Please enter the EMAIL ADDRESS");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Intern: What school do they attend?",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Intern: Please enter a school");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "addMore",
        message: "Manager: Would you like to add another Engineer or Intern?",
        default: false,
        choices: ["Engineer", "Intern", "None"],
      },
    ])
    .then((projectData) => {
      manageData.push(projectData);
      if (projectData.addMore === "Engineer") {
        return addEngineer(projectData);
      } else if (projectData.addMore === "Intern") {
        return addIntern(projectData);
      } else {
        console.log("HTML has been created!");
        return projectData;
      }
    });
};

promptTeam()
  .then((manageData) => {
    console.log(manageData);
    return generatePage(manageData);
  })
  .then((projectData) => {
    return writeFile(projectData);
  });
