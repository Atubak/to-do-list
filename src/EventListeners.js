function findProject(listArray, clickedProjectName) {
    return listArray.find(element => element.name === clickedProjectName);
};




export {findProject};