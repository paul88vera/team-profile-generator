const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const addEmployees = require("./src/template-page");

const manageData = [];

const employeeQuestions = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Employee: What is your role here?",
        choices: ["Manager", "Engineer", "Intern"],
        default: false,
      },
      {
        type: "input",
        name: "name",
        message: "Employee: What is your full name?",
        validate: (manName) => {
          if (manName) {
            return true;
          } else {
            console.log("Employee: Please enter YOUR FULL NAME");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Employee: What is your Employee ID?",
        validate: (manId) => {
          if (manId) {
            return true;
          } else {
            console.log("Employee: Please enter your EMPLOYEE ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Employee: What is your email address?",
        validate: (manEmail) => {
          if (manEmail) {
            return true;
          } else {
            console.log("Employee: Please enter your EMAIL ADDRESS");
            return false;
          }
        },
      },
    ])
    .then(function (answers) {
      if (answers.role === "Engineer") {
        addEngineer(answers);
      } else if (answers.role === "Intern") {
        addIntern(answers);
      } else {
        addManager(answers);
      }
    });
};

const addManager = (managerAnswers) => {
  inquirer
    .prompt([
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
        type: "confirm",
        name: "addMore",
        message: "Manager: Would you like to add an Engineer or Intern?",
      },
    ])
    .then(function (answers) {
      const newManager = new Manager(
        managerAnswers.name,
        managerAnswers.id,
        managerAnswers.email,
        answers.officeNumber
      );
      manageData.push(newManager);
      if (answers.addMore === true) {
        employeeQuestions();
      } else {
        console.log(manageData);
        writeToFile("dist/index.html", addEmployees(manageData));
      }
    });
};

const addEngineer = (engineerAnswers) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "Engineer: What is their GitHub username?",
      },
      {
        type: "confirm",
        name: "addMore",
        message: "Manager: Would you like to add an Engineer or Intern?",
      },
    ])
    .then(function (answers) {
      const newEngineer = new Engineer(
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        answers.github
      );
      manageData.push(newEngineer);
      if (answers.addMore === true) {
        employeeQuestions();
      } else {
        console.log(manageData);
        writeToFile("dist/index.html", addEmployees(manageData));
      }
    });
};

const addIntern = (internAnswers) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "Intern: What school do they attend?",
      },
      {
        type: "confirm",
        name: "addMore",
        message: "Manager: Would you like to add an Engineer or Intern?",
      },
    ])
    .then(function (answers) {
      const newIntern = new Intern(
        internAnswers.name,
        internAnswers.id,
        internAnswers.email,
        answers.school
      );
      manageData.push(newIntern);
      if (answers.addMore === true) {
        employeeQuestions();
      } else {
        console.log(manageData);
        writeToFile("dist/index.html", addEmployees(manageData));
      }
    });
};

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) throw err;
    console.log("File successfully saved!");
  });
}

employeeQuestions();
