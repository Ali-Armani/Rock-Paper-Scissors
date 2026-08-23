    let winTimes = 0;
    let loseTimes = 0;
    let tieTimes = 0;


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

        result = 'Tie.';
        tieTimes++;

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


      alert(
        `You picked ${playerMove}.
Computer picked ${computerMove}.

** ${result} **

Wins: ${winTimes}
Loses: ${loseTimes}
Ties: ${tieTimes}`
      );

    }



    function resetScore() {

      winTimes = 0;
      loseTimes = 0;
      tieTimes = 0;

      alert('Score reset.');

    }
