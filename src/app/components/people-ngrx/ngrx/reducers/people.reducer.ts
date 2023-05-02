import { createReducer, on } from '@ngrx/store';
import { PeopleActions } from '../actions/people.actions';
import { PersonModel } from '../../../../models/person-model';

export const peopleFeatureKey = 'people';

// TODO: Need to add People to the store and initialize it. +
export interface IPeopleState {
  people: PersonModel[];
  pending: boolean;
}
export const initialState: IPeopleState = {
  people: [],
  pending: false
};

export const reducer = createReducer(
  initialState,
  on(PeopleActions.loadPeople, (state) => ({ ...state, pending: true })),
  on(PeopleActions.loadedPeople, (state, { people }) => ({ ...state, pending: false, people })),
  on(PeopleActions.editPerson, (state, { person }) => ({
    ...state,
    people: state.people.map(item => item.id === person.id ? person : item)
  })),
  on(PeopleActions.deletePerson, (state, { id }) => ({
    ...state,
    people: state.people.filter(item => item.id !== id)
  }))
);
