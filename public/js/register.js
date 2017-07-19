$( document ).ready(function() {

	var selectedURL;

	//// Change the Opacity of the Images on click ////
	$('.csgo-avatar').click(function() {

	var imageOne = $('.csgo-avatar');
	var imageTwo = $('.7days-avatar');
	var imageThree = $('.fortnite-avatar');
	var imageFour = $('.league-avatar');

	var images = [imageOne,imageTwo,imageThree,imageFour];

	for(var i = 0 ; i < images.length ; i++){
		images[i].css('opacity' , "1");
		images[i].attr('data-selected' , 'no')
	}

	$(this).css("opacity" , "0.2");
	$(this).attr('data-selected', 'yes');

	});

	$('.7days-avatar').click(function() {

	var imageOne = $('.csgo-avatar');
	var imageTwo = $('.7days-avatar');
	var imageThree = $('.fortnite-avatar');
	var imageFour = $('.league-avatar');

	var images = [imageOne,imageTwo,imageThree,imageFour];

	for(var i = 0 ; i < images.length ; i++){
		images[i].css('opacity' , "1");
		images[i].attr('data-selected' , 'no')
	}

	$(this).css("opacity" , "0.2");
	$(this).attr('data-selected', 'yes');

	});

	$('.fortnite-avatar').click(function() {

	var imageOne = $('.csgo-avatar');
	var imageTwo = $('.7days-avatar');
	var imageThree = $('.fortnite-avatar');
	var imageFour = $('.league-avatar');

	var images = [imageOne,imageTwo,imageThree,imageFour];

	for(var i = 0 ; i < images.length ; i++){
		images[i].css('opacity' , "1");
		images[i].attr('data-selected' , 'no')
	}

	$(this).css("opacity" , "0.2");
	$(this).attr('data-selected', 'yes');

	});

	$('.league-avatar').click(function() {

	var imageOne = $('.csgo-avatar');
	var imageTwo = $('.7days-avatar');
	var imageThree = $('.fortnite-avatar');
	var imageFour = $('.league-avatar');

	var images = [imageOne,imageTwo,imageThree,imageFour];

	for(var i = 0 ; i < images.length ; i++){
		images[i].css('opacity' , "1");
		images[i].attr('data-selected' , 'no')
	}

	$(this).css("opacity" , "0.2");
	$(this).attr('data-selected', 'yes');


	});
	//// Change the Opacity of the Images on click End 			////

	//// Save whichever photo was clicked last in a variable	////
	//// and puch it into the appropriate DB					////

	$('.avatar-image-register').click(function() {

		selectedURL = $(this).data('data-url');
		console.log(selectedURL);

	});

	$('.avatar-select-button').click(function(e) {

	e.preventDefault()
	



	})


});

	// var prefImage;
	// var selected = ["csgo","7days","fortnite","league"];
	// var clicked = $(this).attr('data-value')
	// e.preventDefault()
 //    prefImage = $(this).attr('data-url');

 //    // selected.push($(this).attr('data-value'))

 //    for(var i = 0 ; i < selected.length ; i++){
 //    	if(selected[i] == clicked){
 //    		$(this).css('opacity', "0.2");
 //    	} else {
 //    		$(this).css('opacity', "1");
 //    	}
 //    }