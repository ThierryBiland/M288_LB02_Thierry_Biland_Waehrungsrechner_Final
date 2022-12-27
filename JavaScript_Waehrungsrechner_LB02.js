const währung = document.querySelectorAll(".währung")
const zahlenbox = document.getElementById("zahlenbox")
const ergebnisbox = document.getElementById("ergebnisbox")
const button = document.getElementById("button")

fetch("https://api.frankfurter.app/currencies")
    .then((data) => data.json())
    .then((data) => {
        (data);
});

function display(data) {
    const entries = Object.entries(data);
    for (var i = 0; i < entries.lenght; i++) {
        währung[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        währung[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
}

button.addEventListener("click"  , () => {
    let currency1 = währung[0].value;
    let currency2 = währung[1].value;
    let value = zahlenbox.value;

    if (currency1 <= currency2)
}