// Global variables
const diceElements = Array.from(document.querySelectorAll('.dice'));
const scoreElement = document.getElementById('score');

// Function to generate random dice rolls
function rollDice() {
  const rolls = diceElements.map(() => Math.floor(Math.random() * 6) + 1);

  // Display the rolls on the dice elements
  for (let i = 0; i < diceElements.length; i++) {
    diceElements[i].textContent = rolls[i];
  }

  // Calculate and update the score
  const score = calculateScore(rolls);
  scoreElement.textContent = score;
}

// Function to calculate the score
function calculateScore(rolls) {
  // TODO: Implement the scoring logic
  // This function should return the total score based on the dice rolls.
  // Refer to the rules of the Ferengi Game of Daboo to determine the scoring logic.
  // You can use conditional statements, loops, and other JavaScript features to calculate the score.
  // Feel free to define additional helper functions if needed.
}

// Event listener for the "Roll Dice" button
const rollButton = document.getElementById('roll-button');
rollButton.addEventListener('click', rollDice);
function calculateScore(rolls) {
    let score = 0;
  
    // Calculate the score based on the dice rolls
    // You need to implement the scoring rules of the Ferengi Game of Daboo here.
  
    // Example scoring logic (modify according to the game rules):
    for (const roll of rolls) {
      if (roll === 1) {
        score += 10;
      } else if (roll === 6) {
        score += 6;
      } else {
        score += roll;
      }
    }
  
    return score;
}
