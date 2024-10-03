const cartItem_box=document.getElementById("cartItem_box")

const cartStorage=JSON.parse(localStorage.getItem("cartStorage")) || []

if (cartStorage.length===0){
    cartItem_box.innerHTML=`<p>Your Cart is Empty!</p>`
}
else{
    cartStorage.forEach(user=>{
        const box=document.createElement("div")
        box.className="box"
        const name=document.createElement("p")
        name.textContent=user.name
        name.className="name"
        const email=document.createElement("p")
        email.textContent=user.email
        email.className="email"
    
        const deleteBtn=document.createElement("button")
        deleteBtn.textContent="Delete"
        deleteBtn.className="deleteBtn"
        
        deleteBtn.addEventListener("click", ()=>{
            
            const cartAfterDeleteUser=cartStorage.filter(item=>{
                if (item.id!==user.id){
                    return true
                }
            })
            localStorage.setItem("cartStorage",JSON.stringify(cartAfterDeleteUser))
            location.reload()
        })
    
        box.append(name,email,deleteBtn)
        cartItem_box.append(box)
    })
}