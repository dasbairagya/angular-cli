import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacts } from '../models/contacts';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  // private url: string = './db.json';
  private url: string = '/assets/data/db.json';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contacts> {
    return this.http.get<Contacts>(this.url);
  }
}
