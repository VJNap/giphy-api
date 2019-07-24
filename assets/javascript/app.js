$(document).ready(function () {

    var gifTopics = ["Puppies", "Cars", "World of Warcraft", "Food", "Coding", "Cigars"];
    // Function to display buttons
    function displayButtons() {
        $("#topicButtons").empty();
        for (var i = 0; i < gifTopics.length; i++) {
            var topicButton = $("<button>")
            topicButton.addClass("gifTopics btn btn-dark");
            topicButton.attr("data-name", gifTopics[i]);
            topicButton.text(gifTopics[i]);
            $("#topicButtons").append(topicButton);
        }
    };

    // Missing add new button function
        // Take input from the search field and add a new button to gifTopics

    // Function to display gifs
    function displayGifs() {

        var gifTopic = $(this).attr("data-name");
        // "Cars" to be replaced with working variable once I can establish the correct path
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=UCBcB9fbjGC7LhVaEC3bdwRFmz0AAFfN&q=" + "Cigars" + "&limit=10&offset=0&rating=PG-13&lang=en";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
                $("#topicGifs").empty();
                var gifs = response.data
                for (var i = 0; i < gifs.length; i++) {
                    var gifDiv = $("<div>");
                    gifDiv.addClass("gifDiv");
                    var gifRating = $("<p>").text("Rating: " + gifs[i].rating);
                    gifDiv.append(gifRating);
                    var gifImage = $("<img>");
                    gifImage.attr("src", gifs[i].images.fixed_height_small_still.url);
                    gifImage.attr("data-still", gifs[i].images.fixed_height_small_still.url);
                    gifImage.attr("data-animate", gifs[i].images.fixed_height_small.url);
                    gifImage.attr("data-state", "still");
                    gifDiv.append(gifImage);
                    $("#topicGifs").prepend(gifDiv);
                }
            });

    }
    // Missing on click functionality for buttons and animating gifs
    displayButtons();
    // addButtons();
    displayGifs();
    //end of document ready
});


