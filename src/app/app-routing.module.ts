import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeopleNgrxComponent } from './components/people-ngrx/people-ngrx.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // {
  //   path: 'people',
  //   pathMatch: 'full',
  //   loadChildren: () => import('./components/people/people.module').then((m) => m.PeopleModule)
  // },
  {
    path: 'people_ngrx',
    component: PeopleNgrxComponent
  },
  { path: 'people_ngrx/edit/:id', component: EditFormComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
