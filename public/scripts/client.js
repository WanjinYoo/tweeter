// const timeCaclulator = (duration) => {

// };
$(() => {
  $(`.new-tweet form`).submit((event)=> {
    event.preventDefault();
    const $data = $(`#tweet-text`);
    if (!$data.val().length || $data.val().length > 140) {
      alert(`invalid input`);
    } else {
      $data.serialize();
      $.ajax({
        type: `POST`,
        url: `/tweets/`,
        data: $data
      })
        .then(() => {
          loadTweets();
        });
    }
  });
});

const loadTweets = () => {
  $.ajax({
    type: `GET`,
    url: `/tweets`
  })
    .then((res) => {
      renderTweets(res);
    });
};
const createTweetElement = function(tweet) {
  const duration = moment.duration(tweet[`created_at`], 'milliseconds');
  const days = duration.days();
  let $tweet = '<article>'
  + `<div class="tweets">`
  + `<div class = "tweetCoordheader">`
  + `<div class = "tweetCoordheader2">`
  + `<img src="${tweet[`user`][`avatars`]}"/>`
  + `<header>${tweet[`user`][`name`]}</header>`
  + `</div>`
  + `<h5>${tweet[`user`][`handle`]}</h5>`
  + `</div>`
  + `<div class = "tweetCoordContent">`
  + `<h6>${tweet[`content`][`text`]}</h6>`
  + `</div>`
  + `<div class = "tweetCoordFooter">`
  + `<span>${days}day(s) ago</span>`
  + `<div class = "tweetCoordFooterIcons">`
  + `<i class="fas fa-heart"></i>`
  + `<i class="fas fa-retweet"></i>`
  + `<i class="fas fa-flag"></i>`
  + `</div>`
  + `</div>`
  + `</div>`
  + `</article>`
  + `</br>`;
  return $tweet;
};
const renderTweets = function(tweets) {
  const $tweetLists = $(`#tweetLists`).empty();
  for (let key of Object.keys(tweets)) {
    $(createTweetElement(tweets[key])).prependTo($tweetLists);
  }
  hovereffect();
};
const hovereffect = () => {
  const $tweets = $(`#tweetLists`).find(`.tweets`);
  $tweets.hover(
    function() {
      $(this).addClass(`shadow-effect`);
      $(this)
        .find("h5")
        .css({"visibility": "visible"});
      $(this)
        .find(`.tweetCoordFooterIcons`)
        .css({"visibility": "visible"});
    },
    function() {
      $tweets.removeClass(`shadow-effect`);
      $(this)
        .find("h5")
        .css({"visibility": "hidden"});
      $(this)
        .find(`.tweetCoordFooterIcons`)
        .css({"visibility": "hidden"});
    });
};
const getJSON = () => {
  $.getJSON(`/tweets`)
    .done((data) => renderTweets(data))
    .fail(() => console(`Json file not available`));
};
getJSON();
