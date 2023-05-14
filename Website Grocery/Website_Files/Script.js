var swiper = new Swiper(".Product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay:7500,
        disableonInteraction:false,
    },
    centerslides: true,
     breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });


