const inputElRef = document.querySelector("#validation-input");
const dataLenthRef = +inputElRef.dataset.length;
console.log(dataLenthRef);

inputElRef.addEventListener("blur", inputChange);

function inputChange(event) {
  if (event.currentTarget.value.length === dataLenthRef) {
    setClass("valid", "invalid");
  } else {
    setClass("invalid", "valid");
  }
}
function setClass(newClass, oldClass) {
  inputElRef.classList.add(newClass);
  inputElRef.classList.remove(oldClass);
}
