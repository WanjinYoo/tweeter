$(() => {
  $(`.container .new-tweet`).hide();
  $(`#nav-button`).click(() => {
    $(`.container .new-tweet`).slideDown();
  });
  $(`#nav-button`).hover(() => {
    $(`#nav-button`).css('cursor', 'pointer');
  });
});