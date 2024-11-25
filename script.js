let i = 0;

document.querySelectorAll(".container button").forEach((button) => {
  button.addEventListener("click", function () {
    if (i % 2 == 0) {
      this.textContent = "X";
    } else {
      this.textContent = "0";
    }
    ++i;
    let winner = checkWinner();
    if (winner) {
      alert(winner + " won!");
    } else if (isDraw()) {
      alert("Draw!");
    }
  });
});

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
    if(buttons[i].textContent == "") {
      return false;
    }
  }
  return true;
}