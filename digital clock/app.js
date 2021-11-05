const hours = document.querySelector('.hour');
const minutes = document.querySelector('.min');
const seconds = document.querySelector('.sec');
const toggleBtn = document.querySelector('.toggle');
updateTime();

function updateTime() {
    const timeNow = new Date();

    if(timeNow.getHours() < 10) {
        hours.textContent = '0' + timeNow.getHours().toString();
    } else {
        hours.textContent = timeNow.getHours();
    }

    if(timeNow.getMinutes() < 10) {
        minutes.textContent = '0' + timeNow.getMinutes().toString();       
    } else {
        minutes.textContent = timeNow.getMinutes();
    }

    if(timeNow.getSeconds() < 10) {
        seconds.innerText = '0' + timeNow.getSeconds().toString();
    } else {
        seconds.textContent = timeNow.getSeconds();
    }
}

setInterval(updateTime, 1000);

// Toggle dark mode
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('toggle-active');
    document.body.classList.toggle('dark-mode');
});