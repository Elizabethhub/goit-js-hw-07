const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const markup = ingredients.map((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  return listItem;
});
console.log(markup);

document.querySelector("#ingredients").append(...markup);
