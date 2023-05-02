import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { PersonModel } from '../models/person-model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private mockPeopleList: PersonModel[] = [
    { firstName: 'John', lastName: 'Doe', age: '21', workTitle: 'Wanna be Signer' },
    { firstName: 'Jane', lastName: 'Doe', age: '22', workTitle: 'Signer' },
    { firstName: 'Bob', lastName: 'Barker', age: '80', workTitle: 'TV Host' },
    { firstName: 'John', lastName: 'Doe', age: '21', workTitle: 'Wanna be Signer' }
  ];

  getPeopleFromServer(): Observable<PersonModel[]> {
    return of(this.mockPeopleList).pipe(
      delay(100),
      map(array => array.map(item => new PersonModel(item))));
  }
}
