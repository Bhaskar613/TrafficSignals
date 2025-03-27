let stopButtonEl = document.getElementById("stopButton");
let readyButtonEl = document.getElementById("readyButton");
let goButtonEl = document.getElementById("goButton");
let stopLightEl = document.getElementById("stopLight");
let readyLightEl = document.getElementById("readyLight");
let goLightEl = document.getElementById("goLight");

function turnOnRed() {
    stopButtonEl.style.backgroundColor = "#cf1124";
    stopLightEl.style.backgroundColor = "#cf1124";
    readyLightEl.style.backgroundColor = "#4b5069";
    goLightEl.style.backgroundColor = "#4b5069";
    readyButtonEl.style.backgroundColor = "#1f1d41";
    goButtonEl.style.backgroundColor = "#1f1d41";
}

function turnOnYellow() {
    readyLightEl.style.backgroundColor = "#f7c948";
    readyButtonEl.style.backgroundColor = "#f7c948";
    stopButtonEl.style.backgroundColor = "#1f1d41";
    goButtonEl.style.backgroundColor = "#1f1d41";
    goLightEl.style.backgroundColor = "#4b5069";
    stopLightEl.style.backgroundColor = "#4b5069";
}

function turnOnGreen() {
    goButtonEl.style.backgroundColor = "#199473";
    goLightEl.style.backgroundColor = "#199473";
    readyButtonEl.style.backgroundColor = "#1f1d41";
    stopButtonEl.style.backgroundColor = "#1f1d41";
    stopLightEl.style.backgroundColor = "#4b5069";
    readyLightEl.style.backgroundColor = "#4b5069";
}