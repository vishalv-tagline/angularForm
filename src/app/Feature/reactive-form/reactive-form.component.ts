import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'
import { City, Country, State, Student } from 'src/app/common';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  studentData!: Student[];
  countryData!: Country[];
  stateData!: State[];
  cityData!: City[];

  public currentEditId: any;
  frmHeading: string = "Reactive Form";
  frmDetails: string = "Details";
  tableHeader: string[] = ['Id', 'First Name', 'Last Name', 'Gender', 'Date Of Birth', 'Mobile', 'Email', 'Country', 'State', 'City', 'Operations'];
  buttonName = "Submit";
  submitted: boolean = false;

  fillterState: State[] = [];
  fillterCity: City[] = [];

  public profileForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private commonService: CommonService) {

    this.profileForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      dateOfBirth: ["", [Validators.required]],
      mobile: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      address: this.formBuilder.group({
        country: ["", [Validators.required]],
        state: ["", [Validators.required]],
        city: ["", [Validators.required]]
      }),
      hobbies: this.formBuilder.array([
        this.formBuilder.control('', [Validators.required])
      ]),
      checkbox: [false, [Validators.requiredTrue]]
    });
  }

  get frmControl() {
    return this.profileForm.controls;
  }

  get addressVal() {
    return (this.frmControl['address'] as FormGroup).controls;
  }

  get hobbies() {
    return (this.frmControl['hobbies'] as FormArray);
  }

  addHobbie() {
    this.hobbies.push(this.formBuilder.control(''))
  }

  deleteHobbie(i: number) {
    this.hobbies.removeAt(i)
  }

  ngOnInit(): void {
    this.studentData = this.commonService.student
    this.countryData = this.commonService.countryLists
    this.stateData = this.commonService.stateLists
    this.cityData = this.commonService.cityLists
  }

  addStudent() {
    this.submitted = true;
    const address = this.profileForm.value.address;
    console.log('address :>> ', address);

    const countryId = address.country;
    const selectedCountry = this.countryData.find((country: Country) => country.id == countryId)

    const stateId = address.state;
    const selectedState = this.stateData.find((state: State) => state.id == stateId);

    const cityId = address.city
    const selectedCity = this.cityData.find((city: City) => city.id == cityId)

    console.log('selectedCountry :>> ', selectedCountry);
    console.log('selectedState :>> ', selectedState);
    console.log('selectedCity :>> ', selectedCity);

    // this.studentDatas.push(this.profileForm.value)
    if (this.profileForm.invalid) {
      return;
    }
    if (this.currentEditId > -1) {
      this.studentData[this.currentEditId] = {
        ...this.profileForm.value,
        address: {
          country: { ...selectedCountry },
          state: { ...selectedState },
          city: { ...selectedCity }
        }
      };
      console.log('this.studentData[this.currentEditId] :>> ', this.studentData[this.currentEditId]);
      this.submitted = false;
      this.currentEditId = -1
      this.profileForm.reset();
      this.buttonName = "Submit"
    }
    else {
      const addData = {
        ...this.profileForm.value,
        address: {
          country: { ...selectedCountry },
          state: { ...selectedState },
          city: { ...selectedCity }
        }
      }
      console.log('this.studentData :>> ', this.studentData);
      this.studentData.push(addData);
      console.log('addData :>> ', addData);
      this.profileForm.reset();
      this.submitted = false;
      this.buttonName = "Submit"

      // const addData: Student = {
      //   firstName: this.profileForm.value.firstName,
      //   lastName: this.profileForm.value.lastName,
      //   gender: this.profileForm.value.gender,
      //   dateOfBirth: this.profileForm.value.dateOfBirth,
      //   mobile: this.profileForm.value.mobile,
      //   email: this.profileForm.value.email,
      //   address: {
      //     country: selectedCountry!,
      //     state: selectedState!,
      //     city: selectedCity!
      //   }
      // }
      // console.log('this.profileForm.value :>> ', this.profileForm.value);
      // this.studentDatas.push(this.profileForm.value);
    }
  }

  onEdit(i: number) {
    this.currentEditId = i;
    // this.profileForm.setValue(this.studentData[i]);
    // this.profileForm.setValue({
    //   ...this.studentData[i]
    // })
    this.profileForm.patchValue(
      {
        ...this.studentData[i],
        address: {
          country: this.studentData[i].address.country.id,
          state: this.studentData[i].address.state.id,
          city: this.studentData[i].address.city.id
        }
      }
    )
    console.log('this.currentEditId :>> ', this.currentEditId);
    console.log('this.profileForm.value :>> ', this.profileForm.value);
    this.buttonName = "Update";
  }

  onDelete(i: number) {
    this.studentData.splice(i, 1)
  }

  populateState(value: any) {
    console.log('value :>> ', value);
    const ckCountryId = value.target.value;
    this.fillterState = this.stateData.filter(da => da.cId == ckCountryId);
    // console.log('this.fillterState :>> ', this.fillterState);
  }

  populateCity(value: any) {
    console.log('value :>> ', value);
    const ckStateId = value.target.value;
    this.fillterCity = this.cityData.filter(d => d.sId == ckStateId)
    // console.log('this.fillterState :>> ', this.fillterCity);
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
}
