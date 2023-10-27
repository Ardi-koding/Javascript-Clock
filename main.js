

function waktuSekarang24() {
  let date = new Date();

  let tH = String(date.getHours()).padStart(2, "0")
  let tM = String(date.getMinutes()).padStart(2, "0")
  let tS = String(date.getSeconds()).padStart(2, "0")

  let waktu = tH + ":" + tM + ":" + tS;
  
  document.getElementById("waktuSekarang24").innerText = waktu;
}

function waktuSekarang12() {
  let date = new Date();
  let tH = date.getHours();
  let tM = date.getMinutes();
  let tS = date.getSeconds();
  let bagiWaktu = " AM";

  bagiWaktu = (tH > 12) ? bagiWaktu = " PM" : bagiWaktu
  tH = (tH > 12) ? tH -= 12 : tH;
  if (tH == 12) {tH = 0};

  tH = String(tH).padStart(2, "0");
  tM = String(tM).padStart(2, "0");
  tS = String(tS).padStart(2, "0");

  let waktu = tH + ":" + tM + ":" + tS + bagiWaktu;
  document.getElementById("waktuSekarang12").innerText = waktu;
}

window.setInterval(waktuSekarang24, waktuSekarang12, 1000);
window.setInterval(waktuSekarang12, waktuSekarang12, 1000);

/*
* Functionality First, Style Later
A. Functionality 
    1. get time from local machine VVVVVVV
    2. display time in two digits format VVVV
      3. append ":" between hour, minute and seconds VVVV Bug, malahan jadi terus tersambung
    3. cara menampilkan di browser VVVV
    4. setInterval untuk update waktu VVVV
    5. Buat untuk Tipe Jam 12 VVVV
    6. Brute Force LOL \(^o^)/ VVVV

B. Style
    1. Honestly, still not have idea.
*/

