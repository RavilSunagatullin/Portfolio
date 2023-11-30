const textSlides = (direction) => {
    let activeSlide = document.querySelector('.slides-container--active')
    let nextSlide;
    direction == 'down' ? nextSlide = activeSlide.nextElementSibling : nextSlide = activeSlide.previousElementSibling
  
    if (nextSlide && !nextSlide.classList.contains('.main-setion__explore')) {
        const tl = gsap.timeline({defaults: { ease: easing }})
    
        tl.to(activeSlide.querySelector('.slides-container__title'),0.5,{
            opacity:0,
            y:100
        })
        .to(activeSlide.querySelector('.designers-info'),0.5,{
            opacity:0,
            y:100
        }, '-=0.5')
        .to(nextSlide.querySelector('.slides-container__title'),0.5,{
            opacity:1,
            y:0
        }, '-=0.1')
        .to(nextSlide.querySelector('.designers-info'),0.5,{
            opacity:1,
            y:0
        }, '-=0.1')
        activeSlide.classList.remove('slides-container--active')
        nextSlide.classList.add('slides-container--active')
    }
  };
 