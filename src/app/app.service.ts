import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  tagColors: string[] = ['primary', 'success', 'warning', 'danger', 'info'];

  sampleUserNamesList: string[] = [
    'James',
    'Mary',
    'John',
    'Patricia',
    'Robert',
    'Linda',
    'Michael',
    'Barbara',
    'William',
    'Elizabeth',
    'David',
    'Jennifer',
    'Richard',
    'Maria',
    'Charles',
    'Susan',
    'Joseph',
    'Margaret',
    'Thomas',
    'Dorothy',
  ];

  sampleLocationsList: string[] = [
    'Vancouver',
    'Seattle',
    'Portland',
    'Washington',
    'Oregon',
    'Sacramento',
    'San Fransisco',
    'San Diego',
    'California',
    'Los Angles',
    'Las Vegas',
    'Colorado'
  ];

  sampleRolesList: string[] = [
    'Developer',
    'Architect',
    'Tester',
    'QA',
    'Manager',
    'UI/UX',
    'Support',
    'Lead'
  ];

  sampleTagsList: string[] = [
    'Client',
    'Workshop',
    'Internal Works',
    'Board Room'
  ];

  sampleOrganizationList: string[] = [
    'Google',
    'Alphabet',
    'Microsoft',
    'Netflix',
    'Meta',
    'Twitter',
    'Delloite'
  ]

  sampleActiveList: string[] = [
    'inactive',
    'active'
  ];

  booleanDecider: boolean[] = [
    true,
    false
  ];

  constructor() {}

  getTagColorBasedOnTagName(tagName: string): string {
    tagName = tagName.toLocaleLowerCase();
    let tagColor;
    switch (tagName) {
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
      default:
        tagColor = this.tagColors[0];
        break;
    }
    return tagColor;
  }

  generateSampleData(): any {
    const userData = {
        username: this.getRandomValueFromArray(this.sampleUserNamesList),
        location: this.getRandomValueFromArray(this.sampleLocationsList),
        role: this.getRandomValueFromArray(this.sampleRolesList),
        status: this.getRandomValueFromArray(this.sampleActiveList),
        isFavorite: this.getRandomValueFromArray(this.booleanDecider),
        organization: this.getRandomValueFromArray(this.sampleOrganizationList), 
        tags: this.generateTagsData()
    }
    return userData;
  }

  generateTagsData(): string[] {
    const index = this.getRandomNumberFromArrayLength(this.sampleTagsList.length);
    let tagsList = [];
    for(let i = 0 ; i < index ; i++) {
        tagsList.push(this.sampleTagsList[this.getRandomNumberFromArrayLength(this.sampleTagsList.length)]);
    };
    return [...new Set(tagsList)];
  }

  getRandomValueFromArray(array: any[]): string {
    return array[this.getRandomNumberFromArrayLength(array.length)];
  }

  getRandomNumberFromArrayLength(length: number) {
    return (Math.random() * length) | 0
  }
}
