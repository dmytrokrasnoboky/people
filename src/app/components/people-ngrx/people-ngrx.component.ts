import { Component, OnInit } from '@angular/core';
import {PeopleActions} from './ngrx/actions/people.actions';
import {Store} from '@ngrx/store';
import {IPeopleState} from './ngrx/reducers/people.reducer';
import { selectPeople } from './ngrx/selectors/people.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-component',
  templateUrl: './people-ngrx.component.html',
  styleUrls: ['./people-ngrx.component.scss']
})
export class PeopleNgrxComponent implements OnInit {
  people$ = this.store.select(selectPeople);

  // TODO: Include the Store and get the data from the NgrxStore
  constructor(private store: Store<IPeopleState>, private router: Router) {
  }

  editPerson(person) {
    this.router.navigate(['people_ngrx/edit', person.id]);
  }

  deletePerson(person) {
    this.store.dispatch(PeopleActions.deletePerson(person.id));
  }

  ngOnInit(): void {
    console.log('work');

  }
}
