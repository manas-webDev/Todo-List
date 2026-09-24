let input = document.querySelector(".Input-Box");
let addBtn = document.querySelector(".Btn");
let list = document.querySelector(".List");
let clearBtn = document.querySelector(".clear-btn");

let savedData = localStorage.getItem("todoData");
if (savedData !== null) {
    list.innerHTML = savedData;
}

function saveData() {
    localStorage.setItem("todoData", list.innerHTML);
}

addBtn.addEventListener("click", function() {
    let taskText = input.value;
    
    if (taskText === "") {
        alert("Please write something first!");
    } else {
        let newLi = document.createElement("li");
        
        let nameSpan = document.createElement("span");
        nameSpan.className = "task-name";
        nameSpan.innerHTML = taskText;
        newLi.appendChild(nameSpan);
        
        let editSpan = document.createElement("span");
        editSpan.className = "edit-btn";
        editSpan.innerHTML = "&#9998;";
        newLi.appendChild(editSpan);
        
        let deleteSpan = document.createElement("span");
        deleteSpan.className = "delete-btn";
        deleteSpan.innerHTML = "\u00d7";
        newLi.appendChild(deleteSpan);
        
        list.appendChild(newLi);
        input.value = "";
        
        saveData();
    }
});

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addBtn.click();
    }
});

list.addEventListener("click", function(event) {
    let clickedElement = event.target;
    
    if (clickedElement.className === "delete-btn") {
        clickedElement.parentElement.remove();
        saveData();
    } 
    else if (clickedElement.className === "edit-btn") {
        let li = clickedElement.parentElement;
        let text = li.querySelector(".task-name").innerHTML;
        
        input.value = text;
        li.remove();
        input.focus();
        
        saveData();
    } 
    else if (clickedElement.tagName === "LI") {
        clickedElement.classList.toggle("checked");
        saveData();
    } 
    else if (clickedElement.className === "task-name") {
        clickedElement.parentElement.classList.toggle("checked");
        saveData();
    }
});

clearBtn.addEventListener("click", function() {
    list.innerHTML = "";
    saveData();
});

