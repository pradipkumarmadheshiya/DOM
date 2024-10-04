const inp_todo=document.getElementById("inp_todo")
const priority=document.getElementById("priority")
const add_todo=document.getElementById("add_todo")
const list_box=document.getElementById("list_box")
const todoTable=document.getElementById("todoTable")
const todoTbody=document.getElementById("todoTbody")

const todoStorage=JSON.parse(localStorage.getItem("todoStorage"))  || []

if (todoStorage.length===0){
    todoTable.innerHTML=""
}

function addTodoFun(){
    const inp_val=inp_todo.value
    const priority_val=priority.value
    
    todoStorage.push({inp_val, priority_val, "status":"Pending"})
    localStorage.setItem("todoStorage", JSON.stringify(todoStorage))

    location.reload()
}
add_todo.addEventListener("click", addTodoFun)

function createTable(todoStorage){
    todoTbody.innerHTML=""

    todoStorage.forEach(items=>{
        const tRow=document.createElement("tr")
        const nameCol=document.createElement("td")
        nameCol.innerText=items.inp_val
        const priorityCol=document.createElement("td")
        priorityCol.innerText=items.priority_val
        const statusCol=document.createElement("td")
        const todoStatus=document.createElement("button")
        todoStatus.textContent=items.status
        todoStatus.addEventListener("click", ()=>{
            if (items.status==="Pending"){
                items["status"]="Completed"
                localStorage.setItem("todoStorage", JSON.stringify(todoStorage))
            }
            else{
                items["status"]="Pending"
                localStorage.setItem("todoStorage", JSON.stringify(todoStorage))
            }
            todoStatus.textContent=items.status
        })

        const deleteCol=document.createElement("td")
        const deleteTodo=document.createElement("button")
        deleteTodo.textContent="Delete"
        deleteTodo.addEventListener("click", ()=>{
            const todoStAfterDel=todoStorage.filter(item=>{
                if (item.inp_val!==items.inp_val){
                    return true
                }
                return false
            })
            console.log(todoStAfterDel);
            
            localStorage.setItem("todoStorage", JSON.stringify(todoStAfterDel))
            location.reload()
        })

        statusCol.append(todoStatus)
        deleteCol.append(deleteTodo)
        tRow.append(nameCol, priorityCol, statusCol, deleteCol)
        todoTbody.append(tRow)
    })
}
createTable(todoStorage)