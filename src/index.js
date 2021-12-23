'use strict';

const inquirer = require('inquirer');
const printAnswers = require('./print');
const promptSetup = require('./setup');
const teamData = require("./config/team.json");

inquirer
  .prompt(promptSetup(teamData))
  .then(printAnswers);
