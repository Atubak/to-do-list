import "./style.css";
import { projectList } from "./projectManager";
import { ProjectFactory } from "./projectObject";
import { ToDoObjectFactory } from "./toDoObject";
import {initialDomLoader, fillCustomProjects, fillContent, addNewProjectPopUp, addNewItemName, removeHighLight, toggleNav, openItemDetails} from "./DomLoader";
import {findProject} from "./EventListeners";

//  get projects from localStorage. if there's no projects already, make some example projects
const getProjects = () => {     

    if (!localStorage.length) {     //making example lists and items
        

        projectList.add(ProjectFactory("Today"));
        projectList.add(ProjectFactory("This Week"));

        projectList.list[0].addItem(ToDoObjectFactory("do homework"));
        projectList.list[0].addItem(ToDoObjectFactory("pingpong"));
        projectList.list[0].addItem(ToDoObjectFactory("groceries"));
        projectList.list[0].addItem(ToDoObjectFactory("watch a movie"));
        projectList.list[0].addItem(ToDoObjectFactory("blabla"));
        projectList.list[0].addItem(ToDoObjectFactory("blopblip"));

        projectList.list[1].addItem(ToDoObjectFactory("bingo"));
        projectList.list[1].addItem(ToDoObjectFactory("bango"));
        return ; 
    };

    
    for (let i = 0; i < localStorage.length; i++) {
        
        projectList.add(ProjectFactory(localStorage.key(i)));
        const insertedProject = projectList.list.find(e => e.name === localStorage.key(i));

        const itemsToBeInserted = JSON.parse(localStorage.getItem(localStorage.key(i)));

        insertedProject.toDoItems.push(...itemsToBeInserted);

    };
    
};

getProjects();


//put all projects and their items(including properties) in localstorage. called at the end of delegateClick()
function setProjects() {        
    localStorage.clear();
    projectList.list.forEach(e => localStorage.setItem(e.name, JSON.stringify(e.toDoItems))); 
};



//loading dom
initialDomLoader();
fillCustomProjects(projectList.list);
fillContent(projectList.list[0]);




//event listeners

document.addEventListener("click", delegateClick);

function delegateClick(e) {

    console.log(e.target);

    if (e.target.id === "logo") {
        toggleNav();
    };

    if (e.target.classList[0] === "list") { //if clicked on a project
        if (e.target.id === "addProject") { // if clicked on the +new project button
            const name = addNewProjectPopUp();
            if (!name) return;    
            projectList.add(ProjectFactory(name));
            fillCustomProjects(projectList.list);
            return fillContent(projectList.list[projectList.list.length-1]);
        }; 

        const currentProject = document.getElementsByClassName("selected");
        const clickedProject = findProject(projectList.list, e.target.id);
        removeHighLight(currentProject);
        fillContent(clickedProject);
    };

    if (e.target.classList[0] === "addItem") {  //if clicked the + item button
        const projectName = document.querySelector("h1").textContent;
        const project = findProject(projectList.list, projectName);
        const itemName = addNewItemName();
        if (!itemName) return;
        project.addItem(ToDoObjectFactory(itemName)); 
        console.log(project);
        fillContent(project);
    };

    if (e.target.classList[0] === "removeButton") { //if clicked the ❌ button
        const projectName = document.querySelector("h1").textContent;
        const project = findProject(projectList.list, projectName);

        const itemName = e.target.parentElement.parentElement.getElementsByClassName("itemTitle")[0].textContent;
        const itemToBeRemoved = findProject(project.toDoItems, itemName);

        project.removeItem(itemToBeRemoved);
        fillContent(project);
    };

    if (e.target.classList[0] === "iButton") {  //if clicked on info button
        const projectName = document.querySelector("h1").textContent;
        const project = findProject(projectList.list, projectName);
        
        const itemDiv = e.target.parentElement.parentElement.parentElement;
        const itemToBeExpanded = findProject(project.toDoItems, itemDiv.getElementsByClassName("itemTitle")[0].textContent);
        
        openItemDetails(itemDiv, itemToBeExpanded);
        
    };

    if (e.target.id === "plus") {
        console.log(localStorage); 
        const projectName = document.querySelector("h1").textContent;
         
        projectList.remove(projectName);      
        
        fillCustomProjects(projectList.list);
        fillContent(projectList.list[projectList.list.length -1]);

    };

    setProjects();
    console.log(projectList.list)
};