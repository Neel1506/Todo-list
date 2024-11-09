var myinput = document.getElementById("myinput");
let ls = localStorage.getItem("todo");
let todo=ls?JSON.parse(ls):[];

// Load items from local storage when the page loads
window.onload = function () {
  todo.forEach(function (item) {
    addItem(item);
  });
};


myinput.addEventListener("keypress",function(event){
  if(event.key === "Enter"){
    // Prevent page reload
    event.preventDefault();
     addItem(this.value);
     todo.push(this.value);
     localStorage.setItem('todo',JSON.stringify(todo));
     this.value = "";
  }
})

const addItem = (data) =>{
   var tablebody = document.getElementById("tablebody");
   var createditem = document.createElement("tr");

   createditem.innerHTML = `
   <td class=" ">${data}</td>
   <td><i class="fa-solid fa-trash" id="remove"></i></td>
   `
  
  //   add and remove class for a task complete

  let doneclass = createditem.firstElementChild;  
  doneclass.addEventListener('click',function(){
    doneclass.classList.toggle('done');

  })



  // code for remove task
   createditem.querySelector("i").addEventListener("click", function(e) {
    createditem.remove();
    removeData(data);
  });

    tablebody.appendChild(createditem);
}
const removeData = (data) => {
  // Remove the item from the 'todo' array
  todo = todo.filter((item) => item !== data);
  // Update local storage with the modified 'todo' array
  localStorage.setItem("todo", JSON.stringify(todo));
};