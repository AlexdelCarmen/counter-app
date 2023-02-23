const counter = document.getElementById("counter"); // counter element in document.

//buttons
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");

let count = 0;

counter.textContent = count;

function checkSign(value) {
  if (value > 0) {
    counter.classList.remove("negative");
    counter.classList.add("positive");
  } else if (value < 0) {
    counter.classList.remove("positive");
    counter.classList.add("negative");
  } else {
    counter.classList.remove("negative");
    counter.classList.remove("positive");
  }
}

decreaseButton.addEventListener("click", () => {
  count--;
  counter.textContent = count;
  checkSign(count);
});

increaseButton.addEventListener("click", () => {
  count++;
  counter.textContent = count;
  checkSign(count);
});

resetButton.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
  counter.classList.remove("negative");
  counter.classList.remove("positive");
});
