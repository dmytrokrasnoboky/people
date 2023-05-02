import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { PersonModel } from '../../models/person-model';

@Component({
  selector: 'app-people-component',
  templateUrl: './people.component.html',
  styleUrls: [ './people.component.scss' ]
})
export class PeopleComponent implements OnInit {
  // TODO: Include the PersonService and get the list of People +
  constructor(public service: PeopleService) {}

  ngOnInit() {}

  editPerson(person: PersonModel): void {
    console.log(person);
  }

  deletePerson(person: PersonModel): void {
    console.log('click')
    this.service.deletePerson(person.id);
  }
}
