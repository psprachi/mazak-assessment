import { Component } from '@angular/core';
import { NbDialogService, NbTagComponent, NbTagInputAddEvent } from '@nebular/theme';
import { PaginationInstance } from 'ngx-pagination';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  contactCardData: Contact[] = [];
  contactCardDataFavorite: Contact[] = [];

  addNewContactFormData: Contact = {
    username: '',
    isFavorite: false,
    location: '',
    organization: '',
    role: '',
    status: 'active',
    tags: []
  };

  paginationConfig: PaginationInstance = {
    itemsPerPage: 10,
    currentPage: 1
  };

  dummyDataItemCount: number = 50;

  tagsFromSet: Set<string> = new Set<string>();

  constructor(
    public appService: AppService,
    private dialogService: NbDialogService
  ) {
  }

  dataFilterInputVariable: string = '';

  addContact(addContactDialogRef: any): void {
    const dialog = this.dialogService.open(addContactDialogRef, {
      dialogClass: 'addContactDialog',
      closeOnEsc: false,
      closeOnBackdropClick: false
    });
    dialog.onClose.subscribe(dialogData => {
      if(dialogData && dialogData !== undefined) {
        if (dialogData.isFavorite) {
          this.contactCardDataFavorite.push(Object.assign({}, dialogData));
        }
        this.contactCardData.push(Object.assign({}, dialogData));
        this.setDefaultValuesForContactDataForm();
      }
    });
  }

  addNewContact(dialogRef: any): void {
    this.addNewContactFormData.tags = Array.from(this.tagsFromSet);
    dialogRef.close(this.addNewContactFormData);
  }

  onTagRemove(tagToRemove: NbTagComponent): void {
    this.tagsFromSet.delete(tagToRemove.text);
  }

  onTagAdd({ value, input }: NbTagInputAddEvent): void {
    if (value) {
      this.tagsFromSet.add(value)
    }
    input.nativeElement.value = '';
  }

  setDefaultValuesForContactDataForm(): void {
    this.addNewContactFormData = {
      username: '',
      isFavorite: false,
      location: '',
      organization: '',
      role: '',
      status: 'active',
      tags: []
    }
  }

  generateSamepleData(): void {
    for(let i = 0 ; i < this.dummyDataItemCount ; i++) {
      this.contactCardData.push(this.appService.generateSampleData());
    }
    this.contactCardDataFavorite = this.contactCardData.filter(contact => contact.isFavorite = true);
  }

  onPageChange(pageNumber: number) {
    this.paginationConfig.currentPage = pageNumber;
  }

}

interface Contact {
  username: string;
  role: string;
  organization: string;
  location: string;
  tags: string[];
  status: string;
  isFavorite: boolean;
}