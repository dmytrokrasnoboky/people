import { PeopleActions } from './people.actions';

describe('loadPeoples', () => {
  it('should return an action', () => {
    expect(PeopleActions.loadPeople().type).toBe('[People] Load Peoples');
  });
});
