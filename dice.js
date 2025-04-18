const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function rollDice() {
  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");

  // Add animation class
  dice1.classList.add("rolling");
  dice2.classList.add("rolling");

  setTimeout(() => {
    const rand1 = Math.floor(Math.random() * 6);
    const rand2 = Math.floor(Math.random() * 6);

    dice1.textContent = diceFaces[rand1];
    dice2.textContent = diceFaces[rand2];

    // Remove animation class
    dice1.classList.remove("rolling");
    dice2.classList.remove("rolling");
  }, 500); // Match animation duration
}
