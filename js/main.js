// GIPHY API

$.get({
  url: "https://api.giphy.com/v1/gifs/search?q=pugs&api_key=dc6zaTOxFJmzC&limit=50&rating=pg",
  success: function(result) {
    var data = result.data;
    var output = "";
    for (var index in data){
      var gifObject = data[index];
      var gifURL = gifObject.images.original.url;
      console.log(gifURL);
      output += "<img class='grid-item' src='"+gifURL+"'/>";
    }
    $("#giphy").html(output);
  },
  error: function(error) {
    console.log(error);
  }
});


$(document).ready(function(){

  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,

  });

});
