let date = new Date();
console.log(date);

const clock = document.getElementById("clockDisplay");
const semiColon = ":";

let timeHour = String(date.getHours()).padStart(2, "0")
let timeMinutes = String(date.getMinutes()).padStart(2, "0")
let timeSeconds = String(date.getSeconds()).padStart(2, "0")


clock.append(timeHour, semiColon, timeMinutes, semiColon, timeSeconds)

function update() {
}

// window.setInterval(update, 1000);

/*
* Functionality First, Style Later
A. Functionality 
    1. get time from local machine VVVVVVV
    2. display time in two digits format VVVV
      3. append ":" between hour, minute and seconds VVVV Bug, malahan jadi terus tersambung
    3. cara menampilkan, i dont know
    4. function update?

B. Style
    1. Honestly, still not have idea.
*/

