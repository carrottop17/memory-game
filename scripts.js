var matches = 0;
var wins = 0;
var attempts = 0;
var cards = [
	'<img src="images/babysitter.jpg">',
	'<img src="images/bananaguy.jpg">',
	'<img src="images/cyborg.jpg">',
	'<img src="images/desertwarrior.jpg">',
	'<img src="images/dogshow.jpg">',
	'<img src="images/hiker.jpg">',
	'<img src="images/icequeen.jpg">',
	'<img src="images/kickboxer.jpg">',
	'<img src="images/babysitter.jpg">',
	'<img src="images/bananaguy.jpg">',
	'<img src="images/cyborg.jpg">',
	'<img src="images/desertwarrior.jpg">',
	'<img src="images/dogshow.jpg">',
	'<img src="images/hiker.jpg">',
	'<img src="images/icequeen.jpg">',
	'<img src="images/kickboxer.jpg">'
];

var randomCards = cards.sort(function() { return 0.5 - Math.random() });




$(document).ready(function(){
	$('.modal').modal('show');
	var gridSize = 16;
	var card = '<img src="images/square.jpeg">';

	var mgHTML = '';
	var cardCounter = 0;
	for(var i = 0; i < gridSize; i++){
		if(i < 2){card = randomCards[0];
		}else{card = randomCards[1];
		}
		mgHTML += '<div class="mg-tile col-sm-3">';
			mgHTML += '<div class="mg-tile-inner">';
				mgHTML += '<div class="mg-front">'+randomCards[i]+'</div>';
				mgHTML += '<div class="mg-back"></div>';
			mgHTML += '</div>';
		mgHTML += '</div>';
	}

	$('.mg-contents').html(mgHTML);

	$(document).ready(function(){
		$('.mg-tile-inner').click(function() {
			$(this).toggleClass('flip');
			var cardsUp = $('.mg-tile-inner.flip');
				if(cardsUp.length === 2){
					attempts = attempts + 1;
					$( "#attempts" ).html(attempts);
					// check to see if they are the same
					if(cardsUp.find('img')[0].src == cardsUp.find('img')[1].src){
						// the pictures are the same. they mathch
						matches = matches+1;
						$( "#score" ).html(matches);
						setTimeout(function(){
							cardsUp.addClass('matched');
						}, 500);
						setTimeout(function(){
						cardsUp.removeClass('flip');
						}, 1000);	
					}else{
						// the user has flipped two cards and they dont mathch
						setTimeout(function(){
							cardsUp.removeClass('flip');
						}, 1000)
						
					}
				}
				if(matches == (gridSize / 2)){
					wins = wins+1;
					$( "#wins" ).html(wins);
				};
		});
	});
});







