const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const h = document.querySelector('.h')
const m = document.querySelector('.m')
const s = document.querySelector('.s')

function obnavit() {
    let clocks = new Date()
    let hourss = clocks.getHours()
    let minutess = clocks.getMinutes()

    if (hourss < 10) {
        hourss = "0" + hourss
    }

    if (minutess < 10) {
        minutess = "0" + minutess
    }

    hours.innerHTML = hourss
    minutes.innerHTML = minutess

    s.style.transform = `rotate(${clocks.getSeconds() * 6}deg)`
    m.style.transform = `rotate(${clocks.getMinutes() * 6}deg)`
    h.style.transform = `rotate(${clocks.getHours() * 30}deg)`
    
}

setInterval(obnavit, 1000)
obnavit()



let tabsItem = [...document.querySelectorAll(".tabsItem")]
let tabsContentItem = [...document.querySelectorAll(".tabsContentItem")]

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener("click", function () {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove("active")
            tabsContentItem[j].classList.remove("active")
        }
        tabsItem[i].classList.add("active")
        tabsContentItem[i].classList.add("active")
    })
}

let stopwatch__hours = document.querySelector(".stopwatch__hours")
let stopwatch__minutes = document.querySelector(".stopwatch__minutes")
let stopwatch__seconds = document.querySelector(".stopwatch__seconds")
let stopwatch__btn = document.querySelector(".stopwatch__btn")

let hoursss = 0
let minutesss = 0
let sekondsss = 0
let interval

function updatestopwatch() {
    stopwatch__hours.innerHTML = String(hoursss).padStart(2, "0")
    stopwatch__minutes.innerHTML = String(minutesss).padStart(2, "0")
    stopwatch__seconds.innerHTML = String(sekondsss).padStart(2, "0")
}
// updatestopwatch()

function stopwatch() {
    interval = setInterval(() => {
        sekondsss++
        if (sekondsss == 60) {
            minutesss++
            sekondsss = 0
            if (minutesss == 60) {
                hoursss++
                minutesss = 0
            }
        }
        updatestopwatch()
    }, 1000)
}

let tabsLink__span = document.querySelector(".tabsLink__span")
let stopwatch__btnp = document.querySelector(".stopwatch__btnp")
stopwatch__btn.addEventListener("click", function () {
    if (stopwatch__btn.innerHTML == "Start") {
        tabsLink__span.classList.add("active")
        stopwatch__btn.innerHTML = "Stop"
        stopwatch() 
    }else if (stopwatch__btn.innerHTML == "Stop") {
        tabsLink__span.classList.remove("active")
        tabsLink__span.classList.add("active_clear")
        stopwatch__btn.innerHTML = "Restat"
        stopwatch__btnp.style.backgroundColor = "white"
        clearInterval(interval)
    }else if (stopwatch__btn.innerHTML == "Restat") {
        stopwatch__btn.innerHTML = "Start"
        tabsLink__span.classList.remove("active_clear")
        stopwatch__btnp.style.backgroundColor = "#22272d"
        hoursss = 0
        minutesss = 0
        sekondsss = 0
        updatestopwatch()
    }
})

stopwatch__btnp.addEventListener("click", function () {
    stopwatch__btn.innerHTML = "Stop"
    if (stopwatch__btnp.innerHTML == "Play") {
    stopwatch__btnp.style.backgroundColor = "#22272d"
    stopwatch() 
    }
})