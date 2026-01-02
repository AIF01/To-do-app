let tasks = JSON.parse(localStorage.getItem('myTasks'));

const todoInput = document.getElementById('input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('to-do list');
const clearAllBtn = document.getElementById('clear-all');


function renderTasks(){
    todoList.innerHTML = "";
    tasks.forEach((task, index)=>{
        const li = document.createElement('li');
        li.innerHTML = `
        <span>${task}</span>
        <div class ='actions'>
            <button onclick='editTask(${index})'>Edit</button>
            <button onclick='deleteTask(${index})' class = 'delete'>Delete</button>
        </div>
        `;
        todoList.appendChild(li);
    });
    saveToLocalStorage();
}

addBtn.addEventListener('click', ()=>{
    const taskValue = todoInput.value.trim();
    if(taskValue){
        tasks.push(taskValue);
        todoInput.value='';
        renderTasks();
    }
});

function editTask(index) {
    const newVal = prompt('Edit your task:', tasks[index]);
    if(newVal !== null && newVal.trim() !==''){
        tasks[index] = newVal.trim();
        renderTasks();
    }
}


function deleteTask(index){
    tasks.splice(index, 1);
    renderTasks();
}


clearAllBtn.addEventListener('click', ()=>{
    if(confirm('Are you sure you want to delete everything?')){
        tasks = [];
        renderTasks();
    }
});

function saveToLocalStorage(){
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}

renderTasks();