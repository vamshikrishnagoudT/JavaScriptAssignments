let stopButton = document.getElementById("stopButton");
let readyButton = document.getElementById("readyButton");
let goButton = document.getElementById("goButton");
let Stoplight = document.getElementById("stopLight")
let ReadyLight = document.getElementById("readyLight");
let Golight = document.getElementById("goLight");

function stopButton1() {
    stopButton.style.backgroundColor = "#cf1124";
    Stoplight.style.backgroundColor = "#cf1124";
    readyButton.style.backgroundColor = "#4b5069";
    ReadyLight.style.backgroundColor = "#4b5069";
    goButton.style.backgroundColor = "#4b5069";
    Golight.style.backgroundColor = "#4b5069"
}

function readybutton1() {
    readyButton.style.backgroundColor = "#f7c948";
    ReadyLight.style.backgroundColor = "#f7c948";
    stopButton.style.backgroundColor = "#4b5069";
    Stoplight.style.backgroundColor = "#4b5069";
    goButton.style.backgroundColor = "#4b5069";
    Golight.style.backgroundColor = "#4b5069"
}

function gobutton1() {
    goButton.style.backgroundColor = "#199473";
    Golight.style.backgroundColor = "#199473"
    stopButton.style.backgroundColor = "#4b5069";
    Stoplight.style.backgroundColor = "#4b5069";
    readyButton.style.backgroundColor = "#4b5069";
    ReadyLight.style.backgroundColor = "#4b5069";
}