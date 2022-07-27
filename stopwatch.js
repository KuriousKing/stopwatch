let timer = document.getElementById("screen");
var hr = 0;
var min = 0;
var sec = 0;
var pause = true;

function start() {
    if (pause == true) {
        pause = false;
        cycle();
    }
}

function wait() {
    if (pause == false) {
        pause = true;
    }
}

function cycle() {

    if (pause == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec = sec + 1;
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }

        if (min < 10) {
            min = '0' + min;
        }

        if (hr < 10) {
            hr = '0' + hr;
        }
        timer.innerHTML = hr + ':' + min + ':' + sec;
        setTimeout(cycle, 1000);
    }
}

function reset() {
    timer.innerHTML = '00:00:00';
    pause = true;
    hr = 0;
    min = 0;
    sec = 0;
}