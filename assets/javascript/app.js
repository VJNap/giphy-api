//

$(document).ready(function () {

    var gifTopics = ["Puppies", "Cars", "World of Warcraft", "Food", "Coding"];

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

    function displayGifs() {

        var gifTopic = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=UCBcB9fbjGC7LhVaEC3bdwRFmz0AAFfN&q=" + gifTopic + "&limit=10&offset=0&rating=PG&lang=en";
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
                    var gifRating = $("<p>").text("Rating: " + results[i].rating);
                    gifDiv.append(gifRating);
                    var gifImage = $("<img>");
                    gifImage.attr("src", results[i].images.fixed_height_small_still.url);
                    gifImage.attr("data-still", results[i].images.fixed_height_small_still.url);
                    gifImage.attr("data-animate", results[i].images.fixed_height_small.url);
                    gifImage.attr("data-state", "still");
                    gifDiv.append(gifImage);
                    $("#topicGifs").prepend(gifDiv);
                }
            });

    }
    displayButtons();
    //end of document ready
});


