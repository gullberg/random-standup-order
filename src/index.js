'use strict';

const inquirer = require('inquirer');
const shuffleArray = require('./shuffle');
let teamData = require("./config/team.json");

const commonConfig = {
  type: 'checkbox',
  pageSize: 10,
}

let promptQuestions = [];

function promptSetup() {
  if(teamData.developers) {
    promptQuestions = [...promptQuestions,
      {
        ...commonConfig,
        message: 'Select developers',
        name: 'developers',
        choices: [
          new inquirer.Separator(' = Developers = '),
          ...teamData.developers
        ],
      }
    ];
  }
  if(teamData.others) {
    promptQuestions = [...promptQuestions,
      {
        ...commonConfig,
        message: 'Select others',
        name: 'others',
        choices: [
          new inquirer.Separator(' = Others = '),
          ...teamData.others
        ],
      }
    ];
  }

  return promptQuestions;
}

inquirer
  .prompt(promptSetup())
  .then((answers) => {
    for(const key in answers) {
      console.log(shuffleArray(answers[key]));
    }
  });
