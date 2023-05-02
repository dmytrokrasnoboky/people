import { NgModule } from '@angular/core';
import { PeopleComponent } from './people.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditFormComponent } from '../edit-form/edit-form.component';

const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'edit/:id', component: EditFormComponent },
];

@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [PeopleComponent]
})
export class PeopleModule {}
