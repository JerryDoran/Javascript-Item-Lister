// EXAMINE THE DOCUMENT OBJECT

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);

//SELECTORS TO QUERY THE DOM.
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

//GET ELEMENTS BY CLASS NAME.
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4';
// }

//CONVERT ITEMS COLLECTION TO AN ARRAY TO PERFORM A FOREACH LOOP ON IT.
// const itemsArray = Array.from(items);
//
// itemsArray.forEach(function(item) {
//   item.style.backgroundColor = 'blue';
// });

//GET ELEMENTS BY TAG NAME.
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4';
// }

//CONVERT ITEMS COLLECTION TO AN ARRAY TO PERFORM A FOREACH LOOP ON IT.
// const liArray = Array.from(li);
//
// liArray.forEach(function(li) {
//   li.style.backgroundColor = '#000';
//   li.style.color = 'white';
// })

//QUERY SELECTOR.
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';
//
// var input = document.querySelector('input');
// input.value = 'hello world';
//
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";
//
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
//
// // var lastItem = document.querySelector('.last-item');
// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = 'blue';
//
// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = 'purple';

// QUERY SELECTOR ALL
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';
//
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
//
// odd.forEach(function(li) {
//   li.style.backgroundColor = '#f4f4f4';
// });
//
// even.forEach(function(li) {
//   li.style.backgroundColor = '#ccc';
// });

// TRAVERSING THE DOM
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';
//
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';
//
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// console.log(itemList.nextElementSibling);
//
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';


//CREATE HTML ELEMENTS
// var newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = 'hello1';
// newDiv.setAttribute('title', 'Hello Div');
//
// var newDivText = document.createTextNode('Hello World');
// newDiv.appendChild(newDivText);
//
//Insert into DOM.
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);
// console.log(newDiv);


//CREATING EVENTS.
// var button = document.querySelector('#button').addEventListener('click', buttonClick);

// function buttonClick(e) {
  // console.log('Button clicked');
  // document.getElementById('header-title').textContent = "Changed";
  // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);
  // var output = document.getElementById('output');
  // output.innerHTML = '<h3>'+ e.target.id + '</h3>';

  // console.log(e.type);

  // From the browser window itself
  // console.log(e.clientX);
  // console.log(e.clientY);

  // From the actual element that was clicked
  // console.log(e.offsetX);
  // console.log(e.offsetY);

  // console.log(e.altKey);
  // console.log(e.ctrlKey);
  // console.log(e.shiftKey);
// }

// var button = document.querySelector('#button');
// var box = document.getElementById('box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
// button.addEventListener('mouseover', runEvent);

// These two events will fire if you hover the mouse over the parent element only
// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)

// These two events will fire if you hover the mouse over the parent element or
// over any other elements in the parent container
// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)

// box.addEventListener('mousemove', runEvent)
// box.addEventListener('mouseout', runEvent)

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);
//
// form.addEventListener('submit', runEvent);
//
// function runEvent(e) {
//   e.preventDefault();
//   console.log('EVENT TYPE: ' + e.type);

  // console.log(e.target.value);
  // document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>'
  // output.innerHTML = '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY + '</h3>'

  // box.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)";
  // document.body.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)";
// }

// FINAL PROJECT CODE.
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem(e) {
  // Prevent the normal submission of the form from happening
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  //Create new li element.
  var li = document.createElement('li');
  li.className = 'list-group-item';

  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create delete button element.
  var deleteButton = document.createElement('button');

  // Add classes to delete button.
  deleteButton.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node to delete button.
  deleteButton.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteButton);

  // Append li to list.
  itemList.appendChild(li);
}

// Remove item from list.
function removeItem(e) {
  if(e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      // we are clicking on the delete button and now we want the parent element
      // which is the li
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter items
function filterItems(e) {
  // convert text typed in to lowercase
  var text = e.target.value.toLowerCase();

  // Get lis from item list.
  var items = itemList.getElementsByTagName('li');

  // Convert items collection to an array.
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
