const counterValueElement = document.getElementById("counterValue");
const evenOddTextElement = document.getElementById("evenOddText");
const incrementButton = document.getElementById("incrementButton");
const resetButton = document.getElementById("resetButton");

let counterValue = 0;

function updateCounter() {
  counterValueElement.textContent = counterValue;
  evenOddTextElement.textContent = counterValue % 2 === 0 ? "Even" : "Odd";

  // Change counter color based on even/odd
  counterValueElement.style.color = counterValue % 2 === 0 ? "green" : "red";
}

incrementButton.addEventListener("click", function() {
  counterValue++;
  updateCounter();
});

resetButton.addEventListener("click", function() {
  counterValue = 0;
  updateCounter();
});
