window.addEventListener('scroll', func());
function func(){document.body.style.cssText += `--scrollTop: ${this.scrollY}px`};

const sliderMain = new Swiper('.slider_main', {
    freeMode:true,
    centeredSlides:true,
    mousewheel:true,
    parallax:true,
    breakpoints:{
        0: {
            slidesPerView:3.5,
            spaceBetween:20
        },
        680:{
            slidesPerView:4.5,
            spaceBetween:60
        }
    }
});
const sliderBg = new Swiper('.slider_bg', {
    centeredSlides:true,
    parallax:true,
    freeMode:true,
    mousewheel:true,
    spaceBetween:60,
    slidesPerView:4.5,
});
sliderBg.controller.control = sliderMain;
document.querySelectorAll('.slider_item2').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('opened')
    })
})
let desc = document.querySelector('.description');
sliderBg.on('slideChange', e=>{
    sliderBg.activeIndex >0 ? desc.classList.add('hidden'):desc.classList.remove('hidden');
})