const colors = ['red', 'blue', 'salmon', 'lightblue', 'rgb(163, 99, 14)', '#56dfa6'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');



btn.addEventListener('click', function() {
    document.body.style.backgroundColor = colors[getRandomNumber()];
    color.textContent = colors[getRandomNumber()]
});



function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}