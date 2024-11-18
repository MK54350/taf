const maList = [];
let monObjet = new Object();
const taskInput = document.getElementById("task-input");
const taskList  = document.getElementById("task-list");
const tacheOk   = document.getElementById("tacheOk");

function addTask() {

    const taskText  = taskInput.value;


    if (taskText.length > 0) {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        const chek = document.createElement("input");
        chek.setAttribute("type", "checkbox",);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "supprimer";
        deleteButton.onclick = () => {
            taskList.removeChild(listItem);
        };
        taskList.appendChild(listItem);
        listItem.appendChild(chek)
        listItem.appendChild(deleteButton);

        taskInput.value = "";

    }
}
function classer() {
    if (chek === true) {
        
    }
}