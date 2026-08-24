const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  draws: 0
};

updateScoreElement();

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML =
    `Wins: ${score.wins}<br>
     Losses: ${score.losses}<br>
     Draws: ${score.draws}`;
}

    function playGame(playerMove) {

      let randomNumber = Math.random();

      let computerMove = '';

      if (randomNumber < 1 / 3) {
        computerMove = '🪨';
      } else if (randomNumber < 2 / 3) {
        computerMove = '📃';
      } else {
        computerMove = '✂️';
      }


      let result = '';


      if (playerMove === computerMove) {

        result = 'Draw.';
        drawTimes++;

      } 
      else if (
        (playerMove === '🪨' && computerMove === '✂️') ||
        (playerMove === '📃' && computerMove === '🪨') ||
        (playerMove === '✂️' && computerMove === '📃')
      ) {

        result = 'You win!';
        winTimes++;

      } 
      else {

        result = 'You lose.';
        loseTimes++;

      }

      localStorage.setItem('score', JSON.stringify(score));
        
    }



    function resetScore() {

      winTimes = 0;
      loseTimes = 0;
      drawTimes = 0;

      alert('Score reset.');

    }
