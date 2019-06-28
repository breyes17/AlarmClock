let time = document.getElementById('time');
let aInput = document.getElementById('alarmInput');
let btnAlarm = document.getElementById('submit');


function showTime(){
    let today = new Date(),
    h = today.getHours(),
    m = today.getMinutes(),
    s = today.getSeconds(),
    amPM = h >= 12 ? 'PM' : 'AM';

    h = h % 12 || 1;
    time.innerHTML = `${h}<span>:</span>${pad(m)}<span>:</span>${pad(s)} ${amPM}`;
    // setTimeout(showTime,1000);
}

setInterval(showTime,1000);

function pad(n){
    return (parseInt(n,10) < 10 ? '0':'')+n
}

// showTime();

let alarmTime = 0;
let setAlarm = function() {
    let timeVal = aInput.value;
    // console.log(timeVal);

    if(timeVal > 60 || timeVal === ''){
         alert('Valid range should be 1-60.'); 
         return;
    }

    let d = new Date();
    let curHour = d.getHours() * 60 * 60;
    let curMin = d.getMinutes() * 60;
    let curSec = d.getSeconds();
    let curTime = curHour + curMin + curSec;
    console.log(curTime);

    // set alarm time
    let setMin = timeVal * 60;
    console.log(`alarm time ${curTime + setMin}`)
    alarmTime = curTime + setMin;

    setInterval(() => {
        if(curTime >= alarmTime){
            // alert('time is up'); 
            console.log('time is up');
            clearInterval(setAlarm);
        } else {
            curTime++;
            console.log(curTime);
        }
    },1000)
}
