const clockBox = document.querySelector('#date')

function clock() {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    clockBox.innerText = `${hours + 'h'} ${minutes < 10 ? "0" + minutes : minutes + 'm'} ${seconds < 10 ? "0" + seconds :  seconds + 's'}`
}




function Today() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
console.log(dd)
    if(dd<10){
        dd = '0'+dd
    }
    if(mm<10){
        mm = '0'+mm
    }
//ymt = year month da
    const ymd = yyyy + ' . ' + mm + ' . ' + dd;
    document.getElementById("Today").innerText = ymd;
}

clock()
Today()
setInterval(clock, 1000)
setInterval(Today, 1000)