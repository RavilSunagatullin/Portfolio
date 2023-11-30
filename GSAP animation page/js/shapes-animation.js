const shapesSlides = (direction) => {
    let activeSlide = document.querySelector('.shapes__item--active');
    let nextSlide;
    direction == 'down' ? nextSlide = activeSlide.nextElementSibling : nextSlide = activeSlide.previousElementSibling;
  
    if (nextSlide) {
        shapesItem.forEach(el => { el.classList.remove('index'); });
  
      activeSlide.classList.add('index');
  
      const tl = gsap.timeline({
        defaults: { ease: easing },
        onComplete: function() {
          activeSlide.classList.remove('index');
        }
      });
  
      tl.from(nextSlide, 0.5, {
        xPercent: 100,
        delay: 0.3
      })
      .from(nextSlide.querySelector('.shapes__content'), 0.5, {
        xPercent: -100,
        delay: -0.5
      }, );
  
      activeSlide.classList.remove('shapes__item--active');
      nextSlide.classList.add('shapes__item--active');
    }
  };
 