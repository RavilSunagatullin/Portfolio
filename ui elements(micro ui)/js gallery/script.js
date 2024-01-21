function slidesPlugin(num = 1) {
  const slides = document.querySelectorAll(".slide");
  slides[num - 1].classList.add('active');
  slides.forEach((slide) => {
    slide.onclick = () => {
      clearActive();
      slide.classList.add("active");
    };
  });

  function clearActive() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}
slidesPlugin(5)