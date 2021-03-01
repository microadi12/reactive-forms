import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  
  addInfo : FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addInfo = this.fb.group({
      firstName : [''],
      lastName : [''],
      address : this.fb.array([this.addAddressForm()])
    })
  }

  
  addAddressForm(){
    return this.fb.group({
      blockNo: [''],
      street : [''],
      city : [''],
      state: [''],
      pincode: ['']
    })
  }

  get addressArray(){
    return <FormArray>this.addInfo.get('address');
  }

  addAddress(){
    this.addressArray.push(this.addAddressForm());
  }

  addForm(){
    console.log(this.addInfo.value);
  }

  removeAddress(index : number){
    this.addressArray.removeAt(index);
  }
}
