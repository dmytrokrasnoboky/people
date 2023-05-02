import { Component } from '@angular/core';
import { PeopleActions } from './components/people-ngrx/ngrx/actions/people.actions';
import { Store } from '@ngrx/store';
import { IPeopleState } from './components/people-ngrx/ngrx/reducers/people.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'landgate-ui-test';
  constructor(private store: Store<IPeopleState>) {
    this.store.dispatch(PeopleActions.loadPeople());
  }
}
