const task =document.querySelector('#task')
const todoList =document.querySelector('.Todolist')
const btn_add=document.querySelector('.btn_add')
const btn_del=document.querySelector('.btn_del')



todoList.addEventListener('click',(e)=>{
    const button=e.target
    if (button.classList.contains('del_task')){
        button.parentNode.parentNode.remove();
    }
    if (button.classList.contains('val_task')){
        button.parentNode.parentNode.className = 'valide'
        button.remove();
    }
})
btn_add.addEventListener('click',(e)=>{
    if (task.value==''){
        window.alert(`vous n'avez pas rempli le champs obligatoires`)
    }
    else{
    e.preventDefault();
    const todo =document.createElement(`li`);

    const btn_task=document.createElement('div');
    const todoTask = document.createElement('div');   
    todoTask.textContent =task.value;
    todo.className = 'todo';

    btn_task.className='btn_task';


    const del_task=document.createElement('div');
    del_task.className='del_task';
    del_task.textContent='X';

    const val_task=document.createElement('div');
    val_task.className='val_task';
    val_task.textContent='V';
    
    todoList.appendChild(todo);
    todo.appendChild(todoTask);
    todo.appendChild(btn_task);
    btn_task.appendChild(val_task);
    btn_task.appendChild(del_task);
    task.value='';
    }  
});


btn_del.addEventListener('click',(e)=>{
    todoList.innerHTML='';
})
