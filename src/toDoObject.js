export const ToDoObjectFactory = () => {
    let done = false;
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

    return {done, title, description, dueDate, priority, changeTitle, changeDescription, changeDueDate, changePriority};
};
