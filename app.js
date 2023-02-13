// Declare the variables 

const addTask = document.querySelector('#task');
const submitTask = document.querySelector('#submit-task');
const filterTasks = document.querySelector('#filter-tasks');
const clearTasks = document.querySelector('.clear-tasks'); 
// const taskList = document.querySelector('.task-collection')
const taskContainer = document.querySelector('.todo-container');


loadEvenListeners()

function loadEvenListeners(){
    submitTask.addEventListener('click', submitThisTask);
    // taskList.addEventListener('click', deleteItem);
    filterTasks.addEventListener('keyup', filterTodo);
    clearTasks.addEventListener('click', clearAllTasks);
}; 

function submitThisTask(e){

    if(addTask.value === ''){
        alert('Please add task!')
    } else {

       

        // Create to-do-task div
        // const todoDiv = document.createElement('div');
        // Add classList to div
        // todoDiv.classList.add('todo');

        // create li element
        const li = document.createElement('li');
        li.classList.add('task-collection');

         // CHECKMARK button
         const completedButton = document.createElement('button');
         completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';

         completedButton.classList.add('complete-btn');

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

        

        // Append li to todoDiv
        // todoDiv.appendChild(li);

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


        taskContainer.appendChild(li);

        addTask.value = '';
        
    //create ui element
    console.log(li)}
    e.preventDefault();
}; 

addTask.value = '';


function deleteItem(e){
    if(e.target.parentElement.classList.contains('delete-btn')){
        e.target.parentElement.parentElement.remove();
    }
    console.log(e.target);
};

function filterTodo(e){

    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('.task-collection').forEach(function(task){
        const item = task.textContent;
        
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
};

function clearAllTasks(e){
    if(e.target.classList.contains('clear-tasks')){
        taskList.innerHTML = ''
    }
    e.preventDefault();
}

