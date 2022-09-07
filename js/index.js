import { printError, printResult, printTimeNull } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import { timer } from './timer.js';

const form = document.getElementById('datecalc');

form.onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target)

  const firstInput = formData.get('firstDate')
  const secondInput = formData.get('secondDate')

  const dateDiff = getDateDiff(firstInput, secondInput)

  if (!firstInput || !secondInput) {
    // result.innerText = 'Please, enter the data!'
    printError('Please, enter the data!')
  } else {
    printResult(dateDiff)
  }
}

const formTimer = document.getElementById('timer');

formTimer.onsubmit = (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)
  const timerInput = formData.get('inputTime');
  const timeMinute = parseInt(timerInput) * 60


  if (timeMinute <= 0 || !timeMinute) {
    printTimeNull('Time is over')
  } else {
    timer(timeMinute)
  }
} 