let convertBtnE1 = document.getElementById("convertBtn");
let hoursInputE1 = document.getElementById("hoursInput");
let minutesInputE1 = document.getElementById("minutesInput");
let timeInSecondsE1 = document.getElementById("timeInSeconds");
let errorMsgE1 = document.getElementById("errorMsg");

function convertFun() {
    if (hoursInputE1.value === "") {
        errorMsgE1.textContent = "please enter a valid number of hours.";
        errorMsgE1.classList.add("error-msg", "font-family");
    } else if (minutesInputE1.value === "") {
        errorMsgE1.textContent = "please enter a valid number of minutes.";
        errorMsgE1.classList.add("error-msg", "font-family");

    } else {
        let hoursInputValue = parseInt(hoursInputE1.value);
        let minutesInputValue = parseInt(minutesInputE1.value);
        let result = hoursInputValue * 3600 + minutesInputValue * 60;
        timeInSecondsE1.textContent = result + "s";
        timeInSecondsE1.classList.add("timeIn-Seconds", "font-family");

    }
}
convertBtnE1.addEventListener("click", convertFun);