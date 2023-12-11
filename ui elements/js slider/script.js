const slides = document.querySelectorAll(".slide").forEach((slide) => {
  slide.onclick = () => {
    document.querySelectorAll(".slide").forEach((slide)=>{
        slide.classList.remove("active");
    })
    slide.classList.add("active");
  };
});
