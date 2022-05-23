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
        <div id="Today" class="list">Today</div>
        </br>
        <div id="This Week" class="list">This Week</div>
        </br>

        <div id="listContainer">
        
            <p>Projects</p>
        
            <div id="lists"></div>
            </br>
            <div id="addProject" class="list">+ New Project</div>
        </div>
        
        </div>

        <div id="currentProject"></div>
    </div>
    `;
};

function fillProjects(projectListArray) {   //populates custom projects in nav bar
    const container = document.querySelector("#lists");
    
    projectListArray.forEach(e => {
        const div = document.createElement("div");
        div.classList.add('list');
        div.id = e.name;
        div.textContent = e.name;
        container.appendChild(div);
        
        const br = document.createElement("br");
        div.insertAdjacentElement("afterend", br);
    })
};

function projectNameSelector(projectName) {     //highlights the project in the nav bar
    const selectedElement = document.getElementById(projectName);
    selectedElement.classList.add(`selected`);
};

function fillProjectH1(projectName) {   //insert the project title
    const name = document.createElement("h1");
    name.textContent = projectName;
    return name;
};


function fillItemContainer(itemArray) { //creates a div to put the to do item in
    const div = document.createElement("div");
    div.id = "itemContainer";
    console.log(itemArray);

    itemArray.forEach(e => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("toDoItem");
        itemDiv.innerHTML = `
            <input type="checkbox" ${e.done == true ? "checked" : ""}>
            <div>${e.title}</div>
            <div class="iButton">ⓘ</div>
            
        `;
        div.appendChild(itemDiv);
    });
    return div;
};



function fillContent(project) {
    projectNameSelector(project.name);
    
    const currentProjectDiv = document.getElementById("currentProject");
    const nameDiv = fillProjectH1(project.name);
    const itemContainerDiv = fillItemContainer(project.toDoItems);

    currentProjectDiv.appendChild(nameDiv);
    currentProjectDiv.appendChild(itemContainerDiv);    
};

export {initialDomLoader, fillProjects, fillContent};