$(document).ready(function(){
  /* Настройки скрипта */
  /* Высота прокрутки после которой показывается стрелка наверх */
  var height_to_show_scrollup = 200;
  /* Установим стили для кнопки */
  var styles = {
    "position": "fixed",
    /* Положение стрелки */
    /* "left": "50px", */
    /* "top": "50px", */
    "right": "50px",
    "bottom": "50px",
    /* Ширина и высота стрелки */
    "width": "50px",
    "height": "50px",
    /* Установим картинку стрелки наверх */
    "background": "url('/images/scroll_to_up.png')",
    "background-repeat": "no-repeat",
    "background-size": "cover",
    
    "opacity": "0",
    "cursor": "pointer",
    "z-index": "1000",
    
  };

  /* Добавим элемент кнопки наверх */
  $('body').append('<div class="scrollup"></div>');

  /* Применим стили к кнопке */
  $('.scrollup').css( styles );  
  
  /* Поставим на кнопку "наверх" действие  */
  $('.scrollup').click( function(){
    $("html, body").animate({ scrollTop: 0 }, 500); 
    return false;
  });

  /* Если у нас страница уже немного прокруена вниз показать кнопку "наверх" */
  if ( $(document).scrollTop() > height_to_show_scrollup ) {
    $('.scrollup').animate({'opacity': 0.7}, 300);;
  };

  /* При прокрутке кнопка наверх либо появляется либо изчезает */
  $(window).scroll(function(){
    $('.scrollup').stop();
    if ( $(document).scrollTop() > height_to_show_scrollup ) {
      $('.scrollup').animate({'opacity': 0.7}, 300);;
    } else {
      $('.scrollup').animate({'opacity': 0}, 300);;
    }
  });
  $('.scrollup').hover(function(){
    if ( $(document).scrollTop() > height_to_show_scrollup ) { 
      $('.scrollup').stop();
      $('.scrollup').animate({'opacity': 1}, 100);;
    }; 
  }, function(){
    $('.scrollup').stop();
    if ( $(document).scrollTop() > height_to_show_scrollup ) {
      $('.scrollup').animate({'opacity': 0.7}, 100);;
    } else {
      $('.scrollup').animate({'opacity': 0}, 300);;
    }
  });


});


