let textInput = document.querySelector('.todo-input');
let ul = document.querySelector('.lists');
let sst = [ // single source of truth which is always updated and displayed
  {
    "text": "Learn React", // adds some default text to the list
    "isDone": true
  },
  {
    "text": "Learn UI",
    "isDone": true
  },
  {
    "text": "UI/UX",
    "isDone": false
  }
];

function handleClick(){
  sst.push({text: textInput.value, isDone: false}); // adds the input text and a default value of false always 
  displayTodo(sst) // displays the todo array sst
}
function displayTodo(todos = []) { 
  ul.innerHTML = ""; // clears the entire contents of the ul every time the function is called
  todos.forEach((todo,i) => {         // goes into the array, performs all of the actions below. 'todos' is just an empty array in this case.
    const li = document.createElement('li'); // create li element
    li.setAttribute('data-id', i); // gives each of the parent elements a dynamic ID
    li.classList.add("list"); // add a class to the li element
    const checkbox = document.createElement('input'); // create checkbox input
    checkbox.type = "checkbox"; //set checkbox type to "checkbox"
    checkbox.checked = todo.isDone; // checks the 'isDone' value and updates the list
    const del = document.createElement('span'); //create the span for 'X'
    del.innerText = 'X'; // create the innerText for the span
    const name = document.createElement('p'); // create a p element
    name.textContent = todo.text; // add the input content to the p element
    li.appendChild(checkbox); // append checkbox to li
    li.appendChild(name); //append paragraph (input) to li
    li.appendChild(del); // append the 'X' to the li
    ul.appendChild(li); // append the entire li to the ul
    textInput.value = ""; // clear the input field and reset placeholder value
  });
  document.querySelectorAll('input[type="checkbox"]').forEach(el => el.addEventListener('click', toggleTodo)); // addEL for every checkbox, call function
  document.querySelectorAll('span').forEach(el => el.addEventListener('click', handleDelete)); //addEL for every span, call another function
}
function handleDelete(e) { // delete function
  let index = e.target.parentElement.dataset.id; // define 'index', which will get object 'e', then get the dynamic ID assigned to it
  sst.splice(index, 1); // 'splice' will go into the the array 'sst', find this value, and delete 1 element, which is that element itself
  displayTodo(sst); // display the list again
}

function toggleTodo(event) { // event triggered every time the checkbox is checked. This matters for the handleFilter function
  sst[event.target.parentElement.dataset.id].isDone = true; // when triggered, the 'isDone' value is changed to true
  displayTodo(sst); // the updated sst (with the new box checked) is displayed again
}

displayTodo(sst); // This will display the list with an initial value

function handleFilter(e) { // function to handle the 3 scenarios
  if (e.target.innerText === 'All') { // if the text clicked on is 'All'
    displayTodo(sst); // display the entire current sst
  } else if(e.target.innerText === 'Done') { // if the text clicked on is 'Done'
    let filtered = sst.filter(todo => todo.isDone === true); // display only the sst objects with 'isDone' of true (toogleToDo comes in here)
    displayTodo(filtered); // displays only the filtered array
  } else {
    let filtered = sst.filter(todo => todo.isDone !== true); // same as above with the value of false
    displayTodo(filtered); // displays the array with values of 'isDone' !== true
  }
}

document.querySelector('button').addEventListener('click', handleClick); // when clicked, an item is added
document.querySelectorAll('.filter ul li').forEach(el => el.addEventListener('click', handleFilter)); // for the 3 li items, passes to handleFilter
// document.addEventListener('click', (e) => console.log(e.target))
