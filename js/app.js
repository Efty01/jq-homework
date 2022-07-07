$(function(){
  // scroll fixed

  $(window).scroll(function(){
    let scrTop = $(window).scrollTop();
    console.log(scrTop); 
    if (scrTop >= 130) {
      $('nav').addClass('menuFixed');
    }
    else {
      $('nav').removeClass('menuFixed');
    }
  });

  // slider
  $('.slider').slick({
  dots: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '.leftArrow',
  nextArrow: '.rightArrow',
  });
  
  // popup
  new VenoBox({
    selector: ".popupLink"
});
});

// preloader 
window.addEventListener('load', function(){
  document.querySelector('.preloader').style.display = 'none';
});