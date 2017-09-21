$(document).ready(function() {

var number =0;
var wins =0;
var losses =0;
var number = Math.floor((Math.random() * 120) + 19);
var tSc =0;
var rubyCr = Math.floor((Math.random() * 12) + 1);
var emeraldCr = Math.floor((Math.random() * 12) + 1);
var blueCr = Math.floor((Math.random() * 12) + 1);
var pinkCr = Math.floor((Math.random() * 12) + 1);
// updating spans
var updateTSC = function (){
	
	$('#tSc').html(tSc);

	
	$('#wins').html(wins);

	$('#losses').html(losses);
}

// re start game
	var restart = function(){
		tSc = 0;
		number = Math.floor((Math.random() * 120) + 19);

		$('#number').empty();
		$('#number').append(number);

		 rubyCr = Math.floor((Math.random() * 12) + 1);
		 emeraldCr = Math.floor((Math.random() * 12) + 1);
		 blueCr = Math.floor((Math.random() * 12) + 1);
		 pinkCr = Math.floor((Math.random() * 12) + 1);
		updateTSC();

	}
// if total score = number win+1/ if total score  > number loss+1/if total score < number update score
var game = function(){
	if (tSc == number) {
		wins = wins + 1;
		console.log("w" + wins)
		restart();
	}else if (tSc > number){
		losses = losses + 1;
		console.log("l" + losses)
		restart();
	}else {
		updateTSC();
	}
}

$('#number').append(number);
$('#tSc').append(tSc);

// click events for crystals adding to total score
	$('#rubyCr').click(function(){
		tSc = tSc + rubyCr;
		game();
	})
	$('#emeraldCr').click(function(){
		tSc = tSc + emeraldCr;
		game();
	})
	$('#blueCr').click(function(){
		tSc = tSc + blueCr;
		game();
	})
	$('#pinkCr').click(function(){
		tSc = tSc + pinkCr;
		game();
	})
});


