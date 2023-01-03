import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Studs } from './common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularForm';

  @ViewChild('myForm') myForm!: NgForm;

  studs: Studs[] = [
    {
      fname: 'Variya',
      lname: 'Vishal',
      gender: 'Male',
      mobile: '9924769731',
      email: 'vishal11@gmail.com'
    },
    {
      fname: 'Maurya',
      lname: 'Arvindbhai',
      gender: 'Male',
      mobile: '985652251',
      email: 'arvind11@gmail.com'
    },
  ]

  addStud() {
    // console.log('myForms :>> ', this.myForm.value);
    this.studs.push(this.myForm.value)
    this.myForm.reset();
  }

  onUpdate(i: number) {

  }

  onDelete(i: number) {
    this.studs.splice(i, 1)
  }
}
