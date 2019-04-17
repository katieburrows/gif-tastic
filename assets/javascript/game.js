$(document).ready(function() {
	
	//Clearing out the buttons so when a user adds a button there aren't duplicates of the original array plus the newly created button.
	$("#buttonDisplay").empty();
	
	//Original array of topics
	var topics = ["puppy", "kitten", "dog", "cat", "owl", "squirrel", "lady bug", "bird", "falcon", "fish", "bear", "monkey", "zebra", "lion", "elephant"];

	//Function with for loop that goes through each topic in the array and creates a button, adds a class and attribute to that button, sets the text of the button, then finally appends the button to the buttonDisplay area.
	function createButtons() {
		for (var i = 0; i < topics.length; i++){
			var newBtn = $("<button>");
			newBtn.addClass("gifButton");
			newBtn.attr("data-name", topics[i]);
			newBtn.text(topics[i]);
			$("#buttonDisplay").append(newBtn);
		}
	}

	//Calling above function so that when the page first loads there are buttons on the page.
	createButtons();

	//Click event to capture the user's input into the form.
	$("#submitBtn").on("click", function(event){
		
		//Used to tell the form not to submit when the button is clicked.
		event.preventDefault();

		//Variable that collects the user's input
		var formValue = $("#userInput").val();
		
		//User's input pushed into the topic array.
		topics.push(formValue);
		
		//Clears out the button display so that there are not duplicate buttons
		$("#buttonDisplay").empty();

		//Clearing out the form field and setting it to be blank after the user has submitted their button.
		$("#userInput").val("");

		//Calling the function that puts buttons on the page with the new button created by the user's input.
		createButtons();
	})

	//Event delegation is being used here because we are listening for click events on elements that were not around when the page was first loaded/are being dynamically created.
	//Click event capturing the value of the button.
	$(document).on("click", ".gifButton", function() {
		
		//Emptying out the gifsContainer of any gifs from previous clicks if there were any.
		$("#gifsContainer").empty();

		//Grabbing the data-name value to store in a variable.
		var userClick = $(this).attr("data-name");
	
		//Built out queryURL based on userClick's value.  Filtering the number of results returned to 9.
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userClick + "&limit=9&api_key=J8A3k0l7DLoaLZCF7lLPkK4LUzFtbXg1";
	
		//Ajax call that is triggered when there is a click on the topic button.
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(response){
			
			//Creating variable that gets us to the meat of the data.
			var results = response.data;

			//For loop that goes through our results and creates an image tag and paragraph tag for each response item.  
			for (var i = 0; i < results.length; i++){
				var gifImage = $("<img>");

				//The paragraph tag's text is set to the iteration's rating value.
				var p = $("<p>").text("Rating: " + results[i].rating);

				//Variable that holds current iteration's gif
				var imageUrl = results[i].images.fixed_height.url;

				//Setting the src attribute to be the previous variable's value.
				gifImage.attr("src", imageUrl);

				//Adding an element of accesibility by setting the alt attribute to be the value of the user's click.
				gifImage.attr("alt", userClick + " gif");
			
				//Finally appending the gif and that gif's rating to the gifsContainer.
				$("#gifsContainer").append(gifImage, p);
			}
				
		});
	
	});

});







//state--be able to start and stop the gif.  The gif loads in a still state

//styling: 
	//style the 9 gifs that are being displayed to the page currently.
	//style the page overall.



//consider .param() for building out dynamic url with object...look into further documentation for .param().












