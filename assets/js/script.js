const task =document.querySelector('#task')
const todoList = document.querySelector('.Todolist')
const btn_add=document.querySelector('.btn_add')



todoList.addEventListener('click',del)
const todo=document.querySelector('.todo')







btn_add.addEventListener('click',(e)=>{
    if (task.value==''){
        window.alert(`vous n'avez pas rempli le champs obligatoires`)
    }
    else{
    e.preventDefault();
    const todo =document.createElement(`div`);

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

    listContainer.parentNode.insertBefore(todo,todoList.nextSibling);
    todo.appendChild(todoTask);
    todo.appendChild(btn_task);
    btn_task.appendChild(val_task);
    btn_task.appendChild(del_task);
    task.value='';
    }  
});
function del(){
    console.log('yop')
    if (item.classList[0]=== 'del_task'){
        console.log('yo')
    }
    



}





