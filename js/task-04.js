const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const currentValueRef = document.querySelector("#value");

let counterValue = 0;
decrementRef.addEventListener("click", decrement);
incrementRef.addEventListener("click", increment);

console.log(decrementRef, incrementRef);

function decrement() {
  counterValue -= 1;
  updateCounterValue();
}
function increment() {
  counterValue += 1;
  updateCounterValue();
}
function updateCounterValue() {
  currentValueRef.textContent = counterValue;
}
