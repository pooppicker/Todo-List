// 初始變數
let list = document.querySelector('#my-todo')
let addBtn = document.querySelector('#addBtn')
let input = document.querySelector('#newTodo')
let done = document.querySelector('#my-done')


// 資料
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}


// 函式
function addItem (text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}

// Create
addBtn.addEventListener("click", function () {
  let inputValue = input.value
  if(inputValue.match(/^[ \s]/)) {
    input.value = ''
    alert ('contains white space')   //avoid white space
  } else if (inputValue.length > 0) {
    addItem(inputValue)
    input.value = ''
  }
})

//press enter to submit

input.addEventListener('keypress', function(event) {
  let inputValue = input.value
  if(inputValue.match(/^[ \s]/) && event.keyCode == 13) {
    input.value = ''
    alert ('contains white space')   //white space
  } else if (inputValue.length > 0 && event.keyCode == 13) {
    addItem(inputValue)
    input.value = ''
  }
})


// Delete and check
list.addEventListener('click', function (event) {
  let target = event.target
  if (target.classList.contains('delete')) {
    let parentElement = target.parentElement
    parentElement.remove()
  } else if (target.tagName === 'LABEL') {
    let parentElement = target.parentElement
    parentElement.remove()
    target.classList.toggle('checked')
    done.appendChild(parentElement)
  }
})

//做完的事項，以及加回去待辦事項
done.addEventListener('click', function (event) {
  let target = event.target
  if (target.classList.contains('delete')) {
    let parentElement = target.parentElement
    parentElement.remove()
  } else if (target.tagName === 'LABEL') {
    let parentElement = target.parentElement
    target.classList.toggle('checked')
    list.appendChild(parentElement)
  }
})