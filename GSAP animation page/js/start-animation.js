const startAnimation = () => {
    const activeSlide = document.querySelector('.slide-bg__inner--active')
    const activeShape = document.querySelector('.shapes__item--active')
    const activeSlideContainer = document.querySelector('.slides-container--active')

    
    startingTL.to('.header', 0.5, {
        opacity: 1,
        y: 0, 
        delay: 0.5 
    })
    .to('.main-section__explore',  0.5,  {
        opacity: 1,
        y: 0, 
    }, '-=0.5')
    .to(document.querySelector('.slides-container__title'),  0.6,  {
        opacity: 1,
        y: 0, 
    }, '-=0.1')
    .to(document.querySelector('.designers-info'),  0.6,  {
        opacity: 1,
        y: 0, 
    }, '-=0.4')
    .from(activeSlide,  0.4,  {
        xPercent: 100
    }, '-=0.4')
    .from(activeSlide.querySelector('.slide-bg__link'),  0.4,  {
        xPercent: -100
    }, '-=0.4')
    .from(activeShape,  0.6,  {
        xPercent: 100
    }, '-=0.2')
    .from(activeShape.querySelector('.shapes__content'),  0.6,  {
        xPercent: -100,
        delay:-0.6 
    }, '-=0.2')
    .to(shapesItem, 0.1, {
        opacity: 1,
    })
}
