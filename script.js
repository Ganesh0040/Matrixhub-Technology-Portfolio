// JavaScript
const imageContainers = document.querySelectorAll('.img-container');
const dots = document.querySelectorAll('.carousel-dots .dot');

let currentIndex = 0;

function showImage(index) {
  imageContainers.forEach((container, i) => {
    container.classList.toggle('active', i === index);
    container.querySelector('.text-overlay').classList.toggle('animate', i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function slideImages() {
  currentIndex = (currentIndex + 1) % imageContainers.length;
  showImage(currentIndex);
}

// Show the first image immediately on page load
showImage(currentIndex);

// Start the automatic sliding after a 5-second delay
setTimeout(function() {
  setInterval(slideImages, 4000);
}, 4000);

// Add click event listeners to the carousel dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
  });
});
