import { createAction } from '@ngrx/store';
import { PersonModel } from '../../../../models/person-model';

const loadPeople = createAction('[People] Load People');
const loadedPeople = createAction('[People] Loaded', (people: PersonModel[]) => ({ people }));
const loadedPeopleError = createAction('[People] Loaded Error', (err) => ({ err }));

const getPerson = createAction('[People] Get Person', (id: string) => ({ id }));
const deletePerson = createAction('[People] delete Person', (id: string) => ({ id }));
const editPerson = createAction('[People] edit Person', (person: PersonModel) => ({ person }));

export const PeopleActions = {
  loadPeople,
  loadedPeople,
  loadedPeopleError,

  getPerson,
  deletePerson,
  editPerson
};
