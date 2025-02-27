 // Declare score as a global variable using var
 var score;

 // Safely load the score from localStorage
 function loadScore() {
   try {
     const storedScore = localStorage.getItem('score');
     score = storedScore ? JSON.parse(storedScore) : { wins: 0, losses: 0, ties: 0 };
   } catch (e) {
     // If there's an error parsing JSON, reset the score
     score = { wins: 0, losses: 0, ties: 0 };
   }
 }
 
 loadScore();


 updateScoreElement();

 


 function playGame(playerMove) {
   const computerMove = pickComputerMove();
   let result = '';

   if (playerMove === 'scissors') {
     if (computerMove === 'rock') {
       result = 'You lose.';
     } else if (computerMove === 'paper') {
       result = 'You win.';
     } else if (computerMove === 'scissors') {
       result = 'Tie.';
     }
   } else if (playerMove === 'paper') {
     if (computerMove === 'rock') {
       result = 'You win.';
     } else if (computerMove === 'paper') {
       result = 'Tie.';
     } else if (computerMove === 'scissors') {
       result = 'You lose.';
     }
   } else if (playerMove === 'rock') {
     if (computerMove === 'rock') {
       result = 'Tie.';
     } else if (computerMove === 'paper') {
       result = 'You lose.';
     } else if (computerMove === 'scissors') {
       result = 'You win.';
     }
   }

   // Update score based on the result
   if (result === 'You win.') {
     score.wins++;
   } else if (result === 'You lose.') {
     score.losses++;
   } else if (result === 'Tie.') {
     score.ties++;
   }

   // Save the updated score in localStorage
   localStorage.setItem('score', JSON.stringify(score));

   updateScoreElement();

   document.querySelector('.js-result').
   innerHTML = result;

   document.querySelector('.js-moves').
   innerHTML = `You 
 <img src="images/${playerMove}-emoji.png" class="move-icon">
 <img src="images/${computerMove}-emoji.png" class="move-icon">
 Computer`;
 }

 function updateScoreElement() {
   document.querySelector('.js-score').
   innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

 }


 function pickComputerMove() {
   const randomNumber = Math.random();
   if (randomNumber < 1 / 3) {
     return 'rock';
   } else if (randomNumber < 2 / 3) {
     return 'paper';
   } else {
     return 'scissors';
   }
 }

 // Reset both the in-memory score and clear the saved score in localStorage
 function resetScore() {
   score = { wins: 0, losses: 0, ties: 0 };
   localStorage.removeItem('score');
   
 }