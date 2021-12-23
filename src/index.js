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
  for(const key in teamData) {
    promptQuestions = [...promptQuestions,
      {
        ...commonConfig,
        message: `Select ${key}`,
        name: key,
        choices: [
          new inquirer.Separator(` = ${key} = `),
          ...teamData[key]
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
