import { printError, printResult } from './printResult.js'
import getDateDiff from './getDateDiff.js'

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