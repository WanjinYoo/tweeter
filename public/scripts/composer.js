$(() => {
  $(`#scroll-button`).hide();
  $(window).scroll(function() {
    
    if ($(window).scrollTop() > 120) {
      $(`#scroll-button`).slideDown();
      $(`nav`).hide();
    }
    else {
      $(`nav`).show();
      $(`#scroll-button`).hide();
    }
  });
  $(`#scroll-button`).hover(() => {
    $(`#scroll-button`).css('cursor', 'pointer');
  });
  $(`#scroll-button`).click(()=> {
    const scroll = (0);
    $('html, body').animate({scrollTop:(scroll)}, '2000');
  });




});