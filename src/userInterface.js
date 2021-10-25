import './style.css';
import List from './images/list.svg';
import * as Func from './functionality.js';
import { closestIndexTo } from 'date-fns/esm';

function displayPage() {
const container = document.createElement("div");
document.body.appendChild(container);
container.classList.add("container");

//HEADER
const header = document.createElement("div");
container.appendChild(header);
header.classList.add("header");

const headerBrand = document.createElement("div");
header.appendChild(headerBrand);
headerBrand.classList.add("headerBrand");

const headerBrandIcon = document.createElement("img");
headerBrand.appendChild(headerBrandIcon);
headerBrandIcon.src = List;

const headerBrandTitle = document.createElement("h1");
headerBrand.appendChild(headerBrandTitle);
headerBrandTitle.textContent = "To-do List";
headerBrandTitle.classList.add("headerBrandTitle");


//CONTENT
const content = document.createElement("div");
container.appendChild(content);
content.classList.add("content");


//SIDE-CONTENT
const sideContent = document.createElement("div");
content.appendChild(sideContent);
sideContent.classList.add("sideContent");

const sideContentHeader = document.createElement("div");
sideContent.appendChild(sideContentHeader);
sideContentHeader.classList.add("sideContentHeader");

const sideContentHeaderTitle = document.createElement("h2");
sideContentHeader.appendChild(sideContentHeaderTitle);
sideContentHeaderTitle.textContent = "Your Projects";

const sideContentHeaderIcon = document.createElement("i");
sideContentHeader.appendChild(sideContentHeaderIcon);
sideContentHeaderIcon.classList.add("fas", "fa-plus-circle");

const plusButton = document.querySelector(".fas");
plusButton.addEventListener("click", createProject);


const sideContentMain = document.createElement("div");
sideContent.appendChild(sideContentMain);
sideContentMain.classList.add("sideContentMain");

const sideContentMainList = document.createElement("ul");
sideContentMain.appendChild(sideContentMainList);

const sideContentMainProjectItem = document.createElement("li");
sideContentMainList.appendChild(sideContentMainProjectItem);



const sideContentMainProject = document.createElement("button");
sideContentMainProjectItem.appendChild(sideContentMainProject);
sideContentMainProject.textContent = "default";
const defaultProject = new Func.Project(`${sideContentMainProject.textContent}`);

const sideContentMainProjectDel = document.createElement("i");
sideContentMainProject.appendChild(sideContentMainProjectDel);
sideContentMainProjectDel.classList.add("far", "fa-trash-alt");

const projectsArr = [];
projectsArr.push(sideContentMainProjectItem);
const deleteArr = [];
deleteArr.push(sideContentMainProjectDel);

sideContentMainProjectDel.addEventListener("click", deleteProject);
sideContentMainProject.addEventListener("click", function(e){
    changeMainHeader(e);
    defaultProject.printObj();
    clearDisplay();
    displayList(defaultProject);
    
});



//MAIN-CONTENT
const mainContent = document.createElement("div");
content.appendChild(mainContent);
mainContent.classList.add("mainContent");

const mainContentHeader = document.createElement("div");
mainContent.appendChild(mainContentHeader);
mainContentHeader.classList.add("mainContentHeader");

const mainContentHeaderTitle = document.createElement("h2");
mainContentHeader.appendChild(mainContentHeaderTitle);
mainContentHeaderTitle.textContent = `${sideContentMainProject.textContent}`;

const mainContentMain = document.createElement("div");
mainContent.appendChild(mainContentMain);
mainContentMain.classList.add("mainContentMain");


const mainContentMainAdd = document.createElement("li");
mainContentMain.appendChild(mainContentMainAdd);
mainContentMainAdd.classList.add("add");

const mainContentMainList = document.createElement("ul");
mainContentMain.appendChild(mainContentMainList);

const mainContentMainToDoAdd = document.createElement("button");
mainContentMainAdd.appendChild(mainContentMainToDoAdd);
mainContentMainToDoAdd.textContent = "Click here to add new Item";
mainContentMainToDoAdd.addEventListener("click", createTodo);

let TodoArr = [];
let checkArr = [];

//FOOTER
const footer = document.createElement("div");
container.appendChild(footer);
footer.classList.add("footer");

const footerText = document.createElement("p");
footer.appendChild(footerText);
footerText.textContent = "Copyright © 2021 laurpop99 ";

const footerGitLink = document.createElement("a");
footer.appendChild(footerGitLink);
footerGitLink.href = "https://github.com/laurpop99/to-do-list";

const footerGitIcon = document.createElement("i");
footerGitLink.appendChild(footerGitIcon);
footerGitIcon.classList.add("fab", "fa-github");


//FUNCTIONS
let currentProject;


function createProject() {
    const projectName = prompt("Choose a name for the project");
    if(projectName === "" || projectName === null) {
        alert("Project name can't be empty!");
        return;
    }
    const project = new Func.Project(projectName);
    project.printObj();
    const sideContentMainProjectItem = document.createElement("li");
    sideContentMainList.appendChild(sideContentMainProjectItem);
    projectsArr.push(sideContentMainProjectItem);

    const sideContentMainProject = document.createElement("button");
    sideContentMainProjectItem.appendChild(sideContentMainProject);
    sideContentMainProject.textContent = `${projectName}`;
    sideContentMainProject.addEventListener("click", function(e){
        changeMainHeader(e);
        currentProject = project;
        project.printObj();
        clearDisplay();
    
        
        displayList(currentProject);
        console.log(TodoArr);
        console.log(checkArr);
       
    });

    const sideContentMainProjectDel = document.createElement("i");
    sideContentMainProject.appendChild(sideContentMainProjectDel);
    sideContentMainProjectDel.classList.add("far", "fa-trash-alt");
    deleteArr.push(sideContentMainProjectDel);
    sideContentMainProjectDel.addEventListener("click", deleteProject);

}

function deleteProject(e) {
    const deleteIndex = deleteArr.indexOf(e.target);
    projectsArr[deleteIndex].remove();
}


function changeMainHeader(arg) {
    mainContentHeaderTitle.textContent = arg.target.textContent;
}

function createTodo() {
    const toDoName = prompt("Choose Item Name");
    const toDoObj = new Func.TodoList(toDoName);
    currentProject.toDoList.push(toDoObj);
    createList(currentProject);

}

function clearDisplay(){
    mainContentMainList.textContent = "";
    TodoArr = [];
    checkArr = [];
}

function createList(parent){
        const toDoItem = document.createElement("li");
        TodoArr.push(toDoItem);
        mainContentMainList.appendChild(toDoItem);
        
        
        const toDoButton = document.createElement("button");
        toDoItem.appendChild(toDoButton);
        toDoButton.textContent = parent.toDoList[parent.toDoList.length-1].name;
       
    
        const toDoCheck = document.createElement("i");
        toDoButton.appendChild(toDoCheck);
        toDoCheck.classList.add("far", "fa-square");
         checkArr.push(toDoCheck);
        toDoCheck.addEventListener("click", checkTodo);
}

function displayList(parent){
    for(let i = 0; i < parent.toDoList.length; i++){
        const toDoItem = document.createElement("li");
        TodoArr.push(toDoItem);
        mainContentMainList.appendChild(toDoItem);
        
        
        const toDoButton = document.createElement("button");
        toDoButton.textContent = parent.toDoList[i].name;
        toDoItem.appendChild(toDoButton);
    
        const toDoCheck = document.createElement("i");
        toDoButton.appendChild(toDoCheck);
        toDoCheck.classList.add("far", "fa-square");
        checkArr.push(toDoCheck);
        toDoCheck.addEventListener("click", checkTodo);
        
    }
}

function checkTodo(e) {
    const checkIndex = checkArr.indexOf(e.target);
    removeFromTodo(currentProject, checkIndex);
    TodoArr[checkIndex].remove();
    TodoArr.splice(checkIndex,1);
    checkArr.splice(checkIndex,1);
    console.log(checkIndex);
    console.log(TodoArr);

   
    
}

function removeFromTodo(proj, index){
    proj.toDoList.splice(index,1);
}





}


export {displayPage}

