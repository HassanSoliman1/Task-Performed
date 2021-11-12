
const carouselImages = document.querySelector('.slider-imgs');
const images = document.querySelectorAll('.slider-imgs img');
const carouselButtons = document.querySelectorAll('.btn');
const numberOfImages = document.querySelectorAll('.slider-imgs img').length;
let imageIndex = 1;
let translateX = 0;
let index = 0;

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 600;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 600;
      }
    }
    
    carouselImages.style.transform = `translateX(${translateX}px)`;
    images.forEach((image, index) => {
      if (index === imageIndex - 1) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  });
});

// =============================================================================

