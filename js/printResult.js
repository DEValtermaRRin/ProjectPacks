const result = document.getElementById('dateCalc__result')

export const printError = (err) => {
  result.innerText = err
}

export const printResult = ({years, months, days}) => {
  result.innerText = `Год: ${years} - Месяц: ${months} - День: ${days} `
}