const buttonStart = document.getElementById("start");
const timerText = document.getElementById("timer");
let timerSeconds = 0, timerMinutes = 0;
let interval;

function startTimer() {
    buttonStart.disabled = true;
    interval = setInterval(incrementAndWrite, 1000);
}

function incrementAndWrite(){
    timerSeconds++;
    let timerSecText = timerSeconds;
    let timerMinText = timerMinutes;

    if (timerSeconds < 10) {
        timerSecText = "0" + timerSeconds.toString();
    } else if(timerSeconds == 60){
        timerSecText = "00";
        timerSeconds = 0;
        timerMinutes++;
        timerMinText = timerMinutes;
    }

    if(timerMinutes < 10){
        timerMinText = "0" + timerMinutes.toString();
    } else if(timerMinutes == 59 && timerSeconds == 59){
        resetTimer();
    }

    timerText.textContent = timerMinText + ":" + timerSecText;
}

function stopTimer() {
    buttonStart.disabled = false;
    clearInterval(interval);
}

function resetTimer() {
    timerText.textContent = "00:00";
    timerSeconds = 0;
    timerMinutes = 0;
}