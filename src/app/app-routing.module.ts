import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Features/home/home.component';
import { ReactiveFormComponent } from './Features/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './Features/template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'templateDrivenForm',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'reactiveForm',
    component: ReactiveFormComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
