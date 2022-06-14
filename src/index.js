

document.addEventListener("DOMContentLoaded", () => {
  // your code here
document.querySelector("form").addEventListener("submit", (e)=>{
  e.preventDefault()
  buildTask(e.target.new_task);
  format.reset()
})
function buildTask(task) {
  
  let p=document.createElement("p")
  let btn=document.createElement("button")
  btn.addEventListener("click",handledelete)
  btn.textContent = "x"
  p.textContent=`${task}`
  p.appendChild(btn)
  console.log(p)
  document.querySelector("task").appendChild('p')
}
function handledelete(e){
  e.target.parentNode.remove()
}

});
