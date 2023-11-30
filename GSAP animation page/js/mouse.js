function moveMouse(event){
    if(event.clientX < 5 || event.clientY < 5 || event.clientY > (window.innerHeight - 5) || event.clientX > (window.innerWidth - 5)){
        mouse.style.opacity = 0 
    }else{
        mouse.style.opacity = 1
        mouse.style.transform  = `translate(${event.clientX-15}px,${event.clientY-15}px)`
    }
}
if(window.innerWidth >= 768){
    document.addEventListener("mousemove", moveMouse)
    slideBg.addEventListener("mouseover", ()=>{mouse.classList.add("view-visible")})
    slideBg.addEventListener("mouseleave", ()=>{mouse.classList.remove("view-visible")})

    links.forEach(link => link.addEventListener("mouseover", ()=>{mouse.classList.add("links-visible")}))
    links.forEach(link => link.addEventListener("mouseleave", ()=>{mouse.classList.remove("links-visible")}))
    buttons.forEach(link => link.addEventListener("mouseover", ()=>{mouse.classList.add("links-visible")}))
    buttons.forEach(link => link.addEventListener("mouseleave", ()=>{mouse.classList.remove("links-visible")}))

}