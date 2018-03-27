

//add a button with text from the animal added
var animalArray = [];


//create an onclick event on the button
//once button is triggered, add into an empty array and get 10 images from giphy API
$("button").on("click", function() { 
var newAnimal = $("#animalName").val();
var newAnimalButton = $("<button>").attr(data-animal);

console.log(newAnimal);
animalArray.push(newAnimal);
console.log(animalArray);
var animal = $(this);


var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=t5n38RPYPLiAOQ7hU5W9B9cNsaSxJhX2&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
}).then( function (response) {
    console.log(response);

    var results = response.data;

   for ( i = 0; i < results.length; i++) {
   var animalGif = $("<div>");

    var rating = results[i].rating;

    var p = $("<p>").text("Rating: " + rating);

    var animalImage = $("<img>");
    animalImage.attr("src", results[i].images.fixed_height.url);

    animalGif.prepend(p);
    animalGif.prepend(animalImage);

    $("#animal-gifs").prepend(animalGif);
   }

}).fail( function(err) {
    throw err;
});



});