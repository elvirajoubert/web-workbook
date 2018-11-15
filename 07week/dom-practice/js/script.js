'use strict';

window.onload = function() {
let count = document.getElementsByTagName('ul');
console.log(count[0].children.length);

// let newh2 = document.create.Element('h2');
// newh2.innerHTML = "You have _ items in our shopping cart";
// document.list.appendChild(newh1);

let newh2 = document.createElement('h2');
newh2.innerHTML = "you have " + count[0].children.length + " items in your shopping cart";
document.getElementsByTagName('h1')[0].after(newh2);


// Add input and button

function createNewAddField(){
  let newinput = document.createElement('input');
  inputField.setAttribute("id",  "item-text");
  document.getElementsByTagName('ul')[0].after(newinput);
  let inputField = docuemnt.getElementByIdgjfj("item-text");
  inputField.setAttribute("placeholder",  "Type to add Item");
}

// Creating a button within JS

let newbutton = document.createElement('button');
ewbutton.setAttribute("id", 'add-button');
document.getElementById('item-text').after(newbutton);
newbutton.innerHTML = "add item";
newbutton.onclick = addItemsExistinglist;
}

function addItemsExistingList(event){
  let userInput = document.getElementById('item-text').value;
  console.log(userInput)

}



