var matches = 0;
var wins = 0;
var attempts = 0;
var gridSize = 0;
var cardsM = [
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

var randomCardsM = cardsM.sort(function() { return 0.5 - Math.random() });

var cardsE = [
	'<img src="images/babysitter.jpg">',
	'<img src="images/bananaguy.jpg">',
	'<img src="images/cyborg.jpg">',
	'<img src="images/desertwarrior.jpg">',
	'<img src="images/babysitter.jpg">',
	'<img src="images/bananaguy.jpg">',
	'<img src="images/cyborg.jpg">',
	'<img src="images/desertwarrior.jpg">'
];

var randomCardsE = cardsE.sort(function() { return 0.5 - Math.random() });

var cardsH = [
	'<img src="images/babysitter.jpg">',
	'<img src="images/bananaguy.jpg">',
	'<img src="images/cyborg.jpg">',
	'<img src="images/desertwarrior.jpg">',
	'<img src="images/dogshow.jpg">',
	'<img src="images/hiker.jpg">',
	'<img src="images/icequeen.jpg">',
	'<img src="images/kickboxer.jpg">',
	'<img src="images/littledevil.jpg">',
	'<img src="images/mariachi.jpg">',
	'<img src="images/penguinboy.jpg">',
	'<img src="images/photographer.jpg">',
	'<img src="images/pirate.jpg">',
	'<img src="images/rogue.jpg">',
	'<img src="images/spookyboy.jpg">',
	'<img src="images/spy.jpg">',
	'<img src="images/babysitter.jpg">',
	'<img src="images/bananaguy.jpg">',
	'<img src="images/cyborg.jpg">',
	'<img src="images/desertwarrior.jpg">',
	'<img src="images/dogshow.jpg">',
	'<img src="images/hiker.jpg">',
	'<img src="images/icequeen.jpg">',
	'<img src="images/kickboxer.jpg">',
	'<img src="images/littledevil.jpg">',
	'<img src="images/mariachi.jpg">',
	'<img src="images/penguinboy.jpg">',
	'<img src="images/photographer.jpg">',
	'<img src="images/pirate.jpg">',
	'<img src="images/rogue.jpg">',
	'<img src="images/spookyboy.jpg">',
	'<img src="images/spy.jpg">'
];

var randomCardsH = cardsH.sort(function() { return 0.5 - Math.random() });


$(document).ready(function(){
	$('.modal').modal('show');
	$('#easy').click(function() {
		gridSize = 8;
		var mgHTML = '';
		var cardCounter = 0;
		for(var i = 0; i < gridSize; i++){
			if(i < 2){card = randomCardsE[0];
			}else{card = randomCardsE[1];
			}
			mgHTML += '<div class="mg-tile col-sm-3">';
				mgHTML += '<div class="mg-tile-inner">';
					mgHTML += '<div class="mg-front">'+randomCardsE[i]+'</div>';
					mgHTML += '<div class="mg-back"></div>';
				mgHTML += '</div>';
			mgHTML += '</div>';
		}
		$('.mg-contents').html(mgHTML);
		flipCard();
	});

	$('#medium').click(function() {
		gridSize = 16;
		var mgHTML = '';
		var cardCounter = 0;
		for(var i = 0; i < gridSize; i++){
			if(i < 2){card = randomCardsM[0];
			}else{card = randomCardsM[1];
			}
			mgHTML += '<div class="mg-tile col-sm-3">';
				mgHTML += '<div class="mg-tile-inner">';
					mgHTML += '<div class="mg-front">'+randomCardsM[i]+'</div>';
					mgHTML += '<div class="mg-back"></div>';
				mgHTML += '</div>';
			mgHTML += '</div>';
		}
		$('.mg-contents').html(mgHTML);
		flipCard();
	});

	$('#hard').click(function() {
		gridSize = 32;
		var mgHTML = '';
		var cardCounter = 0;
		for(var i = 0; i < gridSize; i++){
			if(i < 2){card = randomCardsH[0];
			}else{card = randomCardsH[1];
			}
			mgHTML += '<div class="mg-tile col-sm-3">';
				mgHTML += '<div class="mg-tile-inner">';
					mgHTML += '<div class="mg-front">'+randomCardsH[i]+'</div>';
					mgHTML += '<div class="mg-back"></div>';
				mgHTML += '</div>';
			mgHTML += '</div>';
		}
		$('.mg-contents').html(mgHTML);
		flipCard();
	});
	// var card = '<img src="images/square.jpeg">';

	

	
	function flipCard(){
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
	};
});







