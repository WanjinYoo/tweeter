$(() => {
  $(`#scroll-button`).hide();
  // if user scroll down the page, they can be directed to the top of the page with the scroll button
  $(window).scroll(function() {
    if ($(window).scrollTop() > 120) {
      $(`#scroll-button`).slideDown();
    }
    else {
      $(`#scroll-button`).hide();
    }
  });
  // cursor effect on a scroll button
  $(`#scroll-button`).hover(() => {
    $(`#scroll-button`).css('cursor', 'pointer');
  });
  $(`#scroll-button`).click(()=> {
    const scroll = (0);
    $('html, body').animate({scrollTop:(scroll)}, '2000');
  });
});