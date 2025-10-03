// add button

let selectForm=document.querySelector("#first-form")
let textInput=document.querySelector(".txt-input")
let newTasks=document.querySelector("#newTasks")
let newHeading=document.querySelector("#newHeading")

function newTask(response){
response.preventDefault()
let txtInput=textInput.value.trim()

  let existingError = newHeading.querySelector(".header")
    if (existingError) {
        existingError.remove()
}

if(txtInput==""){
    let createHeader=document.createElement("h2")
    createHeader.className="header"
    createHeader.textContent="please Enter something⌨"

  new Typewriter(createHeader, {
  strings: "please Enter something⌨",
  autoStart: true,
  delay: 70,
  cursor:""
});

    newHeading.appendChild(createHeader)
} 

if (txtInput !== "") {
    let taskDiv = document.createElement("div");
    taskDiv.className = "taskDiv";
    taskDiv.textContent = txtInput.toLowerCase();

    newTasks.appendChild(taskDiv);
    textInput.value = "";

    let deleteIcon=document.createElement("div")
    deleteIcon.classList="delete"
    deleteIcon.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>`

    deleteIcon.addEventListener("click",function (){
        taskDiv.remove()
    })

taskDiv.appendChild(deleteIcon);

    let createCheckbox=document.createElement("input")
    createCheckbox.type="checkbox"
    createCheckbox.classList="checkBox"

    createCheckbox.addEventListener("change",function(){
        taskDiv.classList.toggle("complete",this.checked)
    })

    taskDiv.appendChild(createCheckbox)

    let mainContainer=document.createElement("div")
    mainContainer.classList="main-container"
    mainContainer.appendChild(createCheckbox)
    mainContainer.appendChild(deleteIcon)
    
    taskDiv.appendChild(mainContainer)

}
}

selectForm.addEventListener("submit",newTask);

// clear button

let clearBtn=document.querySelector("#button")

function clearAll(){
newTasks.textContent=""
}

clearBtn.addEventListener("click",clearAll)

//filter tasks

let filterInput = document.querySelector("main input")

function filterTasks() {
    let filterText = filterInput.value.trim().toLowerCase();
    
    let allTasks = document.querySelectorAll(".taskDiv");
    
    allTasks.forEach(function(task) {
        let taskContent = task.textContent.toLowerCase();
        
  if (filterText === "" || taskContent.includes(filterText)) {
    task.style.opacity = "1";
    task.style.transform = "scale(1)";
} else {
    task.style.opacity = "0.3";
    task.style.transform = "scale(0.97)";
}
    });

}

filterInput.addEventListener("input",filterTasks)
