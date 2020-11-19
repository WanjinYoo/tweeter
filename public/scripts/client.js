// const timeCaclulator = (duration) => {

// };
$(() => {
  $(`#error-message`).hide();
  $("#tweet-text").focus(()=> {
    $(`#error-message`).hide();
  });
  $(`.new-tweet form`).submit((event)=> {
    event.preventDefault();
    $(`#error-message`).empty();
    const $data = $(`#tweet-text`);
    if (!$data.val().length || $data.val().length > 140) {
      $(`<i class="fas fa-exclamation-triangle"></i>`
      + `<p> Please make sure your input is not empty or does not exceed 140 letters</p>`).appendTo(`#error-message`);
      $(`#error-message`).slideDown();
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

const escape =  function(str) {
  let div = document.createElement('div');
  // eslint-disable-next-line no-undef
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function(tweet) {
  const $time_Diff = new Date() - tweet[`created_at`];
  const duration = moment.duration($time_Diff, 'milliseconds');
  let time = ``;
  console.log(duration.seconds());
  if (duration.seconds() > 86400) {
    time = `${duration.days()} day(s) ago`;
  } else if (duration.seconds() > 3600) {
    time = `${duration.hours()} hour(s) ago`;
  } else {
    time = `${duration.minutes()} minute(s) ago`;
  }
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
  + `<h6>${escape(tweet[`content`][`text`])}</h6>`
  + `</div>`
  + `<div class = "tweetCoordFooter">`
  + `<span>${time}</span>`
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
