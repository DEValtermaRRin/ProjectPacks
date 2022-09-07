import {printTimer} from './printResult.js';

export function timer(userTime) {
  let time;
  const interval = setInterval(() => {
    const sec = userTime % 60;
    const min = userTime / 60 % 60;
    const hour = userTime / 60 / 60 % 60;
  
    if (userTime <= 0) {
      clearInterval(interval);
    } else {
      time = `${Math.trunc(hour)} ч : ${Math.trunc(min)} мин : ${sec} сек`
    }
    
    --userTime;
    printTimer(time)
  }, 1000)
} 