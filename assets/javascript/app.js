// My array of topics
var topics = ["Dogs", "Rainbows", "Colorado", "Space", "Halloween", "Christmas", "Pizza"];

// Function to make buttons for for array objects
function generateButtons () {

// For loop to loop through each itwm in the array
for (var i = 0; i < topics.length; i++) {
    var topic = $("<button/>").addClass("getAGif").text(topics[i])
    $("#buttonContainer").append(topic)

}};

generate generateButtons()


