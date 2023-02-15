// Declare the variables 

const addTask = document.querySelector('#task');
const submitTask = document.querySelector('#submit-task');
const filterTasks = document.querySelector('#filter-tasks');
const clearTasks = document.querySelector('.clear-tasks'); 
const taskList = document.querySelector('.task-collection')
const taskContainer = document.querySelector('.todo-container');


loadEvenListeners()

function loadEvenListeners(){
    submitTask.addEventListener('click', submitThisTask);
    // taskList.addEventListener('click', deleteItem);
    taskContainer.addEventListener('click', deleteItem);
    filterTasks.addEventListener('keyup', filterTodo);
    clearTasks.addEventListener('click', clearAllTasks);
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
}; 





function submitThisTask(e){
    // const taskItself = document.querySelector('.task-collection');
    if(addTask.value === ''){
        alert('Please add task!')
    } else if (taskList.textContent.includes(addTask.value)){
        alert('Already added task')
    }
    
    else {

       

        // Create to-do-task div
        // const todoDiv = document.createElement('div');
        // Add classList to div
        // todoDiv.classList.add('todo');

        // create li element
        const li = document.createElement('li');
        li.className = 'to-do-task';

        // li.classList.add('to-do-task');

         // CHECKMARK button
         const completedButton = document.createElement('button');
         completedButton.className = 'complete-btn';
         completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';

         

         li.appendChild(completedButton);

        

        li.appendChild(document.createTextNode(addTask.value));


        // li.style.listStyle = 'none';
        // li.style.backgroundColor = '#ffffff'
        // li.style.marginTop = '10px';
        // li.style.paddingLeft = '15px';
        // li.style.paddingTop = '10px';

         // CHECKMARK button
         const deleteButton = document.createElement('button');
         deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

         deleteButton.classList.add('delete-btn');

         li.appendChild(deleteButton);

        

        // Append li to task ul
         taskList.appendChild(li);

// --------------------------------------

        // // create checkmark button element
        // const checkMarkempty = document.createElement('button');
        // // Add checkMark classname
        // checkMarkempty.classList.add('secondary-element') ;
        // // Add checkMark html 
        // checkMarkempty.innerHTML = '<button type="button"  style="height:26px; width:26px; border-radius:100%;border-style:none; box-shadow:inset 0 0 6px 1px #c4c6c7;"></button>';
        // // Append check mark in li
        // li.appendChild(checkMarkempty);
        // // give it a class 
        // li.classList.add('task-collection');

        // // Create text node and append to ul 
        // li.appendChild(document.createTextNode(addTask.value));

        // li.style.display = 'flex';
        // li.style.justifyContent = 'space-round';

        // taskList.style.marginBottom = '20px';
        // checkMarkempty.style.borderRadius = '100%';
        // checkMarkempty.style.borderStyle = 'none';
        // checkMarkempty.style.height = '26px';
        // // checkMarkempty.style.boxShadow = 'inset 0px 5px 55px 55px #f8a100';

// -------------------------


        taskContainer.appendChild(taskList);

          // Add to Local storage
    addTasksToLs(addTask.value);

        addTask.value = '';
        
    //create ui element
    console.log(li)}
    e.preventDefault();

  
    
}; 

// Show tasks after refresh

function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }; 

    // const taskItself = document.querySelector('.task-collection');


    tasks.forEach(function(task){

    // create li element
    const li = document.createElement('li');
    li.className = 'to-do-task';

    // li.classList.add('to-do-task');

     // CHECKMARK button
     const completedButton = document.createElement('button');
     completedButton.className = 'complete-btn';
     completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';

     

     li.appendChild(completedButton);

    

    li.appendChild(document.createTextNode(task));


    // li.style.listStyle = 'none';
    // li.style.backgroundColor = '#ffffff'
    // li.style.marginTop = '10px';
    // li.style.paddingLeft = '15px';
    // li.style.paddingTop = '10px';

     // CHECKMARK button
     const deleteButton = document.createElement('button');
     deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

     deleteButton.classList.add('delete-btn');

     li.appendChild(deleteButton);

    

    // Append li to task ul
    taskList.appendChild(li);

    // taskContainer.appendChild(taskList);
    });


}



addTask.value = '';

// Add tasks to LS 

function addTasksToLs(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

}


function deleteItem(e){
    if(e.target.parentElement.classList.contains('delete-btn')){
        e.target.parentElement.parentElement.remove();
    }
    console.log(e.target);

    // Delete from LS

    removeFromLocalStorage(e.target.parentElement.parentElement);
};

// Delete from LS function 

function removeFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    };

    tasks.forEach(function(task, index){
        if (taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    }); 

    localStorage.setItem('tasks', JSON.stringify(tasks));


};

function filterTodo(e){

    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.to-do-task').forEach(function(task){
        const item = task.childNodes[1].textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
    console.log(text);
};

function clearAllTasks(e){
    if(e.target.classList.contains('clear-tasks')){
        taskList.innerHTML = ''
    }
    e.preventDefault();

    clearAllTasksFromLS();
};

function clearAllTasksFromLS(){
    localStorage.clear();
}

