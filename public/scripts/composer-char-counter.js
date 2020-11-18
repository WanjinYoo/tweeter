$(() => {
  $("#tweet-text").keyup(function() {
    const $charLength = $(this).val().length;
    const $lettersLeft = 140 - $charLength;
    const $counter = $(this).closest("form").find(".counter");
    $counter.text($lettersLeft);
    if ($lettersLeft < 0) {
      $counter.css({"color": "red"});
    } else {
      $counter.css({"color": "black"});
    }
  });
});