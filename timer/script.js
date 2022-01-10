const min = document.getElementById('min');
const sec = document.getElementById('sec');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');

const startSound = new Audio("./start.wav");
const endSound = new Audio("./break-end.wav");

startBtn.addEventListener('click', () => {   
    startSound.play();
    let totalTime = +min.innerText * 60;

    function updateTime() {
        if(totalTime > 0) {
            totalTime--;

            const minutes = Math.floor(totalTime / 60);
            let seconds = totalTime % 60; 

            min.innerText = (minutes < 10) ? '0' + minutes : minutes;
            sec.innerText = (seconds < 10) ? '0' + seconds : seconds;
        } else {
            endSound.play();
            return;
        }
    }

    if(+min.innerText > 0) {
        setInterval(updateTime, 1000);
    }
});

resetBtn.addEventListener('click', () => {
    location.reload();
})