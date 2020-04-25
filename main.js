const mainGame = () => {
  let pScore = 0;
  let cScore = 0;

  //   Starting The Game
  const startGame = () => {
    const gameStart = document.querySelector(".start");
    const startBtn = document.querySelector(".start .btn");
    const mainGame = document.querySelector(".main-game");

    startBtn.addEventListener("click", () => {
      gameStart.classList.add("fadeOut");
      mainGame.classList.remove("fadeOut");
    });
  };

  //   Play Match
  const playGame = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(" .computer-hand");
    const hands = document.querySelectorAll(" .hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //Computer options
    const compterOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const compChoice = compterOptions[computerNumber];

        setTimeout(() => {
          compareHand(this.textContent, compChoice);

          // Here we change Images
          playerHand.src = `./asset/${this.textContent}.png`;
          computerHand.src = `./asset/${compChoice}.png`;
        }, 2000);

        // Set Animation
        playerHand.style.animation = " shakePlayer 2s ease";
        computerHand.style.animation = " shakeComputer 2s ease";
      });
    });
  };

  const winner = document.querySelector(".winner_title");
  const Pscore = document.querySelector(".score__player p");
  const Cscore = document.querySelector(".score__computer p");

  const compareHand = (playerChoice, compChoice) => {
    if (playerChoice === compChoice) {
      winner.textContent = "It's a Tie!";
      return;
    }
    if (playerChoice === "rock") {
      if (compChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        Pscore.textContent = pScore;
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        Cscore.textContent = cScore;

        return;
      }
    }
    if (playerChoice === "paper") {
      if (compChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        Cscore.textContent = cScore;
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        Pscore.textContent = pScore;
        return;
      }
    }
  };

  startGame();
  playGame();
};

mainGame();
