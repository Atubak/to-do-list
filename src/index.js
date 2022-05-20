import "./style.css";

const ProjectFactory = () => {
    let name = "Untitled";
    let toDoItems = [];

    function changeName(newName) {
        return this.name = newName;
        // reloadProjectObjectInDom()
    }

    function addItem() {
        const newToDo = toDoObjectFactory();
        return this.toDoItems.push(newToDo);
        // reloadProjectObjectInDom()
    }

    function removeItem(itemToBeRemovedIndex) {
        return this.toDoItems.splice(itemToBeRemovedIndex, 1);
        // reloadProjectObjectInDom()
    }

    return {name, toDoItems, changeName, addItem, removeItem};
};

const toDoObjectFactory = () => {
    let title = "Untitled";
    let description = "Empty";
    let dueDate;
    let priority;

    function changeTitle(newTitle) {
        return this.title = newTitle;
        // reloadItemObjectInDom()
    }

    function changeDescription(newDescription) {
        return this.description = newDescription;
        // reloadItemObjectInDom()
    }

    function changeDueDate(newDate) {
        return this.dueDate = newDate;
        // reloadItemObjectInDom()
    }

    function changePriority(newPriority) {
        return this.priority = newPriority;
        // reloadItemObjectInDom()
    }

    return {title, description, dueDate, priority, changeTitle, changeDescription, changeDueDate, changePriority};
};





const firstProject = ProjectFactory();
firstProject.changeName("jonatan");
firstProject.addItem();
console.log(firstProject);

