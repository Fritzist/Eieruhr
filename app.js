let alarm = new Audio('Eieruhr_alarm.mp3')
let timeleft = 1000 * 60 * 5;
let interval;

function startTimer() {

    let startbtn = document.getElementById('startbtn')
    startbtn.innerText = "Stop";
    startbtn.classList.add("active");
    startbtn.setAttribute('onclick', "stopTimer()")

    interval = setInterval(function() {
        timeleft -= 1000;

        if (timeleft > 0) {
            let minutes =timeleft / (1000 * 60)
            minutes = Math.floor(minutes);
            let seconds = (timeleft / 1000) % 60;
            seconds = Math.round(seconds);
            seconds = ('0' + seconds).slice(-2);
            let text = '0' + minutes + ' : ' + seconds;
            timer.innerHTML = text;
        } else {
            timer.innerHTML = '00 : 00';
            alarm.play();

        }
    }, 1000);

}


function stopTimer() {

    let startbtn = document.getElementById('startbtn')
    startbtn.classList.remove('active');
    startbtn.innerText = 'Start';
    startbtn.setAttribute('onclick', 'startTimer()')
    clearInterval(interval)
}
