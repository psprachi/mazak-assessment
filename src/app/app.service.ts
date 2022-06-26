import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AppService {

    tagColors: string[] = ['primary', 'success', 'warning', 'danger', 'info']

    constructor() {}

    getTagColorBasedOnTagName(tagName: string): string {
        tagName = tagName.toLocaleLowerCase();
        let tagColor;
        switch(tagName) {
            case 'client':
                tagColor = this.tagColors[0];
                break;
             case 'workshop':
                tagColor = this.tagColors[1];
                break;
            case 'internal works':
                tagColor = this.tagColors[2];
                break;
            case 'board room':
                tagColor = this.tagColors[3];
                break;
            default :
                tagColor = this.tagColors[0];
                break;
        }
        return tagColor;
    }
}