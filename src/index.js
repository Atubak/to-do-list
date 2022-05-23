import "./style.css";
import { projectList } from "./projectManager";
import { ProjectFactory } from "./projectObject";
import { ToDoObjectFactory } from "./toDoObject";






// projectList.add(ProjectFactory("jona"));
// projectList.add(ProjectFactory("booba"));
// projectList.add(ProjectFactory("vegana"));

// projectList.list[0].addItem(ToDoObjectFactory());
// projectList.list[0].addItem(ToDoObjectFactory());
// projectList.list[0].removeItem(0);

// console.log(projectList);

function HtmlLoader() {
const body = document.querySelector("body");
body.innerHTML = `
<header>
  <div id="logo">𝕋</div>
  <div id="title">To Do List</div>
  <div id="plus">+</div>
</header>`;
};

HtmlLoader();