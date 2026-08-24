    let winTimes = 0;
    let loseTimes = 0;
    let drawTimes = 0;

    updateScoreElement();

    function playGame(playerMove) {

      let randomNumber = Math.random();

      let computerMove = '';

      if (randomNumber < 1 / 3) {
        computerMove = 'Rock';
      } else if (randomNumber < 2 / 3) {
        computerMove = 'Paper';
      } else {
        computerMove = 'Scissors';
      }


      let result = '';


      if (playerMove === computerMove) {

        result = 'Draw.';
        drawTimes++;

      } 
      else if (
        (playerMove === 'Rock' && computerMove === 'Scissors') ||
        (playerMove === 'Paper' && computerMove === 'Rock') ||
        (playerMove === 'Scissors' && computerMove === 'Paper')
      ) {

        result = 'You win!';
        winTimes++;

      } 
      else {

        result = 'You lose.';
        loseTimes++;

      }

        updateScoreElement();

        function updateScoreElement () {
        document.querySelector('.js-score').innerHTML = `Wins: ${winTimes}<br>Losses: ${loseTimes}<br>Draws: ${drawTimes}`;
      }


      alert(
        `You picked ${playerMove}.
Computer picked ${computerMove}.

** ${result} **

Wins: ${winTimes}
Loses: ${loseTimes}
Draws: ${drawTimes}`
      );

    }



    function resetScore() {

      winTimes = 0;
      loseTimes = 0;
      drawTimes = 0;

      alert('Score reset.');

    }
