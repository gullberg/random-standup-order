'use strict';

const inquirer = require('inquirer');
const promptSetup = require('./setup');
const shuffleArray = require('./shuffle');

function printAnswers(answers) {
  let numberOfKeys = Object.keys(answers).length;
  for(const key in answers) {
    console.log(shuffleArray(answers[key]));
    --numberOfKeys && console.log('+');
  }
}

inquirer
  .prompt(promptSetup())
  .then(printAnswers);
