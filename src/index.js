'use strict';
const inquirer = require('inquirer');
const shuffleArray = require('./shuffle');
const teamData = require("./config/team.json");

const commonConfig = {
  type: 'checkbox',
  pageSize: 10,
}

inquirer
  .prompt([
    {
      ...commonConfig,
      message: 'Select developers',
      name: 'developers',
      choices: [
        new inquirer.Separator(' = Developers = '),
        ...teamData.developers
      ],
    },
    {
      ...commonConfig,
      message: 'Select others',
      name: 'others',
      choices: [
        new inquirer.Separator(' = Others = '),
        ...teamData.others
      ],
    },
  ])
  .then((answers) => {
    console.log(shuffleArray(answers.developers));
    console.log('+');
    console.log(shuffleArray(answers.others));
  });
