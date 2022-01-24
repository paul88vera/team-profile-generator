const generateTeamName = (team) => {
  // const {teamName} = team;
  if (!team) {
    return `
    <h1 style="margin: auto; width: 50%; padding-top: 10px; font-size: 2em">My Team</h1>
    `;
  }

  return `
 <h1 style="margin: auto; width: 50%; padding-top: 10px; font-size: 2em">${teamName}</h1>
 `;
};

const generateManager = (Manager) => {
  const { name, id, email, ...officeNumber } = Manager;
  if (!manager) {
    return "";
  }

  return `
 <div class="card bg-dark shadow rounded" style="width:18rem;">
            <div class="card-body text-white">
              <div class="card-title bg-primary" style="height:50px; margin:auto; padding:10px;"><i class="fas fa-mug-hot"></i> MANAGER</div>
              <ul class="list-group text-align-left">
                <li class="list-group-item">
                  Name: ${name}
                </li>
                <li class="list-group-item">
                  ID: ${id}
                </li>
                <li class="list-group-item">
                  Email: ${email}
                </li>
                <li class="list-group-item">
                  Office #: ${officeNumber}
                </li>
              </ul>
            </div>
          </div>
 `;
};

const generateEngineer = (Engineer) => {
  const { name, id, email, ...github } = Engineer;
  if (!Engineer) {
    return "";
  }

  return `
 <div class="card bg-dark shadow rounded" style="width:18rem;">
           <div class="card-body text-white">
             <div class="card-title bg-primary" style="height:50px; margin:auto; padding:10px;"><i class="fas fa-glasses"></i> ENGINEER</div>
             <ul class="list-group">
               <li class="list-group-item">
                Name: ${name}
               </li>
               <li class="list-group-item">
                ID: ${id}
               </li>
               <li class="list-group-item">
                Email: ${email}
               </li>
               <li class="list-group-item">
                GitHub Username: ${github}
               </li>
             </ul>
           </div>
         </div>
 `;
};

const generateIntern = (Intern) => {
  const { name, id, email, ...school } = Intern;
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
      Name: ${name}
     </li>
     <li class="list-group-item">
      ID: ${id}
     </li>
     <li class="list-group-item">
      Email: ${email}
     </li>
     <li class="list-group-item">
      School: ${school}
     </li>
   </ul>
 </div>
</div>
 `;
};

const generateMarkdown = (templateData) => {
  const { teamName, Manager, Engineer, ...Intern } = templateData;

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
    <title>My Team</title>
  </head>
  <body style="font-family: 'Dongle', sans-serif; font-size:1.5em;">
    <header align="center" class="bg-dark text-white" style="height:80px;">
      ${generateTeamName(teamName)}
    </header>
    <section align="center" style="height:auto;">
      <div class="container" style="height:auto; margin-top:50px;">
        <div class="row d-inline-flex gap-4 justify-content-center">
          ${generateManager(Manager)}
          ${generateEngineer(Engineer)}
          ${generateIntern(Intern)}
        </div>
      </div>
    </section>
  </body>
</html>
 `;
}
module.exports = generateMarkdown;