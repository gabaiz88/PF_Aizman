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
