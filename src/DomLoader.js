function initialDomLoader() {
    const body = document.querySelector("body");
    body.innerHTML = `
    <header>
        <div id="logo">𝕋</div>
        <div id="title">To Do List</div>
        <div id="plus">+</div>
    </header>

    <div id="content">
        <div id="navigation">
        
        <div id="listContainer">
        
            <p>Projects</p>
        
            <div id="lists">
            
            </br>
            <div id="addProject" class="list">+ New Project</div>
            </div>
        </div>
        
        </div>

        <div id="currentProject"></div>
    </div>
    `;
};

function fillCustomProjects(projectListArray) {   //populates custom projects in nav bar
    const container = document.querySelector("#lists");
    container.innerHTML = `</br>
        <div id="addProject" class="list">+ New Project</div>`;
    
    projectListArray.forEach(e => {
        const div = document.createElement("div");
        div.classList.add('list');
        div.id = e.name;
        div.textContent = e.name;
        container.insertBefore(div, container.lastElementChild);
        
        const br = document.createElement("br");
        div.insertAdjacentElement("afterend", br);
    })
};


// some functions that get called by fillcontent()

function projectNameSelector(projectName) {     //highlights the project in the nav bar
    const selectedElement = document.getElementById(projectName);
    selectedElement.classList.add("selected");
};

function fillProjectH1(projectName) {   //insert the project title
    const name = document.createElement("h1");
    name.textContent = projectName;
    return name;
};


function fillItemContainer(itemArray) { //creates a div to put the to do item in
    const div = document.createElement("div");
    div.id = "itemContainer";

    const addItemDiv = document.createElement("div");
    addItemDiv.classList.add("addItem");
    addItemDiv.textContent = "+ item";

    itemArray.forEach(e => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("toDoItem");
        itemDiv.classList.add(e.priority);
        itemDiv.innerHTML = `
            <div class="generalInfo">
                <input type="checkbox" ${e.done == true ? "checked" : ""}>
                <div class="itemTitle">${e.name}</div>
                <div class="infoAndRemove">
                    <div class="iButton">ⓘ</div>
                    <div class="removeButton">❌</div>
                </div>            
            </div>
        `;
        div.appendChild(itemDiv);
    });

    div.appendChild(addItemDiv);
    
    return div;
};



function fillContent(project) {     //combines 
    
    const currentProjectDiv = document.getElementById("currentProject");
    currentProjectDiv.innerHTML = "";
    const nameDiv = fillProjectH1(project.name);
    const itemContainerDiv = fillItemContainer(project.toDoItems);
    
    currentProjectDiv.appendChild(nameDiv);
    currentProjectDiv.appendChild(itemContainerDiv);    
    
    
    projectNameSelector(project.name);
};





function removeHighLight(navbarProjectDiv) {     //removes navbar highlight
    navbarProjectDiv[0].classList.remove("selected");
};



function addNewProjectPopUp() {
    const name = prompt("fill in name");
    return name;
};

function addNewItemName() {
    const name = prompt("fill in name");
    return name;
}

function toggleNav() {
    const nav = document.getElementById("content").firstElementChild;
    nav.id === "navigation" ? nav.id = "navToggle" : nav.id = "navigation";
    
};


function openItemDetails(itemDivToOpen, itemObject) {
    
    if (itemDivToOpen.classList.contains("expanded")) {
        itemDivToOpen.removeChild(itemDivToOpen.lastElementChild);
        itemDivToOpen.classList.toggle("expanded");
    } else {
    const detailDiv = document.createElement("div");
    detailDiv.id = "details";
    itemDivToOpen.classList.add("expanded");
    detailDiv.innerHTML = `
        <input type="text" id="description" placeholder="Description: ${itemObject.description}"> </br>
        <label for="dueDate">Complete Before:</label>
        <input type="date" id="dueDate" ${itemObject.dueDate}></br>
        <label for="priority">Priority</label>
        <select id="priority">
            <option value="mid">Mid</option>
            <option value="low">Low</option>
            <option value="high">High</option>
        </select>
    `;

    itemDivToOpen.appendChild(detailDiv);
    
    document.getElementById("priority").value = itemObject.priority; 

    };

};

export {initialDomLoader, fillCustomProjects, fillContent, removeHighLight, addNewProjectPopUp, addNewItemName, toggleNav, openItemDetails};