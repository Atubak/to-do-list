export const projectList = {
    list: [],
    add: function(project) {this.list.push(project)},
    remove: function(projectName) {this.list = this.list.filter(e => e.name !== projectName)}
};