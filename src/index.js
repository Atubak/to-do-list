import "./style.css";
import { projectList } from "./projectManager";
import { ProjectFactory } from "./projectObject";
import { ToDoObjectFactory } from "./toDoObject";
import {initialDomLoader, fillProjects, fillContent} from "./DomLoader";






projectList.add(ProjectFactory("bday"));
projectList.add(ProjectFactory("groceries"));
projectList.add(ProjectFactory("work"));

projectList.list[0].addItem(ToDoObjectFactory());
projectList.list[0].addItem(ToDoObjectFactory());
projectList.list[0].addItem(ToDoObjectFactory());
projectList.list[0].addItem(ToDoObjectFactory());
projectList.list[0].addItem(ToDoObjectFactory());
projectList.list[0].addItem(ToDoObjectFactory());

console.log(projectList);



initialDomLoader();
fillProjects(projectList.list);




fillContent(projectList.list[0]);

// working on checkbox in domloader.js