import { Dragable } from '../models/drag-drop'
import { Component } from './base-component'
import { autobind } from '../decorators/autobind'
import { Project } from '../models/project'

// ProjectItem Class
export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> 
    implements Dragable {
    private project:Project
    get persons() {
        if(this.project.number === 1) {
            return '1 person'
        } else {
            return `${this.project.number} persons`
        }
    }
    constructor(hostId: string, project: Project){
        super('single-project', hostId, false, project.id)
        this.project = project   

        this.configure()
        this.renderContent()
    }

    @autobind
    dragStartHandler(event: DragEvent): void {
        console.log(event)
        event.dataTransfer!.setData('text/plain', this.project.id)
        event.dataTransfer!.effectAllowed = 'move'
    }
    dragEndHandler(_: DragEvent): void {
        console.log('drag end')
    }

    configure(): void {
        this.element.addEventListener('dragstart', this.dragStartHandler)
        this.element.addEventListener('dragend', this.dragEndHandler)
    }
    renderContent(): void {
        this.element.querySelector('h2')!.textContent = this.project.title
        this.element.querySelector(
            'h3'
        )!.textContent = this.persons + ' assigned'
        this.element.querySelector('p')!.textContent = this.project.description
    }
}

