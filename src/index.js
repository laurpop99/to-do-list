import './style.css';
import List from './images/list.svg';

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


//MAIN-CONTENT
const mainContent = document.createElement("div");
content.appendChild(mainContent);
mainContent.classList.add("mainContent");



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
