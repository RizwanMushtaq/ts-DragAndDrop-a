// Project Type
export var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
export class Project {
    constructor(id, title, description, number, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.number = number;
        this.status = status;
    }
}
