

document.addEventListener("DOMContentLoaded", () => {
  // your code here
document.querySelector("form").addEventListener("submit", (e)=>{
  e.preventDefault()
  ToDo(e.target.new_task);
  format.reset()
})
function ToDo(todo) {
  
  let li=document.createElement("li")
  let btn=document.createElement("button")
  btn.addEventListener("click",deleteitems)
  btn.textContent = "x"
  li.textContent=`${todo}`
  li.appendChild(btn)
  console.log(li)
  document.querySelector("#list").appendChild('li')
}
function handledelete(e){
  e.target.parentNode.remove()
}

});
