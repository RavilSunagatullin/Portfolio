'use strict'

const tabItem = document.querySelectorAll('.tabs__buttons-item')
const tabContent = document.querySelectorAll('.tabs__content-item')

tabItem.forEach(function(element){
    element.addEventListener('click', open)
})

function open(event){
    const tabTarget = event.currentTarget
    const button = tabTarget.dataset.button

    tabItem.forEach(function(item){
        item.classList.remove('tabs__buttons-item--active')
    })

    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active')
    })
    tabTarget.classList.add('tabs__buttons-item--active')
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active')
}

const menuButton =document.querySelector('.menu-button')
const menu = document.querySelector('.menu')

menuButton.addEventListener('click', () =>{
    menu.classList.toggle('menu--active')
})