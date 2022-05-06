// 1.0

let bruxelles = new Date()
console.log(bruxelles)

let Anchorage = new Date().toLocaleString("en-US", { timeZone: "America/Anchorage" });
console.log(Anchorage)

let Reykjavik = new Date().toLocaleString("de-IC", { timeZone: "Atlantic/Reykjavik" });
console.log(Reykjavik)

let SaintPetersburg = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });
console.log(SaintPetersburg)


// 2.0

let birth = new Date("1998-09-27")

let now = new Date()

console.log((now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24) + ' days your alive')


let crash = new Date("2001-09-11")

console.log((now.getTime() - crash.getTime()) / (1000 * 60 * 60 * 24) + ' days that NY crash')


// 3.0
/*
let after = 1000 * 60 * 60 * 80000

let afterPastNow = new Date(
    now.getTime() + after
)
console.log(afterPastNow)


const numberInput = document.createElement("input")
numberInput.type = "number"

let p = document.createElement("p")


let main = document.querySelector("main")
main.appendChild(numberInput)
main.appendChild(p)

function dateInXHours(hours) {
    const inXHours = now + 60 * 60 * 1000
     const final  = new Date(inXHours)
     p.innerHTML = final
}

numberInput.addEventListener("keyup", e => {
    dateInXHours(e.target.value)
})

*/

// 4.0

main = document.querySelector("main")
const dateNow = document.getElementById("dateNow")
const hoursNow = document.getElementById("hoursNow")

const timeNow = document.createElement("div")
timeNow.id = "todayTime"

main.appendChild(hoursNow)
hoursNow.appendChild(timeNow)


// ********** TIME ********** //

function timeFun() {

let nowTime = new Date()
let h = nowTime.getHours();
let m = nowTime.getMinutes();
let s = nowTime.getSeconds();


timeZer = h + ':' + m + ':' + s

timeNow.innerHTML = timeZer

setTimeout(timeFun, 1000);
}
timeFun()



// ********** CALENDRIER *********** //

function calendrier() {

    let now = new Date();

    let dname = now.getDay();
    let dnum = now.getDate();
    let dmonth = now.getMonth();
    let dyear = now.getFullYear();

    let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let ids = ["dayname", "daynum", "monthe", "yeare"]
    let values = [week[dname], dnum, months[dmonth], dyear]

    for(let i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}
calendrier()








