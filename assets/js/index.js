const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const path = require('path')
const fs = require('fs');


const teamMembers = []
const idArray = []

function askUser() {
  function createManager() {
    console.log("Please add your team")
    inquirer.prompt([
      {
        type: 'input',
        message: 'Manager name:',
        name: 'managerName',
      },
      {
        type: 'input',
        message: 'Office number:',
        name: 'officeNumber',
      },
      {
        type: 'input',
        message: 'Employee ID Number:',
        name: 'managerId',
      },
      {
        type: 'input',
        message: 'Email:',
        name: 'managerEmail',
      }
    ]).then(answers => {
      const manager =
        ` <!DOCTYPE html>
     <html lang="en">
     
     <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
         integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
       <link rel="stylesheet" href="./assets/css/style.css">
     
       <title>test cards</title>
     </head>
     
     <body>
       <div class="jumbotron jumbotron-fluid justify-content-center topRow">
         <div class="container">
           <h1 class="display-4 mainHeader">My Team</h1>
         </div>
       </div>
     
       <div class="container-fluid">
         <div class="row justify-content-center">
           <div class="col-3 justify-content-center">
     <div class="card managerCard" style="width: 18rem;">
          <div class="card-header">
            <h2 class="memberName">${answers.managerName}</h2>
            <h3 class="memberRole">Manager</h3>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers.managerId}</li>
            <li class="list-group-item">Email: <br> ${answers.managerEmail}</li>
            <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
          </ul>
        </div>
        </div>`;
      fs.appendFileSync('../dist/team.html', manager)
      createTeam();
    })
  }

  function createTeam() {
    inquirer.prompt([
      {
        type: 'list',
        message: 'Add Employees:',
        name: 'employeeType',
        choices: [
          'Engineer',
          'Intern',
          'Finish',
        ]

      }
    ]).then(userChoice => {
      console.log(userChoice.employeeType)
      if (userChoice.employeeType === 'Intern') {
        addIntern();
      }

      if (userChoice.employeeType === 'Engineer') {
        addEngineer();
      }

      if (userChoice.employeeType === 'Finish') {
        finishTeam();
      }
    })
  }


  function addIntern() {
    inquirer.prompt([
      {
        type: 'input',
        message: 'Intern name:',
        name: 'internName',
      },
      {
        type: 'input',
        message: 'Employee ID Number:',
        name: 'internId',
      },
      {
        type: 'input',
        message: 'Email:',
        name: 'internEmail',
      },
      {
        type: 'input',
        message: 'School:',
        name: 'internSchool',
      }
    ]).then(internData => {

      const newIntern = `<div class="col-3 justify-content-center">
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        <h2 class="memberName">${internData.internName}</h2>
        <h3 class="memberRole">Intern</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${internData.internId}</li>
        <li class="list-group-item">Email: <br> ${internData.internEmail}</li>
        <li class="list-group-item">School: ${internData.internSchool}</li>
      </ul>
    </div>
  </div>`;

      fs.appendFileSync('../dist/team.html', newIntern)
      createTeam();
    })
  }




  function addEngineer() {

    console.log("Please add your team")
    inquirer.prompt([
      {
        type: 'input',
        message: 'Engineer name:',
        name: 'engineerName',
      },
      {
        type: 'input',
        message: 'Employee ID Number:',
        name: 'engineerId',
      },
      {
        type: 'input',
        message: 'Email:',
        name: 'engineerEmail',
      },
      {
        type: 'input',
        message: 'Github:',
        name: 'engineerGithub',
      }
    ]).then(engineerData => {

      const newEngineer = `<div class="col-3 justify-content-center">
      <div class="card" style="width: 18rem;">
        <div class="card-header">
          <h2 class="memberName">${engineerData.engineerName}</h2>
          <h3 class="memberRole">Engineer</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineerData.engineerId}</li>
          <li class="list-group-item">Email: <br> ${engineerData.engineerEmail}</li>
          <li class="list-group-item">GitHub: ${engineerData.engineerGithub}</li>
        </ul>
      </div>

    </div>`;

      fs.appendFileSync('../dist/team.html', newEngineer)
      createTeam();
    })
  }

  function finishTeam() {

    const endHTML = `</div>

    </body>
    
    </html>`;

    fs.appendFileSync('../dist/team.html', endHTML)
    console.log("Team Created!")
  }
  createManager();
}

askUser();