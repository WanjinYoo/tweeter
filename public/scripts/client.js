/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const manipulateData = (data) => {
  $(()=> {
    const $tweetLists = $(`#tweetLists`);
    for (const key of Object.keys(data)) {
      $('<article>'
    + `<div id="tweets">`
    + `<div id = "tweetCoordheader">`
    + `<div id = "tweetCoordheader2">`
    + `<img src="${data[key][`user`][`avatars`]}"/>`
    + `<header>${data[key][`user`][`name`]}</header>`
    + `</div>`
    + `<h5>${data[key][`user`][`handle`]}</h5>`
    + `</div>`
    + `<div id = "tweetCoordContent">`
    + `<h6>${data[key][`content`][`text`]}</h6>`
    + `</div>`
    + `<div id = "tweetCoordFooter">`
    + `<span>${data[key][`created_at`]}</span>`
    + `<div id = "tweetCoordFooterIcons">`
    + `<i class="fas fa-heart"></i>`
    + `<i class="fas fa-retweet"></i>`
    + `<i class="fas fa-flag"></i>`
    + `</div>`
    + `</div>`
    + `</div>`
    + `</article>`
    + `</br>`
      ).appendTo($tweetLists);
    }
  });
};


const getJSON = () => {
  $.getJSON(`/tweets`)
    .done((data) => manipulateData(data))
    .fail(() => console(`Json file not available`));
};
getJSON();


