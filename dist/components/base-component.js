//Component Base Class
export class Component {
    constructor(templateId, hostElementId, insertAtStart, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId === 'user-input') {
            this.element.id = `${newElementId}`;
        }
        else if (newElementId) {
            this.element.id = `${newElementId}-projects`;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtBegining) {
        this.hostElement.insertAdjacentElement(insertAtBegining ? 'afterbegin' : 'beforeend', this.element);
    }
}
