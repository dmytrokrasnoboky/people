import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPeople from '../reducers/people.reducer';

export const selectPeopleState = createFeatureSelector<fromPeople.IPeopleState>(
  fromPeople.peopleFeatureKey
);

export const selectPeople = createSelector(
  selectPeopleState,
  (state) => state.people
);

export const selectIsPending = createSelector(
  selectPeopleState,
  (state) => state.pending
);

export const selectPerson = (id: string) => createSelector(
  selectPeopleState,
  (state) => state.people.find(item => item.id === id) || { firstName: 'John', lastName: 'Doe', age: '21', workTitle: 'Wanna be Signer' }
);



// TODO: need to add a selector for people.
