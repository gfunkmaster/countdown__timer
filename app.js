
const timerDayEl = document.querySelector('.timer__day');
const timerHourEl = document.querySelector('.timer__hour');
const timerMinEl = document.querySelector('.timer__min');
const timerSecEl = document.querySelector('.timer__sec');


//create a function between start and end 
const getTimeDiffrence = (start, end) => {

    let milliseconds = Math.floor(end - start);
    let seconds = Math.floor(milliseconds/1000);
    let minuts = Math.floor(seconds/60);
    let hours = Math.floor(minuts/60)
    let days = Math.floor(hours/24)

    hours = hours - (days * 24)
    minuts = minuts - (days * 24 * 60) - (hours * 60)
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minuts * 60)
    //return `${days}  ${hours} ${minuts} ${seconds}`

    return {
        days,
        hours,
        minuts,
        seconds
    }
    
}

 



let timer = setInterval(() => {
    const startDate = new Date()
    const endDate = new Date('May 2, 2021 08:00:00')

    let timeDiffrenceObj = getTimeDiffrence(startDate, endDate)
   // console.log(timeDiffrenceObj);
   timerDayEl.textContent = timeDiffrenceObj.days
   timerHourEl.textContent = timeDiffrenceObj.hours
   timerMinEl.textContent = timeDiffrenceObj.minuts
   timerSecEl.textContent = timeDiffrenceObj.seconds
}, 1000)