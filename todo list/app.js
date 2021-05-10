const newListInput = document.getElementById("new-list-input");
const newTodoItemInput = document.getElementById("new-todoitem-input");
let selectedTodoList = undefined; //{id: num, name: str, todosArr: Array[{name: str, status: boolean}]} 


// function that loads data from localStorage on page loading
const loadLocalstorageData = () => {
  let todoLists = JSON.parse(localStorage.getItem('todoLists'));
  if (todoLists) {
    todoLists.forEach(element => {
      // renders every btn in dropdown
      renderTodoListBtn(element);
    });
    if (todoLists && todoLists.length) {
      //renders first todoList if it exists 
      renderSelectedList(todoLists[0].id);
    }
  }
}
//create new todo list category
const createNewListObj = function () {
  let newId = 1;
  if (localStorage['lastId']) {
    newId = parseInt(localStorage['lastId']) + 1;
    localStorage.setItem('lastId', newId);
  } else {
    localStorage.setItem('lastId', '1');
  }

  //create new todolist obj 
  const newObj = {
    id: newId,
    name: newListInput.value,
    todosArr: []
  }

  if (!localStorage['todoLists']) {
    localStorage.setItem('todoLists', JSON.stringify([]));
  }
  const newTodoLists = JSON.parse(localStorage['todoLists']);
  newTodoLists.push(newObj);
  localStorage.setItem('todoLists', JSON.stringify(newTodoLists));
  selectedTodoList = newObj;
  renderTodoListBtn(newObj);
  renderSelectedList(newObj.id);
}
//create new item in a todo list
const addNewTodoItem = () => {
  const newTodoItemObj = {
    name: newTodoItemInput.value,
    status: false
  }

  // pushes new todo item into current selected list
  selectedTodoList.todosArr.push(newTodoItemObj);
  // load current lists from local storage  
  const todoLists = JSON.parse(localStorage['todoLists']);
  // search for current todo list id in local storage   
  todoLists.forEach((element, i) => {
    if (element.id === selectedTodoList.id) {
      // update localstorage data
      todoLists[i].todosArr = selectedTodoList.todosArr;
      localStorage.setItem('todoLists', JSON.stringify(todoLists));
    }
  });

  renderSelectedList(selectedTodoList.id);
}

//function for updating
const renderTodoListBtn = function (todoList) {
  const todoListsWrapper = document.getElementById("todoLists-dropdown-menu");
  const newButtonId = 'list-id-' + todoList.id;
  const dropdownItem = document.createElement("li");
  dropdownItem.setAttribute("class", "dropdown-item");
  dropdownItem.setAttribute("id", newButtonId);
  dropdownItem.innerHTML = todoList.name;
  todoListsWrapper.appendChild(dropdownItem);
  // renders selected list by click with element id 
  dropdownItem.addEventListener("click", () => renderSelectedList(todoList.id));
  // todoListsWrapper.appendChild(div);
}

// function for updating
const renderSelectedList = function (id) {
  const todoLists = JSON.parse(localStorage['todoLists']);
  todoLists.forEach((element) => {
    if (element.id === id) {
      selectedTodoList = element;
    }
  })
  const todoListToRender = selectedTodoList;
  if (document.getElementById("selectedTodoListWrapper")) {
    selectedTodoListWrapper = document.getElementById("selectedTodoListWrapper");
    selectedTodoListWrapper.remove();
  }

  const todoListDiv = document.getElementById("todo-list");
  const div = document.createElement("div")
  div.setAttribute("id", "selectedTodoListWrapper");
  const h4 = document.createElement("h4");
  h4.innerHTML = todoListToRender.name;
  div.appendChild(h4);
  const ul = document.createElement("ul");
  ul.setAttribute("id", "todos-wrapper");

  // if todo list has todos render it here
  if (todoListToRender.todosArr.length) {
    for (i = 0; i < todoListToRender.todosArr.length; i++) {
      const li = document.createElement("li");
      li.innerHTML = todoListToRender.todosArr[i].name;
      li.classList.add('todoItem');
      li.classList.add('d-flex');
      li.classList.add('justify-content-between');
      if (todoListToRender.todosArr[i].status) {
        li.classList.add('checked-item');
      }
      li.addEventListener('click', () => checkTodo(li));

      // add delete button;
      const deleteButton = document.createElement('span');
      deleteButton.classList.add('bi');
      deleteButton.classList.add('bi-trash');
      deleteButton.addEventListener('click', () => deleteTodoItem(li))
      li.appendChild(deleteButton);
      ul.appendChild(li);
    }
  }

  div.appendChild(ul);
  todoListDiv.appendChild(div);
}
// update todo item status and add line-through style
const checkTodo = (todoElement) => {
  const todosWrapper = document.getElementById('todos-wrapper');
  // get current  todo item index from parents element (ul)
  const index = [...todosWrapper.children].indexOf(todoElement);
  if (index >= 0) {
    selectedTodoList.todosArr[index].status = !selectedTodoList.todosArr[index].status;
    if (selectedTodoList.todosArr[index].status) {
      todoElement.classList.add('checked-item');
    } else {
      todoElement.classList.remove('checked-item');
    }
    const todoLists = JSON.parse(localStorage['todoLists']);
    todoLists.forEach((el, i) => {
      if (el.id === selectedTodoList.id) {
        console.log(el);
        todoLists[i] = selectedTodoList;
        localStorage.setItem('todoLists', JSON.stringify(todoLists));
      }
    })
  }
}


const deleteTodoItem = (todoElement) => {
  const todosWrapper = document.getElementById('todos-wrapper');
  const index = [...todosWrapper.children].indexOf(todoElement);

  selectedTodoList.todosArr.splice(index, 1);
  todoElement.remove();
  const todoLists = JSON.parse(localStorage['todoLists']);
  todoLists.forEach((el, i) => {
    if (el.id === selectedTodoList.id) {
      todoLists[i] = selectedTodoList;
      localStorage.setItem('todoLists', JSON.stringify(todoLists));
    }
  })
}


loadLocalstorageData();