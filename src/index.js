'use strict';

const inquirer = require('inquirer');
const shuffleArray = require('./shuffle');
const teamData = require("./config/team.json");

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
          ...teamData[key]
        ],
      }
    ];
  }

  return promptQuestions;
}

function printAnswers(answers) {
  let numberOfKeys = Object.keys(answers).length;
  for(const key in answers) {
    console.log(shuffleArray(answers[key]));
    --numberOfKeys && console.log("+");
  }
}

inquirer
  .prompt(promptSetup())
  .then(printAnswers);
