$(() => {

  $(`#scroll-button`).hide();
  $(window).scroll(function() {
    if ($(window).scrollTop() === 0) {
      $(`nav`).show();
      $(`#scroll-button`).hide();
    }
    else {
      $(`#scroll-button`).slideDown();
      $(`nav`).hide();
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