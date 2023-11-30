const bgItem = document.querySelectorAll('.slide-bg__link')
const imageSlide = document.querySelectorAll('.slide-bg__inner')
const slideBg = document.querySelector('.slide-bg')
const shapes = document.querySelectorAll('.shapes__content')
const shapesItem = document.querySelectorAll('.shapes__item')
const helperInput =document.querySelector("#helper-input")
const mainSection = document.querySelector('.main-section')

const mouse = document.querySelector('.mouse')
const mouseView = document.querySelector(".mouse__view")
const links = document.querySelectorAll('a')
const buttons = document.querySelectorAll('button')

const slidesCount = 5
let slideCounter = 1

const easing = BezierEasing(0.770, 0.125, 0.265, 1.040)

const startComplete = () => {
    imageSlide.forEach(el => {
        el.style.opacity = 1
    })
    shapes.forEach(el => {
        el.style.opacity = 1
    })
}

const startingTL = gsap.timeline({
    defaults:{
        ease: easing
    },
    onComplete: startComplete
})