$(function() {
  $.get('https://www.reddit.com/r/Astronomy/.json').done(function(json) {
    console.log(json);
    for (var i = 1; i < 11; i++) {

      $("body").append("<p>" + json.data.children[i].data.author + "</p>");
      $("body").append("<p>" + json.data.children[i].data.title + "</p>");
      $("body").append("<p>" + json.data.children[i].data.selftext + "</p>");
      if ($(json.data.children[i].data).prop("preview") != undefined) {
        $("body").append("<img src = \"" + json.data.children[i].data.preview.images[0].source.url +
        "\" class = \"redditImage\" />");
      }
      $("body").append("<hr>");

    }


  });
});
