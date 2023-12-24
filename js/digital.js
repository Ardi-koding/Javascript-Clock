/* Digital Clock */
function time24() {
  let date = new Date();
  let tH = String(date.getHours()).padStart(2, "0")
  let tM = String(date.getMinutes()).padStart(2, "0")
  let tS = String(date.getSeconds()).padStart(2, "0")

  let waktu = tH + ":" + tM + ":" + tS;
  
  document.getElementById("time24").innerText = waktu;
}

function time12() {
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
  document.getElementById("time12").innerText = waktu;
}

window.setInterval(time24, 1000);
window.setInterval(time12, 1000);

function showOrHide() {
  let time24 = document.getElementById("time24");
  let display24 = window.getComputedStyle(time24).display;

  let time12 = document.getElementById("time12");
  let display12 = window.getComputedStyle(time12).display;

  if (display24 === "block" && display12 === "none") {
    time24.style.display = "none";
    time12.style.display = "block";
  } else {
    time24.style.display = "block"
    time12.style.display = "none"
  }

  // digital width
  let digitalContainer = document.querySelector(".digital");
  if (display24 === "block") {
    digitalContainer.style.width = "min(500px, 50.5vw)";
  }
  if (display12 === "block") {
    digitalContainer.style.width = "min(400px, 35vw)";
  }

  // button inner text
  let text = document.querySelector("button");
  if (display12 === "block") {
    text.innerText = "24 HOUR"
  } 
  if (display24 === "block") {
    text.innerText = "12 HOUR"
  }

}

