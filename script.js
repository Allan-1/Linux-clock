const time = document.getElementById('time');
const dates = document.getElementById('date')


document.addEventListener('DOMContentLoaded', getTime)

function getTime(){
   let date = new Date 
   let hour = date.toLocaleString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'})
   let day = date.toLocaleString('en-US', {weekday: 'short', month: 'short', day: '2-digit'})

   time.innerText = hour
   dates.innerText = day

}

setInterval(getTime, 1000)
