import { Component } from '@angular/core';
import { NbDialogService, NbTagComponent, NbTagInputAddEvent } from '@nebular/theme';
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

  trees: Set<string> = new Set<string>();

  constructor(
    public appService: AppService,
    private dialogService: NbDialogService
  ) {

  }

  addContact(addContactDialogRef: any): void {
    const dialog = this.dialogService.open(addContactDialogRef, {
      dialogClass: 'addContactDialog',
      closeOnEsc: false,
      closeOnBackdropClick: false
    });
    dialog.onClose.subscribe(dialogData => {
      if (dialogData.isFavorite) {
        this.contactCardDataFavorite.push(Object.assign({}, dialogData));
      }
      this.contactCardData.push(Object.assign({}, dialogData));
      this.setDefaultValuesForContactDataForm();
    });
  }

  addNewContact(dialogRef: any): void {
    this.addNewContactFormData.tags = Array.from(this.trees);
    dialogRef.close(this.addNewContactFormData);
  }

  onTagRemove(tagToRemove: NbTagComponent): void {
    this.trees.delete(tagToRemove.text);
  }

  onTagAdd({ value, input }: NbTagInputAddEvent): void {
    if (value) {
      this.trees.add(value)
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