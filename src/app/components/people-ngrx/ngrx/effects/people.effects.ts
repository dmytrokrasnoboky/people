import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { PeopleActions } from '../actions/people.actions';
import { PeopleService } from '../../../../services/people.service';


@Injectable()
export class PeopleEffects {
  loadPeople$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PeopleActions.loadPeople),
      concatMap(() => this.service.getPeopleFromServer()),
      map(people => PeopleActions.loadedPeople(people),
        catchError((err) => of(PeopleActions.loadedPeopleError({ error: err.message }))))
    );
  });

  displayErrorAlert = createEffect(
    () => {
      return inject(Actions).pipe(
        ofType(PeopleActions.loadedPeopleError),
        tap(({ err }) => alert(err))
      );
    },
    { functional: true, dispatch: false }
  );

  constructor(private actions$: Actions, private service: PeopleService) {
  }
}
