const categoryList = document.querySelector("ul");

const categories = categoryList.children;
console.log(`В списке ${categories.length} категории.`);

[...categories].forEach((item) => {
  const title = item.querySelector("h2");
  console.log(`Категория: ${title.textContent}`);

  const includedCategories = item.querySelector("ul");
  const children = includedCategories.children;
  console.log(`Количество элементов: ${children.length}`);
});
