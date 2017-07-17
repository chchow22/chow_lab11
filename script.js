$(function() {
  $.get('https://www.reddit.com/r/Astronomy/.json').done(function(json) {
    console.log(json);
    for (var i = 1; i < 11; i++) {
      $("body").append("<div class = \"postDiv\">");
      $("body div:last-child").append("<p class = \"username\"> Username: " + json.data.children[i].data.author + "</p>");
      $("body div:last-child").append("<p class = \"title\">" + json.data.children[i].data.title + "</p>");
      $("body div:last-child").append("<p>" + json.data.children[i].data.selftext + "</p>");
      if ($(json.data.children[i].data).prop("preview") != undefined) {
        $("body div:last-child").append("<img src = \"" + json.data.children[i].data.preview.images[0].source.url +
        "\" class = \"redditImage\" />");
      }
      $("body div:last-child").append("<hr>");
    }


  });
});
