const singinbtn = document.querySelector(".singinbtn")
const singupbtn = document.querySelector(".singupbtn")
const formbox = document.querySelector(".form-box")
const body = document.querySelector("body")
const singinh2 = document.querySelector(".singinh2")
const singuph2 = document.querySelector(".singuph2")

singinbtn.onclick=()=>{
    formbox.classList.remove('active')
    body.classList.remove('active')
    singinh2.classList.remove('active')
    singuph2.classList.remove('active')
    singinbtn.classList.remove('active')
    singupbtn.classList.remove('active')
}
singupbtn.onclick= ()=>{
    formbox.classList.add('active')
    body.classList.add('active')
    singinh2.classList.add('active')
    singuph2.classList.add('active')
    singinbtn.classList.add('active')
    singupbtn.classList.add('active')
}
