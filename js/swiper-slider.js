var swiper = new Swiper(".my_list", {
    effect: "coverflow",
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 0,
      // stretch: 0,
      depth: 120,
      modifier: 1,
      slideShadows: false,
    }
});