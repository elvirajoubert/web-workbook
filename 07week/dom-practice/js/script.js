'use strict';
window.onload = function() {
  updateCounter();
  insertText();}
  
window.onload = function(){
  let count = document.getElementsByTagName('ul');
  console.log(count[0].children.length);
  
  let newh2 = document.createElement('h2');
  newh2.innerHTML= "You have " + count[0].children.length + " items in your shopping cart";
  document.getElementsByTagName('h1')[0].after(newh2);
  
  createNewAddField();
}
//add input
  function createNewAddField(){
    let newinput = document.createElement('input');
    newinput.setAttribute("id", 'item-text');
    document.getElementsByTagName('ul')[0].after(newinput);
    let inputField = document.getElementById('item-text');
    inputField.setAttribute("placeholder", "Type to add Item");
    
    let newbutton = document.createElement('button');
    newbutton.setAttribute("id", 'add-button');
    document.getElementById('item-text').after(newbutton);
    newbutton.innerHTML = "add item";
   // list1[0].after(buttonAdd);
    newbutton.onclick = addItem;
    updateItems();
  }    
//Add more items into the cart list//
    
function addItem(event){
  let newItemText = document.getElementById("item-text").value;
  let newItem = document.createElement("li");
  newItem.innerHTML = newItemText;
  document.getElementById("shopping-list").appendChild(newItem);
  addRemoveButton(newItem);
}
  

  //add remove button//
  function addRemoveButton(appendElement){
    console.log(appendElement);
  
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.onclick = deleteItem;
    appendElement.appendChild(removeButton);
  }
    
    function deleteItem(event){
      this.parentNode.remove();
      updateItems();
    } 
          
  function updateCounter() {
  var newh2 = document.createElement('h2');
  var listCount = document.getElementsByTagName('ul')[0].children.length;
  newh2.innerHTML = 'You have ' + listCount + ' items in your shopping cart.';
  document.getElementsByTagName('h1')[0].after(newh2);
  newh2.setAttribute('id', 'counter');
  updateItems();
}

//updates text on page
function updateItems() {
  var counter = document.getElementById('counter');
  var listCount = document.getElementsByTagName('ul')[0].children.length;
  counter.innerHTML = 'You have ' + listCount + ' items in your shopping cart.';
}
      
    
    
 let newh2 = document.createElement('h2');
  newh2.innerHTML= "You have " + count[0].children.length + " items in your shopping cart";
  document.getElementsByTagName('h1')[0].after(newh2);