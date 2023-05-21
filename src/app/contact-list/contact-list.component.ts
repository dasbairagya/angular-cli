import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contacts } from '../models/contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  contacts: Contacts[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(data => {
      console.log(data);
      // this.contacts = data ? data.contactList : [];
    });
  }

}
