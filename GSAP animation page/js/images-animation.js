const imagesSlides = (direction) => {
    let activeSlide = document.querySelector('.slide-bg__inner--active');
    let nextSlide;
    direction == 'down' ? nextSlide = activeSlide.nextElementSibling : nextSlide = activeSlide.previousElementSibling;
  
    if (nextSlide) {
      imageSlide.forEach(el => { el.classList.remove('index'); });
  
      activeSlide.classList.add('index');
  
      const tl = gsap.timeline({
        defaults: { ease: easing },
        onComplete: function() {
          activeSlide.classList.remove('index');
        }
      });
  
      tl.from(nextSlide, 0.5, {
        xPercent: 100
      })
      .from(nextSlide.querySelector('.slide-bg__link'), 0.5, {
        xPercent: -100,
        delay: -0.5
      });
  
      activeSlide.classList.remove('slide-bg__inner--active');
      nextSlide.classList.add('slide-bg__inner--active');
    }
  };
 