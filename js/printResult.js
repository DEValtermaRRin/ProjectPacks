const result = document.getElementById('dateCalc__result')
const timerOutput = document.getElementById('time')

export const printError = (err) => {
  result.innerText = err
}

export const printResult = ({ years, months, days }) => {
  result.innerText = `Год: ${years} - Месяц: ${months} - День: ${days} `
}

export const printTimeNull = (message) => {
  timerOutput.innerText = message;
}

export const printTimer = (time) => {
  timerOutput.innerText = time;
}