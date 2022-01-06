
const images = document.querySelectorAll('[data-src]');

function preloadImage(img) {    
    img.src = img.dataset.src;
}

const imagesOptions = {
    threshold: 0, 
    rootMargin: "0px 0px 500px 0px"
};

const imageObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            
        }
    });
}, imagesOptions)

images.forEach(img => {
    imageObserver.observe(img);
})