$(() => {
  $(`.container .new-tweet`).hide();
  $(`#nav-button`).click(() => {
    $(`.container .new-tweet`).slideDown();
    $(`#nav-button`).hide();
    $(`#tweetLists`).css(`margin-top`,`0rem`);
  });
  $(`#nav-button`).hover(() => {
    $(`#nav-button`).css('cursor', 'pointer');
    $(`#newtweet i`).addClass(`move-up-and-down`);
  },() => $(`#newtweet i`).removeClass(`move-up-and-down`));
});
