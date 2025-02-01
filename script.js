
      let score = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        loss: 0,
        Tie: 0,
      };

      updateScore();
      let isAutoPlaying = false;
      let IntervalId ;

      function autoPlay(){
        if(!isAutoPlaying){
            IntervalId = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
            },1000)
            isAutoPlaying = true;
        }else{
          clearInterval(IntervalId);
          isAutoPlaying = false;

        }
        

      }


      function playGame(playerMove) {
        const computerMove = pickComputerMove();
        let result = "";

        if (playerMove === "Sissors") {
          if (computerMove === "Rock") {
            result = "You lose.";
          } else if (computerMove === "Paper") {
            result = "You Win.";
          } else if (computerMove === "Sissors") {
            result = "Tie.";
          }
        } else if (playerMove === "Paper") {
          if (computerMove === "Rock") {
            result = "You Win.";
          } else if (computerMove === "Paper") {
            result = "Tie.";
          } else if (computerMove === "Sissors") {
            result = "You lose.";
          }
        } else if (playerMove === "Rock") {
          if (computerMove === "Rock") {
            result = "Tie.";
          } else if (computerMove === "Paper") {
            result = "You lose.";
          } else if (computerMove === "Sissors") {
            result = "You Win.";
          }
        }

        if (result === "You Win.") {
          score.wins += 1;
        }
        if (result === "You lose.") {
          score.loss += 1;
        }
        if (result === "Tie.") {
          score.Tie += 1;
        }

        localStorage.setItem("score", JSON.stringify(score));

        updateScore();
        document.querySelector(".js-result").innerHTML = result;
        document.querySelector(
          ".js-moves"
        ).innerHTML = ` You <img src="imgs/${playerMove}-emoji.png"class="move-icons">  <img src="imgs/${computerMove}-emoji.png"class="move-icons"> Computer`;
      }
      function updateScore() {
        document.querySelector(".js-score").innerHTML = `
        Wins: ${score.wins}, Lose: ${score.loss}, Tie: ${score.Tie}`;
      }
      function pickComputerMove() {
        const randomMove = Math.random();
        let computerMove = "";
        if (randomMove >= 0 && randomMove < 1 / 3) {
          computerMove = "Rock";
        } else if (randomMove >= 1 / 3 && randomMove < 2 / 3) {
          computerMove = "Paper";
        } else if (randomMove >= 2 / 3 && randomMove < 1) {
          computerMove = "Sissors";
        }
        return computerMove;
      }
   