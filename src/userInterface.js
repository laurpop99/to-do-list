import './style.css';
import List from './images/list.svg';
import * as Func from './functionality.js';

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

const sideContentMainProjectDel = document.createElement("i");
sideContentMainProject.appendChild(sideContentMainProjectDel);
sideContentMainProjectDel.classList.add("far", "fa-trash-alt");

const projectsArr = [];
projectsArr.push(sideContentMainProjectItem);
const deleteArr = [];
deleteArr.push(sideContentMainProjectDel);

sideContentMainProjectDel.addEventListener("click", deleteProject);
sideContentMainProject.addEventListener("click", changeMainHeader);



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

const mainContentMainList = document.createElement("ul");
mainContentMain.appendChild(mainContentMainList);

const mainContentMainItem = document.createElement("li");
mainContentMainList.appendChild(mainContentMainItem);

const mainContentMainToDo = document.createElement("button");
mainContentMainItem.appendChild(mainContentMainToDo);
mainContentMainToDo.textContent = "default";

const mainContentMainToDoCheck = document.createElement("i");
mainContentMainToDo.appendChild(mainContentMainToDoCheck);
mainContentMainToDoCheck.classList.add("far", "fa-square");


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

function createProject() {
    const projectName = prompt("Choose a name for the project");
    if(projectName === "" || projectName === null) {
        alert("Project name can't be empty!");
        return;
    }
    const project = new Func.Project(projectName);
    project.sayName();
    const sideContentMainProjectItem = document.createElement("li");
    sideContentMainList.appendChild(sideContentMainProjectItem);
    projectsArr.push(sideContentMainProjectItem);

    const sideContentMainProject = document.createElement("button");
    sideContentMainProjectItem.appendChild(sideContentMainProject);
    sideContentMainProject.textContent = `${projectName}`;
    sideContentMainProject.addEventListener("click", changeMainHeader);

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


function changeMainHeader() {
    mainContentHeaderTitle.textContent = this.textContent;
}

}


export {displayPage}

