'use strict';

const teamData = require("./config/team.json");

module.exports = function promptSetup() {
  const commonConfig = {
    type: 'checkbox',
    pageSize: 10,
  };

  let promptQuestions = [];

  for(const key in teamData) {
    promptQuestions = [...promptQuestions,
      {
        ...commonConfig,
        message: `Select ${key}`,
        name: key,
        choices: teamData[key]
      }
    ];
  }

  return promptQuestions;
}
