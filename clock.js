const clockBox = document.querySelector('#date')
const date = new Date();

function clock() {
    const date = new Date()
    const hours = date.getHours()
    if (date.getHours() > 12) {
            `PM.${date.getHours() - 12 < 0
                ? String(date.getHours() - 12) 
                : date.getHours() - 12
            }`
        ;
    } else {
            `AM.${date.getHours() < 12
                ? String(date.getHours()) 
                : date.getHours()
            }`
        ;
    }
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    clockBox.innerText = `${hours + "h"} ${minutes < 10 ? "0" + minutes  + "m" : minutes + "m"} ${seconds < 10 ? "0" + seconds + 's':  seconds + 's'}`
}

function Today() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10){
        dd = '0'+dd
    }
    if(mm<10){
        mm = '0'+mm
    }
//ymt = year month day
    const ymd = yyyy + ' . ' + mm + ' . ' + dd;
    document.getElementById("Today").innerText = ymd;
}

clock()
Today()
setInterval(clock, 1000)
setInterval(Today, 1000)