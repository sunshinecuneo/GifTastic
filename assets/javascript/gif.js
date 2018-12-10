var topics = ["Dogs", "Rainbows", "Colorado", "Space", "Halloween", "Christmas", "Pizza"];

// Function to make buttons for for array objects
function generateButtons() {

    $("#buttonContainer").empty();
    console.log("Generate")
    //For loop to loop through each item in the array
    for (var i = 0; i < topics.length; i++) {
        var topic = $("<button/>").addClass("getAGif").text(topics[i])
        $("#buttonContainer").append(topic)
    }
}
generateButtons()

// Adding a new button and text to that new button
$("#addButton").on("click", function (event) {
    event.preventDefault();
    var newButton = $("#gifInput").val().trim();
    topics.push(newButton);
    generateButtons();
    $("#gifInput").val("");

})

// Click event on buttons
$("#buttonContainer").on("click", ".getAGif", function () {

    //Constructing a URL to search Giphy for the items in the array 
    var search = $(this).text();
    console.log(search);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=rIslLHL3TchIMcEvNyxrsNH4WYb6E8FZ&limit=10";

    // Performing AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // After data comes back from the API
        .then(function (results) {
            console.log(results.data);

            // // Storing an array of results in the results variable
            // var results = results.data;

            // Emptying the previous images when a new image button is clicked
            $("#gifView").empty();

            // Looping over each result item
            for (var i = 0; i < results.data.length; i++) {

                // Creating a div for the gif
                var gifDiv = $("<div>");

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results.data[i].rating);
                console.log(results.data[i].rating);

                // Creating an image tag
                var gifImage = $("<img>");

                // Setting the src attribute of the image to a property pulled off the result item
                var stillImage = results.data[i].images.fixed_width_still.url;
                var animatedImage = results.data[i].images.fixed_width.url;
                gifImage.attr("src", stillImage);
                gifImage.attr("data-still", stillImage);
                gifImage.attr("data-animate", animatedImage);
                gifImage.attr("data-state", "still");
                gifImage.addClass("myGifs");
                // Add img to gifdiv
                gifDiv.append(gifImage);
                // add rating to gifdiv
                gifDiv.append(p);
                // add gifdiv to gifview(html)
                $("#gifView").append(gifDiv);
            }
        });
});
$("#gifView").on("click", ".myGifs", function () {

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
});