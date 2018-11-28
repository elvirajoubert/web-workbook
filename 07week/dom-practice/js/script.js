'use strict';

window.onload = function () {
  updateCounter();
  insertText();
}

//create items from input text
function insertText() {
  var addNewItems = document.createElement('input');
  addNewItems.setAttribute('type', 'text');
  addNewItems.setAttribute('placeholder', 'Type in an Item');
  var list = document.getElementsByTagName('ul');
  list[0].after(addNewItems);
  addNewItems.setAttribute('id', 'input-text');

  var buttonAdd = document.createElement('button');
  buttonAdd.innerHTML = 'add item';
  buttonAdd.setAttribute('id', 'addButton');
  var list1 = document.getElementsByTagName('input');
  list1[0].after(buttonAdd);
  buttonAdd.onclick = addItem;
}

//add items to cart
function addItem(event) {
  var newItemText = document.getElementById('input-text');
  var newList = document.createElement('li');
  newList.innerHTML = newItemText.value;
  console.log(newList);
  document.getElementsByTagName('ul')[0].appendChild(newList);
  document.getElementById('input-text').value = "";
  updateItems();
  removeItem(newList);
}
//remove items from cart
function removeItem(items) {
  var buttonRemove = document.createElement('button');
  buttonRemove.innerHTML = 'remove item';
  items.appendChild(buttonRemove);
  buttonRemove.onclick = eraseItem;
}

//erases the items from the cart on click above
function eraseItem(event) {
  this.parentNode.remove();
  updateItems();
}

function removeExsisting() {
  var buttonRemove2 = document.createElement('button');
  buttonRemove2.innerHTML = 'remove item';


}

function eraseExsisting(event) {
  this.parentNode.remove();
  updateItems();
}

//updates the counter above
function updateCounter() {
  var newh2 = document.createElement('h2');
  var listCount = document.getElementsByTagName('ul')[0].children.length;
  newh2.innerHTML = 'You have ' + listCount + ' items in your shopping cart.';
  document.getElementsByTagName('h1')[0].after(newh2);
  newh2.setAttribute('id', 'counter');
  alert('You have ' + listCount + ' items in your shopping cart.')
}

//updates text on page
function updateItems() {
  var counter = document.getElementById('counter');
  var listCount = document.getElementsByTagName('ul')[0].children.length;
  counter.innerHTML = 'You have ' + listCount + ' items in your shopping cart.';
}