let buttonsIndex = 0;
let nrOfButtons = 1;

function playGround() {
  const buttonContainer = document.getElementById("playground");
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      const createButton = document.createElement("button");
      createButton.type = "button";
      createButton.id = nrOfButtons.toString();
      createButton.className = "btn btn-primary";
      createButton.style.width = "100px";
      createButton.style.height = "50px";
      createButton.style.margin = "5px";
      buttonContainer.appendChild(createButton);
      ++nrOfButtons;
    }
    const lineBreak = document.createElement("br");
    buttonContainer.appendChild(lineBreak);
  }
}

function buttonInteraction() {
  document.querySelectorAll(".container button").forEach((button) => {
    button.addEventListener("click", function () {
      if (buttonsIndex % 2 == 0) {
        this.textContent = "X";
      } else {
        this.textContent = "0";
      }
      ++buttonsIndex;
      let winner = checkWinner();
      if (winner) {
        alert(winner + " won!");
      } else if (isDraw()) {
        alert("Draw!");
      }
    });
  });
}

function checkWinner() {
  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  for (let i = 0; i < winningCombinations.length; ++i) {
    let combination = winningCombinations[i];
    let buttonOne = document.getElementById(combination[0]).textContent;
    let buttonTwo = document.getElementById(combination[1]).textContent;
    let buttonThree = document.getElementById(combination[2]).textContent;

    if (buttonOne == buttonTwo && buttonOne == buttonThree) {
      return buttonOne;
    }
  }
}

function isDraw() {
  const buttons = document.querySelectorAll(".container button");
  for (let i = 0; i < buttons.length; ++i) {
    if (buttons[i].textContent == "") {
      return false;
    }
  }
  return true;
}

function startGame() {
  playGround();
  buttonInteraction();
}
