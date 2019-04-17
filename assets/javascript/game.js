$(document).ready(function() {
	var userClick;
	
	//Clearing out the buttons so when a user adds a button there aren't duplicates of the original array plus the newly created button.
	$("#buttonDisplay").empty();
	
	//Original array of topics
	var topics = ["puppy", "kitten", "dog", "cat", "owl", "squirrel", "lady bug", "bird", "falcon", "fish", "bear", "monkey", "zebra", "lion", "elephant"];

	//For loop that goes through each topic in the array and creates a button, adds a class and attribute to that button, sets the text of the button, then finally appends the button to the buttonDisplay area.
	for (var i = 0; i < topics.length; i++){
		var newBtn = $("<button>");
		newBtn.addClass("gifButton");
		newBtn.attr("data-name", topics[i]);
		newBtn.text(topics[i]);
		$("#buttonDisplay").append(newBtn);
	}
	
	//Event delegation is being used here because we are listening for click events on elements that were not around when the page was first loaded/are being dynamically created.
	//Click event capturing the value of the button; the value of the button is mutating the variable userClick.
	$(document).on("click", ".gifButton", function() {
		$("#gifsContainer").empty();
		userClick = $(this).attr("data-name");
	
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userClick + "&limit='9'&api_key=J8A3k0l7DLoaLZCF7lLPkK4LUzFtbXg1";
	
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(response){
			var results = response.data;

			for (var i = 0; i < 10; i++){
				var gifImage = $("<img>");
				var p = $("<p>").text("Rating: " + results[i].rating);
				var imageUrl = results[i].images.fixed_height.url;
				gifImage.attr("src", imageUrl);
				gifImage.attr("alt", userClick + " gif");
			
				$("#gifsContainer").append(gifImage);
			}
				
		})
	
	});

})



//consider .param() for building out dynamic url with object...look into further documentation for .param().

//get my preselected giphy array on the page as buttons--no gifs will be displayed until the corresponding button is clicked on.
	//the array will be looped through and the term in quotes will be placed into the query url completing it
		//the ajax call will be called with a click event.

//build out gif section w/o dynamic queryURL 
//build dynamic queryURL with click event

//when a user adds a gif with the form that will be .pushed to topics
	//so get a dynamic button population and click event

















