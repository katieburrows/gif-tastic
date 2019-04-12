      //on page load:
        //Set variables:
          //buttonTitles = ["basebal", "hockey", "football"]
        //diplayButtons - function
        	//Clear previous buttons from screen
        	//for loop through buttonTitles array
        		//Create a jQuery button
        		//Add attribut to jQuery button created (attribute title: "button-title", attribute value: the button vaule at that index)
        		//Put the current buttonTitle that we are looping through in the button
        		//Append the button to the page
        //When the user clicks on one of the buttons - function
        	//we might need prevent default
        	//get the attribute of the button clicked, and store it in a variable.
        	//clear out old images from page (.empty)
        	//AJAX call to GIPHY
        		// Method | GET
        		//URL | https://api.giphy.com/ ........> //this will be found using the giphy website and piecing it together.
        		//.done
        			//loop through response.data
        				//create a jQuery div
        				//create a jQuery image
        				//set the src attribute of the JQuery image to be the image from GIPHY response (data[i].images.original.still)
        				//Add data-state attribute to jQuery image = "still"
        				//add data-animateurl attribute to JQuery image = response.date[i].images.original.url
        				//Add data-stillurl attriubte to jqueruy image = response.data[i].images.original_still.url
        				//create a jQuery paragrpah
        				//Put the rating from GIPHY response into paragraph created (response.data[i].rating)
        				//Append jQuery image to jQuery div
        				//Append jQuery paragraph to jQuery div
        				//Append jQuery div to the page
        //On click of form submit button - function
        	//create variable of user input text field
        	//push variable just created to array (buttonTitles)
        	//run displayButtons function
        //On click of image div - function
        	//Set variable equal to iage clicked data-state attribute
        	//if (imageState == "still")
        		//Set src attribute of image clicked to be the data-animateurl attribute of the image clicked
        		//Set data-state attribute of image clicked to be "animated"
        	//else if (imageState == "animated")
        		//Set src attribute of image clicked to be the data-stillurl attribute of the image clicked
        		//Set data-state attribute of image clicked to be "still"