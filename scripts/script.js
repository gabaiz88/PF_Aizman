window.onscroll = function() {
  growShrinkLogo()
};

function growShrinkLogo() {
  var Logo = document.getElementById("Logo");
  var navbar_prueba = document.getElementById("nav_bar_links");
  if ((document.body.scrollTop > 5 || document.documentElement.scrollTop > 5 && window.innerWidth < 768)){
    Logo.style.width = '200px';
  } else if(window.innerWidth < 768){
    Logo.style.width = '320px';
  } 
  else if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5 && window.innerWidth >= 768) {
    Logo.style.width = '200px';
    if (window.innerWidth >= 992){
        navbar_prueba.style.padding = "0px 0px 100px 0px";
    }
  } else {
    Logo.style.width = '453px';
    navbar_prueba.style.padding = "0px 0px 0px 0px";
  }
}

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0: {
      slidesPerView:1, 
    },
    520: {
      slidesPerView:2, 
    },
    950: {
      slidesPerView:3, 
    },
  },
});
