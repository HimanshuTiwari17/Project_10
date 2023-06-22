document.addEventListener("DOMContentLoaded", function () {
  // var tasksEl = document.querySelector(".tasks");
  var searchEl = document.querySelector(".search");
  var checkIconEl;
  var deleteIconEl;
  var listEl;
  // list1 = localStorage.getItem("list");
  // if (list1) {
  //   list1.forEach((list1El) => {
  //     toDoList(list1El.task.innerText);
  //   });
  // }

  // let list = JSON.parse(localStorage.getItem("list"));
  // if (list) {
  //   list.forEach((task) => {
  //     toDo(task.name);
  //   });
  // }

  //   let list = [];
  //   const storedValue = localStorage.getItem("list");
  //   if (typeof storedValue === "string") {
  //     try {
  //       list = JSON.parse(storedValue);
  //       if (!Array.isArray(list)) {
  //         list = [];
  //       }
  //     } catch (error) {
  //       console.error("Error parsing stored value as JSON:", error);
  //       list = [];
  //     }
  //   }

  //   if (list) {
  //     list.forEach((task) => {
  //       toDoList(task);
  //     });
  //   }
  (function () {
    var tasksEl = document.querySelector(".tasks");
    // var searchEl = document.querySelector(".search");
    function toDo(task) {
      const taskEl = document.createElement("div");
      taskEl.innerHTML = `<div class="list">
      <div class="task">${task}</div>
      <div class="emoji">
        <div class="checkIcon">
          <i class="fas fa-check-square"></i>
        </div>
        <div class="deleteIcon">
          <i class="fas fa-trash"></i>
        </div>
      </div>
    </div>`;
      tasksEl.appendChild(taskEl);
    }
    searchEl.addEventListener("keyup", (e) => {
      if (e.target.value && e.key === "Enter") {
        toDo(e.target.value);
      }
    });
    // listEl = document.querySelector(".list");
    checkIconEl = document.querySelectorAll(".checkIcon");
    deleteIconEl = document.querySelectorAll(".deleteIcon");
  })();

  checkIconEl.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("checked");
    });
  });

  // var checkIconEl = document.querySelectorAll(".checkIcon");
  // var deleteIconEl = document.querySelector(".deleteIcon");

  // checkIconEl.forEach((ele) => {
  //   ele.addEventListener("click", () => {
  //     taskEl.classList.toggle("checked");
  //     updateLocalStorage();
  //   });
  // });
  deleteIconEl.forEach((element) => {
    element.addEventListenerAll("click", () => {
      element.remove();
    });
  });

  //   function toDo(task) {
  //     const taskEl = document.createElement("div");
  //     taskEl.innerHTML = `<div class="list">
  //       <div class="task">${task.name}</div>
  //       <div class="emoji">
  //         <div class="checkIcon">
  //           <i class="fas fa-check-square"></i>
  //         </div>
  //         <div class="deleteIcon">
  //           <i class="fas fa-trash"></i>
  //         </div>
  //       </div>
  //     </div>`;
  //     if (task && task.checked) {
  //       liEl.classList.add("checked");
  //     }
  //     tasksEl.appendChild(taskEl);

  //     // var checkIconEl = document.querySelector(".checkIcon");
  //     // var deleteIconEl = document.querySelector(".deleteIcon");
  //     // checkIconEl.addEventListener("click", () => {
  //     //   taskEl.classList.toggle("checked");
  //     // });

  //     // deleteIconEl.addEventListener("click", () => {
  //     //   taskEl.remove();
  //     // });
  //   }

  // function updateLocalStorage() {
  //   const liEls = document.querySelectorAll(".list");
  //   const bodyEl = document.querySelector(".tasks");
  //   list = [];
  //   liEls.forEach((liEl) => {
  //     const taskEl = liEl.querySelector(".task");

  //     list.push({
  //       name: taskEl.innerText,
  //       checked: liEl.classList.contains("checked"),
  //     });
  //   });
  //   console.log(list);
  //   localStorage.setItem("list", JSON.stringify(list));
  // }
});
