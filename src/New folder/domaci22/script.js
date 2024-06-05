const images = document.querySelectorAll('#slider img');
const dots = document.querySelectorAll('#indicator .dot');
const caption = document.querySelectorAll('#opisi #caption');

let index = 0;

function showImage(index) {
    images.forEach(image => image.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    caption.forEach(caption => caption.classList.remove('active'));
    images[index].classList.add('active');
    dots[index].classList.add('active');
    caption[index].classList.add('active')
    caption.textContent = images[index].getAttribute('alt');
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage(index);
}

showImage(0);
setInterval(nextImage, 3000);