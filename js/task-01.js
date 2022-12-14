// Write a script that:

// Will count and display in the console the number of categories in ul#categories, that is, li.item elements.
// For each li.item element in the ul#categories list, will find and display in the console the element header text (<h2> tag) and the number of elements in the category (all nested <li>).
// As a result, the following messages will be displayed in the console.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// 1. access ul  by id=`categories`
// const ulCategories = document.getElementById("categories");
// console.dir(ulCategories)
//
//  2.a count children of this first ul?
// const numberOfCategories = document.querySelector(`ul`).children.length
// console.log(`Number of categories: `, numberOfCategories)
//  2.b or  second option -  with querySelectorAll with css selector  li.item
// const liItems = document.querySelectorAll(`li.item`)
// const liItemLength = liItems.length

// console.log(`Number of categories `, liItemLength)

const liItem = document.querySelectorAll(`li.item`);
console.log(`Number of categories `, liItem.length);

liItem.forEach(function (element) {
  console.log(`Category: `, element.firstElementChild.textContent);
  console.log(
    `Elements: `,
    [...element.firstElementChild.nextElementSibling.children].length
  );
});
