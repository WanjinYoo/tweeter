$(() => {
  $(`.container .new-tweet`).hide();
  //if the invisible button on the top right is clicked, users can create new tweets
  $(`#nav-button`).click(() => {
    $(`.container .new-tweet`).slideDown();
    $(`#nav-button`).hide();
    $(`#tweetLists`).css(`margin-top`,`0rem`);
    $(`#tweet-text`).focus();
  });
  //animation effects on the invisible nav button
  $(`#nav-button`).hover(() => {
    $(`#nav-button`).css('cursor', 'pointer');
    $(`#newtweet i`).addClass(`move-up-and-down`);
  },() => $(`#newtweet i`).removeClass(`move-up-and-down`));
});
