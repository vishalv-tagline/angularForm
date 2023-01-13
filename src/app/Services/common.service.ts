import { Injectable } from '@angular/core';
import { City, Country, State, Student } from '../common';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

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
    { id: 9, name: 'Vadodara', sId: 1 }
  ];

  student: Student[] = [
    {
      firstName: 'Variya',
      lastName: 'Vishal',
      gender: 'Male',
      dateOfBirth: '2003-02-10',
      mobile: '9924769731',
      email: 'vishal112@gmail.com',
      address: {
        country: {
          id: 1,
          name: 'India'
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
      }
    },
    {
      firstName: 'Tank',
      lastName: 'Parag',
      gender: 'Male',
      dateOfBirth: '2003-10-02',
      mobile: '8856544124',
      email: 'parag202@gmail.com',
      address: {
        country: {
          id: 2,
          name: 'USA'
        },
        state: {
          id: 4,
          name: 'Czech Village',
          cId: 2
        },
        city: {
          id: 4,
          name: 'Prague',
          sId: 4
        }
      }
    }
  ]
  constructor() { }
}
