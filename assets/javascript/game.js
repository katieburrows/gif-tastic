$(document).ready(function() {
	$("#buttonDisplay").empty();
	
	let userClick;

	var topics = ["puppy", "kitten", "dog", "cat", "owl", "squirrel", "lady bug", "bird", "falcon", "fish", "bear", "monkey", "zebra", "lion", "elephant"];

	for (var i = 0; i < topics.length; i++){
		var newBtn = $("<button>");
		newBtn.addClass("gifButton");
		newBtn.attr("data-value", topics[i]);
		newBtn.text(topics[i]);
		$("#buttonDisplay").append(newBtn);
	}
	
	function getGifInfo(event) {
		event.preventDefault();
		userClick = $(this).val();
		console.log("user click: " + userClick);
		
	}
	
	$(document).on("click", ".gifButton", getGifInfo);
	// let queryURL = "https://api.giphy.com/v1/gifs/search?limit=10&rating='g'&" + topics[i] + "api_key=J8A3k0l7DLoaLZCF7lLPkK4LUzFtbXg1";
	// 	console.log(queryURL);

		// $.ajax({
		// 	url: queryURL,
		// 	method: "GET"
		// }).then(function(response){
			
		// })
	

	// $.ajax({
	// 	url: queryURL,
	// 	method: "GET"
	// }).then(function(response){
	// 	console.log(response);
	// });

})



//get my preselected giphy array on the page as buttons--no gifs will be displayed until the corresponding button is clicked on.
	//the array will be looped through and the term in quotes will be placed into the query url completing it
		//the ajax call will be called with a click event.

//build out gif section w/o dynamic queryURL 
//build dynamic queryURL with click event

//when a user adds a gif with the form that will be .pushed to topics
	//so get a dynamic button population and click event

















