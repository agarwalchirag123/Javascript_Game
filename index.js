var scores, roundScore, activePlayer, gamePlaying;


document.querySelector('.roll').addEventListener('click', function() {
    if(gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice' + dice + '.png';

    if (dice !==1 ) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
        nextPlayer();

    }
    }


});


document.querySelector('.hold').addEventListener('click', function() {
    if (gamePlaying) {
         scores[activePlayer] += roundScore;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {

//funciton for winning

        gamePlaying = false;
    } else {
        nextPlayer();
    }



}

    })
   ;

function nextPlayer() {
    if (activePlayer===0) {activePlayer=1 ;} else {activePlayer=0;}
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        // document.querySelector('.dice').style.display = 'none';
}