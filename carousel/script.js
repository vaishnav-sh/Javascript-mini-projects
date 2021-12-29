const images = [
    {
        id: 0,
        src: './images/pic-1.jpeg'
    },
    {
        id: 1,
        src: './images/pic-2.jpeg',
    },
    {
        id: 3,
        src: './images/pic-4.jpeg'
    }
];

let currentItem = 0;

const img = document.getElementById('carousel-image')
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const dots = document.querySelectorAll('.dot');

window.addEventListener('DOMContentLoaded', showImage);
leftBtn.addEventListener('click', previousImage);
rightBtn.addEventListener('click', nextImage);

// show the image
function showImage() {
    img.src = images[currentItem]['src'];
}

//move to previous image
function previousImage() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = images.length - 1;
    }
    showImage();
    changeIndicator();

}

//moves to next image
function nextImage() {
    currentItem++;
    if(currentItem > images.length - 1) {
        currentItem = 0;
    }
    showImage();
    changeIndicator();
}

// configuring dots 
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentItem = index;
        showImage();
        changeIndicator();
    });
});

//to change the indicator style
function changeIndicator() {
    dots.forEach((dot, index) => {
        if(index !== currentItem) {
            dot.classList.remove('dot-active');
        } else {
            dot.classList.add('dot-active')
        }
    })
}