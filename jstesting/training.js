const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const nextBtn = document.getElementById('nextButton');
const prevBtn = document.getElementById('prevButton');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', ()=> {
  if (counter >= carouselImages.length - 1) {return};
  counter++;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=> {
  if (counter <= 0) {return};
  counter--;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', ()=> {
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

    // Play / Pause function
    var playing = false;
    var pauseButton = document.getElementById('pause');
    var slideInterval = 0;
    
    function pauseSlideshow(){
      pauseButton.innerHTML = 'Play';
      playing = false;
      clearInterval(slideInterval);
    }
    
    function playSlideshow(){
      pauseButton.innerHTML = 'Pause';
      playing = true;
      slideInterval = setInterval('nextBtn.click()', 2000);
      // if click play,  every 2 seconds click next 

    }
    
    pauseButton.onclick = function(){
      if (playing) {
        pauseSlideshow();
      }
      else {
        playSlideshow();
      }
    };

