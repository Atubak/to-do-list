export const ToDoObjectFactory = (itemName)=> {
    let done = false;
    let name = itemName;
    let description = "";
    let dueDate;
    let priority = "low";

    function changeName(newTitle) {
        return this.name = newTitle;
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

    return {done, name, description, dueDate, priority, changeName, changeDescription, changeDueDate, changePriority};
};
