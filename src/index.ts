import inquirer from "inquirer";
import { printAnswers } from './print';
import { promptSetup } from './setup';
import teamData from './config/team.json';

inquirer
  .prompt(promptSetup(teamData))
  .then(printAnswers);
