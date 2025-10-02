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
  }
}

selectForm.addEventListener("submit",newTask);

// clear button

let clearBtn=document.querySelector("#button")

function clearAll(){
newTasks.textContent=""
}

clearBtn.addEventListener("click",clearAll)

// filter button
// let filterTxt=document.querySelector("main input")
// let mainForm=document.querySelector("main form")

// function filterTask(event){
// event.preventDefault()
// let filtering=filterTask.value.toLowerCase()

// document.querySelectorAll(".taskDiv").forEach(function(text)
// let taskContant=task.textContent;

//   if(item.indexOf(Number)!==-1){
// taskDiv.classList.add("d-flex")
//   }else{
// taskDiv.classList.remove("d-flex")
// taskDiv.style.display="none"
//   }
// )};

// filterTxt.addEventListener("focus",filterTask)

let filterInput = document.querySelector("main input")

function filterTasks() {
    let filterText = filterInput.value.trim().toLowerCase();
    
    let allTasks = document.querySelectorAll(".taskDiv");
    
    allTasks.forEach(function(task) {
        let taskContent = task.textContent.toLowerCase();
        
        // اگر متن فیلتر خالیه یا تسک شامل متن فیلتر هست، نشون بده
        if (filterText === "" || taskContent.includes(filterText)) {
            task.style.display = "block";
        } else {
            // در غیر این صورت مخفی کن
            task.style.display = "none";
        }
    });
}

filterInput.addEventListener("input",filterTasks)
