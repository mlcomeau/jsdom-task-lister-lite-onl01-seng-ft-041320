const form = document.querySelector("#create-task-form");
const userInput = document.querySelector("#new-task-description");
const ulTag = document.querySelector("#list #tasks");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    addTask();
    e.preventDefault();
  });

  document.addEventListener('click',function(e){
      removeTask(e);
  });
});


function addTask() {
  let task = userInput.value;
  let liTag = document.createElement('li');
  liTag.innerHTML = `${task} <button>&#88;</button>`;
  ulTag.appendChild(liTag);
}

function removeTask(e) {
  if (e.target.tagName == "BUTTON") {
      e.target.parentElement.remove();
    }
}
