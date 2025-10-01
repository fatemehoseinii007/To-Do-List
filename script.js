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

    newHeading.appendChild(createHeader)
} 

if (txtInput !== "") {
    let taskDiv = document.createElement("div");
    taskDiv.className = "taskDiv";
    taskDiv.textContent = txtInput;

    newTasks.appendChild(taskDiv);
    textInput.value = "";
  }
}



selectForm.addEventListener("submit",newTask);