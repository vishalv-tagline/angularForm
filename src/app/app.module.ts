import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './Features/template-driven-form/template-driven-form.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './Features/home/home.component';
import { ReactiveFormComponent } from './Features/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    NavbarComponent,
    HomeComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
