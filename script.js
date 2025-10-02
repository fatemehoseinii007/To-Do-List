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
    taskDiv.textContent = txtInput;

    newTasks.appendChild(taskDiv);
    textInput.value = "";
  }
}

selectForm.addEventListener("submit",newTask);

// clear button

let clearBtn=document.querySelector("#button")
let footer=document.querySelector("footer")

function clearAll(){
taskDiv.remove()
}

clearBtn.addEventListener("click",clearAll)