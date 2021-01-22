let input=document.querySelector(".toDoInput")
let addBtn=document.querySelector(".toDoBtn")
let todolist=document.querySelector(".toDoList")
let filteroption=document.querySelector(".filter-todo")

//EVENT LISTENERS
document.addEventListener("DOMContentLoaded",getToDos);
addBtn.addEventListener("click",addItems);
todolist.addEventListener("click",deletecheck);
filteroption.addEventListener("click",filtertodo);





//FUNCTIONS

function addItems(e){
    e.preventDefault();
    const toDoDiv=document.createElement("div");
    toDoDiv.classList.add("toDo");

    const newToDo=document.createElement("li");
    newToDo.classList.add("toDo-item");
    newToDo.innerText=input.value

    //append list item to div
    toDoDiv.appendChild(newToDo);
    // ADD TODO TO LOCAL STORAGE
    saveLocalTodos(input.value)

    const completedBtn=document.createElement("button");
    completedBtn.innerHTML='<i class="fas fa-check"></i>';
    completedBtn.classList.add("completed-Btn");
    toDoDiv.appendChild(completedBtn)

    const deleteBtn=document.createElement("button");
    deleteBtn.innerHTML='<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("delete-Btn");
    toDoDiv.appendChild(deleteBtn);

    todolist.appendChild(toDoDiv)
    //clear input field
    input.value=""
}
function deletecheck(e){
    const item=e.target
   
    if(item.classList[0]==="delete-Btn"){
    const toDo=item.parentNode;

    toDo.classList.add("fall")
    //REMOVE LOCAL STORAGE TODOS
    removeLocalStorageToDos(todo);
    toDo.addEventListener("transitionend", ()=> toDo.remove())
   
    }

    if(item.classList[0]==="completed-Btn"){

        item.parentNode.classList.toggle("completed");
    }
}

function filtertodo(e){
    const todos=todolist.childNodes;
    todos.forEach(todo=>{
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;
                case"completed":
                    todo.classList.contains('completed')? todo.style.display="flex":todo.style.display="none";
                    break;
                    case "notcompleted":
                        !todo.classList.contains("completed") ? todo.style.display="flex":todo.style.display="none";
                        break;

        }
    })
}
//  SAVE TO LOCAL STORAGE
    function saveLocalTodos(todo){
        //check if todo already exists in storage
        let todos;
        if(localStorage.getItem("todos")===null){
            todos=[]
        }else{
            todos=JSON.parse(localStorage.getItem("todos"))
        }
        todos.push(todo);
        //SAVING THE NEW ITEM
        localStorage.setItem("todos", JSON.stringify(todos));

    }

    function getToDos(){
        //check if todo already exists in storage
        let todos;
        if(localStorage.getItem("todos")===null){
            todos=[]
        }else{
            todos=JSON.parse(localStorage.getItem("todos"))
        }
        todos.forEach(function(todo){
            const toDoDiv=document.createElement("div");
    toDoDiv.classList.add("toDo");

    const newToDo=document.createElement("li");
    newToDo.classList.add("toDo-item");
    newToDo.innerText=todo

    //append list item to div
    toDoDiv.appendChild(newToDo);
    

    const completedBtn=document.createElement("button");
    completedBtn.innerHTML='<i class="fas fa-check"></i>';
    completedBtn.classList.add("completed-Btn");
    toDoDiv.appendChild(completedBtn)

    const deleteBtn=document.createElement("button");
    deleteBtn.innerHTML='<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("delete-Btn");
    toDoDiv.appendChild(deleteBtn);

    todolist.appendChild(toDoDiv)

        })
    }

    function removeLocalStorageToDos(todo){
        let todos;
        if(localStorage.getItem("todos")===null){
            todos=[]
        }else{
            todos=JSON.parse(localStorage.getItem("todos"))
        }
        //
        const todoIndex=todo.children[0].innerText;
        todos.splice(todos.indexOf(todoIndex),1);
        localStorage.setItem("todos",JSON.stringify(todos));

    }