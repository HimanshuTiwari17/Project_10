const searchEl = document.querySelector(".search");

let list = JSON.parse(localStorage.getItem("list")); //list naam se maine array of todo items
//with their names and checked status store kar rakhe hain local storage mein list naam ek arrray mein,
//ab starting mein ussi array se hum todo list ke contents uthate hain unke naam, checked status wagera
//unse todolist bana lete hain, yodolist function uss array e elemnts pe call karke, iss se hum
//local storage ke help se apna todolist ke contents save karke, unhein har baar load karne par bhi
//hu, safely paa paa rhe hain

//Humne jo bhi content paya input field se, uske andar ke text contents, aur woh checked hai ki nhi
//iss status ko hum updatestorage bolke function mein ek array mei store kar le rhe hain, inn info ka json
//file banake usse stringify karke, localstorage mein store krdena, fir har reload pe local storage se parse
// karke data ko array banake ussse tdolist mein bhejke add kardete hain with each tasks checked status
if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}
function toDoList(task) {
  var tasksEl = document.querySelector(".tasks");
  const taskEl = document.createElement("div");
  taskEl.innerHTML = `<div class="list">
        <div class="task">${task.name}</div>
        <div class="emoji">
          <div class="checkIcon">
            <i class="fas fa-check-square"></i>
          </div>
          <div class="deleteIcon">
            <i class="fas fa-trash"></i>
          </div>
        </div>
      </div>`;
  if (task && task.checked) {
    taskEl.classList.add("checked");
  }
  tasksEl.appendChild(taskEl);
  updateLocalStorage();
  searchEl.value = "";

  checkBtnEl = taskEl.querySelector(".checkIcon");
  trashBtnEl = taskEl.querySelector(".deleteIcon");

  checkBtnEl.addEventListener("click", () => {
    //   taskEl.checkIcon.classList.toggle("checked");
    taskEl.classList.toggle("checked");
    updateLocalStorage();
  });

  trashBtnEl.addEventListener("click", () => {
    taskEl.remove();
    updateLocalStorage();
  });
}
searchEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    inp = {
      name: e.target.value,
      checked: false,
    };
    toDoList(inp);
  }
});
function updateLocalStorage() {
  const liEls = document.querySelectorAll(".list");
  // const bodyEl = document.querySelector("div.con");
  list = [];
  liEls.forEach((liEl) => {
    const taskEl = liEl.querySelector(".task");

    list.push({
      name: taskEl.innerText,
      checked: liEl.parentNode.classList.contains("checked"),
    });
  });
  localStorage.setItem("list", JSON.stringify(list));
}
