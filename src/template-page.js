const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'index.js'), 'utf-8', (err, data) => {
  if(err) throw err;

  console.log(data, 'from template-page');
})




function addCards(manageData) {
  let cards = [];
  for (let i = 0; i < manageData.length; i++) {
    const employeeArray = manageData[i];
    switch (employeeArray.getRole()) {
      case "Manager":
        const manager = new Manager(
          employeeArray.id,
          employeeArray.name,
          employeeArray.email,
          employeeArray.officeNumber
        );
        cards.push(generateManager(manager));
        break;
      case "Engineer":
        const engineer = new Engineer(
          employeeArray.id,
          employeeArray.name,
          employeeArray.email,
          employeeArray.github
        );
        cards.push(generateEngineer(engineer));
        break;
      case "Intern":
        const intern = new Intern(
          employeeArray.id,
          employeeArray.name,
          employeeArray.email,
          employeeArray.school
        );
        cards.push(generateIntern(intern));
        break;
    }
  }
  return cards.join(``);
}

let generateManager = (Manager) => {
  if (!Manager) {
    return "";
  }

  return `
 <div class="card bg-dark shadow rounded" style="width:18rem;">
            <div class="card-body text-white">
              <div class="card-title bg-primary" style="height:50px; margin:auto; padding:10px;"><i class="fas fa-mug-hot"></i> MANAGER</div>
              <ul class="list-group text-align-left">
                <li class="list-group-item">
                  Name: ${Manager.getName()}
                </li>
                <li class="list-group-item">
                  ID: ${Manager.getId()}
                </li>
                <li class="list-group-item">
                  Email: ${Manager.getEmail()}
                </li>
                <li class="list-group-item">
                  Office #: ${Manager.getOfficeNumber()}
                </li>
              </ul>
            </div>
          </div>
 `;
};

let generateEngineer = (Engineer) => {
  if (!Engineer) {
    return "";
  }

  return `
 <div class="card bg-dark shadow rounded" style="width:18rem;">
           <div class="card-body text-white">
             <div class="card-title bg-primary" style="height:50px; margin:auto; padding:10px;"><i class="fas fa-glasses"></i> ENGINEER</div>
             <ul class="list-group">
               <li class="list-group-item">
                Name: ${Engineer.getName()}
               </li>
               <li class="list-group-item">
                ID: ${Engineer.getId()}
               </li>
               <li class="list-group-item">
                Email: ${Engineer.getEmail()}
               </li>
               <li class="list-group-item">
                GitHub Username: ${Engineer.github()}
               </li>
             </ul>
           </div>
         </div>
 `;
};

let generateIntern = (Intern) => {
  if (!Intern) {
    return "";
  }

  return `
 <div class="card bg-dark shadow rounded" style="width:18rem;">
 <div class="card-body text-white">
   <div class="card-title bg-primary" style="height:50px; margin:auto; padding:10px;">
     <i class="fas fa-graduation-cap"></i> INTERN</div>
   <ul class="list-group">
     <li class="list-group-item">
      Name: ${Intern.getName()}
     </li>
     <li class="list-group-item">
      ID: ${Intern.getId()}
     </li>
     <li class="list-group-item">
      Email: ${Intern.getEmail()}
     </li>
     <li class="list-group-item">
      School: ${Intern.getSchool()}
     </li>
   </ul>
 </div>
</div>
 `;
};

let addEmployees = (manageData) => {
  // const generateMarkdown = (manageData) => {
  //  console.log(manageData);
  return `
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Recursive:wght@300&display=swap" rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <!-- Font Awesome Icons -->
    <script src="https://kit.fontawesome.com/84543325b5.js" crossorigin="anonymous"></script>
    <h1 style="margin: auto; width: 50%; padding-top: 10px; font-size: 2em">My Team</h1>
  </head>
  <body style="font-family: 'Dongle', sans-serif; font-size:1.5em;">
    <header align="center" class="bg-dark text-white" style="height:80px;">
      My Team
    </header>
    <section align="center" style="height:auto;">
      <div class="container" style="height:auto; margin-top:50px;">
        <div class="row d-inline-flex gap-4 justify-content-center">
          ${addCards(manageData)}
        </div>
      </div>
    </section>
  </body>
</html>
 `;
};

module.exports = addEmployees;
