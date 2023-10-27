
window.setInterval(waktuSekarang, 1000);

function waktuSekarang() {
  let date = new Date();

  let timeHour = String(date.getHours()).padStart(2, "0")
  let timeMinutes = String(date.getMinutes()).padStart(2, "0")
  let timeSeconds = String(date.getSeconds()).padStart(2, "0")

  let waktu = timeHour + ":" + timeMinutes + ":" + timeSeconds;

  document.getElementById("waktuSekarang").innerText = waktu;
}



/*
* Functionality First, Style Later
A. Functionality 
    1. get time from local machine VVVVVVV
    2. display time in two digits format VVVV
      3. append ":" between hour, minute and seconds VVVV Bug, malahan jadi terus tersambung
    3. cara menampilkan di browser VVVV
    4. setInterval untuk update waktu

B. Style
    1. Honestly, still not have idea.
*/

