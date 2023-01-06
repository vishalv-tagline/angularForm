import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { City, Country, State, Studs } from 'src/app/common';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  @ViewChild('myForm') myForm!: NgForm;
  public currentEditId: any;
  buttonName = "Submit"



  countryLists: Country[] = [
    { id: 1, name: 'India', },
    { id: 2, name: 'USA', },
    { id: 3, name: 'Srilanka', },
    { id: 4, name: 'Australia', },
    { id: 5, name: 'Afghanistan', },
    { id: 6, name: 'England', },
    { id: 7, name: 'South Africa', },
  ];

  stateLists: State[] = [
    { id: 1, name: 'Gujarat', cId: 1 },
    { id: 2, name: 'Goa', cId: 1 },
    { id: 3, name: 'Jharkhand', cId: 1 },
    { id: 4, name: 'Czech Village', cId: 2 },
    { id: 5, name: 'Colombo', cId: 3 },
    { id: 6, name: 'Ballina', cId: 4 },
    { id: 7, name: 'Bagrami', cId: 5 },
    { id: 8, name: 'Maharashtra', cId: 1 }
  ];

  cityLists: City[] = [
    { id: 1, name: 'Surat', sId: 1 },
    { id: 2, name: 'Margo', sId: 2 },
    { id: 3, name: 'Rachi', sId: 3 },
    { id: 4, name: 'Prague', sId: 4 },
    { id: 5, name: 'Colombo', sId: 5 },
    { id: 6, name: 'New south wall', sId: 6 },
    { id: 7, name: 'Bagrami', sId: 7 },
    { id: 8, name: 'Mumbai', sId: 8 },
  ];

  fillterState: State[] = [];
  fillterCity: City[] = [];

  populateState(value: any) {
    console.log('value :>> ', value);
    const ckCountryId = value.target.value;
    this.fillterState = this.stateLists.filter(da => da.cId == ckCountryId);
    console.log('this.fillterState :>> ', this.fillterState);
  }

  populateCity(value: any) {
    console.log('value :>> ', value);
    const ckStateId = value.target.value;
    this.fillterCity = this.cityLists.filter(d => d.sId == ckStateId)
    console.log('this.fillterState :>> ', this.fillterCity);
  }

  selectCity(value: any) {
    console.log('value :>> ', value);
  }

  // cityList: string[] = ['Surat', 'Ahamdabad', 'Rajkot', 'Vadodara', 'Bhruch', 'Mumbai', 'Delhi'];
  // stateList: string[] = ['Gujarat', 'U.P', 'Maharashra', 'Hydrabad', 'Kolkata', 'Delhi'];
  // countryList: string[] = ['India', 'U.S.A', 'England', 'Australia', 'Srilanka']

  students: Studs[] = [
    {
      fname: 'Variya',
      lname: 'Vishal',
      gender: 'Male',
      address: {
        country: {
          id: 1,
          name: 'India',
        },
        state: {
          id: 1,
          name: 'Gujarat',
          cId: 1
        },
        city: {
          id: 1,
          name: 'Surat',
          sId: 1
        }
      },
      mobile: '9924769731',
      email: 'vishal11@gmail.com'
    },
    {
      fname: 'Maurya',
      lname: 'Arvindbhai',
      gender: 'Male',
      address: {
        country: {
          id: 1,
          name: 'India',
        },
        state: {
          id: 1,
          name: 'Gujarat',
          cId: 1
        },
        city: {
          id: 1,
          name: 'Surat',
          sId: 1
        }
      },
      mobile: '9856522513',
      email: 'arvind11@gmail.com'
    }
  ]

  addStud() {
    if (this.myForm.invalid) {
      return
    }
    if (this.currentEditId > -1) {
      this.students[this.currentEditId] = this.myForm.value
      this.currentEditId = -1
    }
    else {
      // console.log('object :>> ', this.myForm);
      this.students.push(this.myForm.value);
    }
    console.log('this.students :>> ', this.students);
    console.log('myForms :>> ', this.myForm.value);
    this.myForm.reset();
    this.buttonName = "Submit"
  }

  onUpdate(i: number) {
    this.currentEditId = i
    console.log('this.studs :>> ', this.students);
    this.myForm.setValue(this.students[i])
    this.buttonName = "Update"
    // console.log('this.studs :>> ', this.studs[i]);
    // this.studs.splice(this.studs.indexOf(), 1, this.myForm.setValue(this.studs[i]))
    // this.newStuds = this.studs.map((data) => {
    // });
    // console.log('i :>> ', this.studs[i]);
  }

  onDelete(i: number) {
    this.students.splice(i, 1)
  }

  alphabateNotallowed(data: any): void {
    if (data.keyCode >= 65 && data.keyCode <= 96) {
      data.prevantDefault();
    }
    else if (data.keyCode >= 97 && data.keyCode <= 122) {
      data.prevantDefault();
    }
    else if (data.keyCode == 42 && 43 && 45 && 47) {
      data.prevantDefault();
    }
  }


  ngOnInit(): void {
  }

}
