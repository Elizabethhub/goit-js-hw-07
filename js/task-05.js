const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", inputChange);
function inputChange() {
  outputRef.textContent = this.value ? this.value : "незнакомец";
}
