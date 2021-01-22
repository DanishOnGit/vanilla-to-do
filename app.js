let input=document.querySelector(".toDoInput")
let addBtn=document.querySelector(".toDoBtn")
let todolist=document.querySelector(".toDoList")

addBtn.addEventListener("click",addItems)
todolist.addEventListener("click",deletecheck)





function addItems(e){
    e.preventDefault();
    const toDoDiv=document.createElement("div");
    toDoDiv.classList.add("toDo");
    const newToDo=document.createElement("li");
    newToDo.classList.add("toDo-item");
    newToDo.innerText=input.value

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
    //clear input field
    input.value=""
}
function deletecheck(e){
    console.log(e.target)
}