var topics = ["Dogs", "Rainbows", "Colorado", "Space", "Halloween", "Christmas", "Pizza",];

function generateButtons () {
    // Make buttons out of topics array
    // Make a for loop to loop through each item in the array
    for (var i = 0; i < topics.length; i++) {
        var topic = $("<button/>").addClass("topics").text(topics[i])
        $("#buttonContainer").append(topic)
    
    }
    
    // Make a button for each item
    // Add the value to each button
    // Append each button to our div in the html (this is where we want the buttons to go)

}
generateButtons()


var checkGifState = function () {

// The attr jQuery method allows us to get or set the value of any attribute on our HTML element
var state = $(this).attr("data-state");

// If the clicked image's state is still, update its src attribute to what its data-animate value is.
// Then, set the image's data-state to animate
// Else set src to the data-still value
if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
} else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
}

}

var generateGif = function (results) {
    console.log(results)

    // Looping over each result item
    for (var i = 0; i < results.length; i++) {

    // Creating a div for the gif
    var gifDiv = $("<div>");

    // Creating a paragraph tag with the result item's rating
    var p = $("<p>").text("Rating: " + rating);

    // Creating an image tag
    var gifImage = $("<img>");

    // Setting the src attribute of the image to a property pulled off the result item
    var stillImage = results[i].images.fixed_width_still.url;
    var animatedImage = results[i].images.fixed_width.url;
    }


}
