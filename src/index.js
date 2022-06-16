



document.addEventListener("DOMContentLoaded", () => {
  // your code here
let form= document.querySelector("form").addEventListener("submit", (e)=>{
  e.preventDefault()
  //ToDo(e.target.new-task-description)
  ToDo(document.querySelector("#new-task-description").value)

  
  e.target.reset()
})
function ToDo(todo) {
  
  let li=document.createElement("li")
  let btn=document.createElement("button")
  btn.addEventListener("click",deleteitems)
  btn.textContent = "#list"
  li.textContent=`${todo}`
  li.appendChild(btn)
  
  document.querySelector("#list").appendChild(li)
}
function deleteitems(e){
  e.target.parentNode.remove()
}

});
