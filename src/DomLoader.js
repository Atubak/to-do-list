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

function fillProjects(projectListArray) {
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

function projectNameSelector(projectName) {
    const selectedElement = document.getElementById(projectName);
    selectedElement.classList.add(`selected`);
};

function fillContent(project) {
    projectNameSelector(project.name);

    const container = document.getElementById("currentProject");

    const name = document.createElement("h1");
    name.textContent = project.name;


    const itemContainer = document.createElement("div");
    
    project.toDoItems.forEach(e => {
        console.log(e);
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="toDoItem">
            <input type="checkbox">
            ${e.title}

            
            </div>
        `;
        
        itemContainer.appendChild(div);
    });
    
    container.appendChild(name);
    container.appendChild(itemContainer);
};

export {initialDomLoader, fillProjects, fillContent};