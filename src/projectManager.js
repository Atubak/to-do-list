export const projectManager = {
    projectList: [],
    add: function(project) {this.projectList.push(project)},
    remove: function(projectName) {this.projectList = this.projectList.filter(e => e.name !== projectName)}
};