const währung = document.querySelectorAll(".währung")
const zahlenbox = document.getElementById("zahlenbox")
const ergebnisbox = document.getElementById("ergebnisbox")
const button = document.getElementById("button")

fetch("https://api.frankfurter.app/currencies")
    .then((data) => data.json())
    .then((data) => {
        (data);
});