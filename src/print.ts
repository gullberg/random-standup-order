import { shuffleArray } from './shuffle';
import { Answers } from 'inquirer';

export function printAnswers(answers: Answers) {
  let numberOfKeys = Object.keys(answers).length;
  for(const key in answers) {
    console.log(shuffleArray(answers[key]));
    --numberOfKeys && console.log('+');
  }
}
