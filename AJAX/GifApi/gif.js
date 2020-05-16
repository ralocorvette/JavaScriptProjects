console.log("hello");

function getData() {
  var input = $("#searchtext").val();
  //request
  var xhr = $.get(
    "http://api.giphy.com/v1/gifs/search?q=" +
      input +
      "+&api_key=RkZMkXQ7kzeKtcu6e2IjSq5cOHT6Svm0&limit=30"
  );
  //promise
  xhr.done(function (response) {
    console.log("success data retrived", response);
    var jiffs = response.data;

    for (var i in jiffs) {
      $(".inner").append(
        "<img src='" +
          jiffs[i].images.original.url +
          "' style='height:350px; width:350px;'/>"
      );
    }
  });
}
