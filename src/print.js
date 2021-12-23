'use strict';

const shuffleArray = require('./shuffle');

module.exports = function printAnswers(answers) {
  let numberOfKeys = Object.keys(answers).length;
  for(const key in answers) {
    console.log(shuffleArray(answers[key]));
    --numberOfKeys && console.log('+');
  }
}
