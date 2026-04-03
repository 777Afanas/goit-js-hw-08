// З використанням властивостей і методів DOM-елементів,
// напиши скрипт, який:
// Порахує й виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе
// в консоль текст заголовка елемента (тегу <h2>) і кількість
// елементів у категорії (усіх <li>, вкладених у нього).

const categoriesListEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesListEl.children.length}`);

const listEl = document.querySelectorAll('.item');
listEl.forEach(listEl => {
  console.log(`Category: ${listEl.firstElementChild.textContent}`);
  console.log(`Elements: ${listEl.lastElementChild.children.length}`);
});
