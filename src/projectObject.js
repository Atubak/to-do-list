export const ProjectFactory = (projectName) => {
    let name = projectName;
    let toDoItems = [];

    function changeName(newName) {
        this.name = newName;
        // reloadProjectObjectInDom()
    }

    function addItem(newItemObject) {
        this.toDoItems.push(newItemObject);
        // reloadProjectObjectInDom()
    }

    function removeItem(itemToBeRemoved) {
        const index = toDoItems.indexOf(itemToBeRemoved);
        return this.toDoItems.splice(index, 1);
        // reloadProjectObjectInDom()
    }

    return {name, toDoItems, changeName, addItem, removeItem};
};
