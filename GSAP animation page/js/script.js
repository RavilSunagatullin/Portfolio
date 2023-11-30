const init = () => {

    window.onload = function () {
        const preloader = document.querySelector('.preloader')
        preloader.classList.add('preloader-animation')

        setTimeout(() =>{
            preloader.classList.remove('preloader-animation')
            preloader.classList.add('preloader-hidden')
        }, 3000)

        setTimeout(() =>{
            startAnimation()
            preloader.classList.add('preloader-none')
        }, 3200)
    }

    const showNextSlide = () => {
        
        bgSlides('down')
        imagesSlides('down')
        shapesSlides('down')
        textSlides('down')
    }
    const showPrevSlide = () => {
        
        bgSlides('up') 
        imagesSlides('up')   
        shapesSlides('up')
        textSlides('up')
    }
    if(window.innerWidth >= 768){
        window.addEventListener('wheel',(event) => {
            let delta = -event.deltaY
            if(delta > 0 ){
                if(helperInput.value == 1){
                    helperInput.value = 0
                    showPrevSlide()
                    setTimeout(()=>{
                        helperInput.value = 1
                    }, 1500)
                }
            }
            if(delta < 0){
                if(helperInput.value == 1){
                    helperInput.value = 0
                    showNextSlide()
                    setTimeout(()=>{
                        helperInput.value = 1
                    }, 1500)
                }
            }

        })

    }
    if(window.innerWidth < 768){
        document.addEventListener("swiped-left", () => {
            showNextSlide()
        })
        document.addEventListener("swiped-right", () => {
            showPrevSlide()
        })
        
    }
}
init()