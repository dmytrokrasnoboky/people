import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IPeopleState } from '../people-ngrx/ngrx/reducers/people.reducer';
import { selectPerson } from '../people-ngrx/ngrx/selectors/people.selectors';
import { PersonModel } from '../../models/person-model';
import { PeopleActions } from '../people-ngrx/ngrx/actions/people.actions';
import { first, tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: [ './edit-form.component.scss' ]
})
export class EditFormComponent implements OnInit, OnDestroy {
  form: FormGroup = this.createEditForm(null);
  editItem: PersonModel;

  constructor(private fb: FormBuilder, public route: ActivatedRoute, private store: Store<IPeopleState>, private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.select(selectPerson(id)).pipe(
      first(),
      tap((item) => {
        this.editItem = item;
        this.form = this.fb.group({
          firstName: [ item.firstName, Validators.required ],
          lastName: [ item.lastName || '', Validators.required ],
          age: [ item.age || '', Validators.required ],
          workTitle: [ item.workTitle || '', Validators.required ]
        });
      })
    ).subscribe();
  }

  onSubmit() {
    if (this.form.valid) {
      const newItem = { ...this.editItem, ...this.form.value };
      this.store.dispatch(PeopleActions.editPerson(newItem));
      this.router.navigate([ 'people_ngrx' ]);
    }
  }

  public createEditForm(item: any | null): FormGroup {
    return this.fb.group({
      firstName: [ item?.firstName, Validators.required ],
      lastName: [ item?.lastName || '', Validators.required ],
      age: [ item?.age || '', Validators.required ],
      workTitle: [ item?.workTitle || '', Validators.required ]
    });
  }

  ngOnDestroy(): void {
  }
}
