$( document ).ready(function() {

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

	$('.avatar-select-button').click(function(e) {
	e.preventDefault()
	var imageOne = $('.csgo-avatar');
	var imageTwo = $('.7days-avatar');
	var imageThree = $('.fortnite-avatar');
	var imageFour = $('.league-avatar');

	if(imageOne.attr('data-selected') == 'yes' || imageTwo.attr('data-selected') == 'yes' || imageThree.attr('data-selected') == 'yes' || imageFour.attr('data-selected') == "yes"){
	
	var avatarURL;

	var images = [imageOne,imageTwo,imageThree,imageFour];

	for(var i = 0 ; i < images.length; i++){
		if(images[i].attr('data-selected') == "yes"){
			avatarURL = images[i].attr('data-url');
		}
	}

	console.log('only if avatar has been selected ' + avatarURL);
	$.ajax({
			type: "POST",
			url: 'users/registerAvatar',
			data: {
			       selectedAvatar: avatarURL,
			   	},
			success: function(data){
			console.log(data);
			}
				});

	}

	});

	
});
