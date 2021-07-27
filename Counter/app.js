let count = 0;

const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');

btns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if(e.target.classList.contains("decrease")) {
            count--;
        } else if(e.target.classList.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if(count > 0) {
            value.style.color = 'green';
        } else if(count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }

        value.textContent = count;
    });
})