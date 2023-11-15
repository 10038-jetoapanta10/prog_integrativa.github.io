const images = document.querySelectorAll('section img');
const gallery = document.querySelector('section');
const imageContainer = document.querySelector('.image-container');
const previousButton = document.querySelector('.button-previous');
const nextButton = document.querySelector('.button-next');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentImageIndex = 0;

function showImage(imageIndex) {
  for (let i = 0; i < images.length; i++) {
    if (i !== imageIndex) {
      images[i].style.display = 'none';
    }
  }

  images[imageIndex].style.display = 'block';
  currentImageIndex = imageIndex;
}

function previousImage() {
  const nextImageIndex = (currentImageIndex - 1) % images.length;
  showImage(nextImageIndex);
}

function nextImage() {
  const nextImageIndex = (currentImageIndex + 1) % images.length;
  showImage(nextImageIndex);
}