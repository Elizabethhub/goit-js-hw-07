const inputElRef = document.querySelector("#validation-input");
const dataLenthRef = +inputElRef.dataset.length;
console.log(dataLenthRef);

inputElRef.addEventListener("input", inputChange);

function inputChange(event) {
  if (event.currentTarget.value === dataLenthRef) {
    inputElRef.classList.add("valid");
  } else {
    inputElRef.classList.remove("invalid");
  }
}
