import "./style.css";
import { projectManager } from "./projectManager";
import { ProjectFactory } from "./projectObject";
import { ToDoObjectFactory } from "./toDoObject";






projectManager.add(ProjectFactory("jona"));

console.log(projectManager);
