import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../model/profile.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  profile : Profile[];
  checkOut = ['aditya', 'virendra' ,'singh']
  editForm : FormGroup;
  skills = new FormArray([
    
  ]);
  data: any;
   
   
  
  constructor() { }

  ngOnInit() {
    this.addSkills();
    console.log(this.profile);
    // console.log(this.profile.page);
  }



  addSkills(){
    // this.skills.push(new FormControl('')); added directly formControl in FormArray;
    // console.log(this.skills.controls);
    // Below we learn How to use FormGroup Object in FoemArray

    this.editForm = new FormGroup({
      firstName : new FormControl(''),
      lastName : new FormControl('')
    })
    this.skills.push(this.editForm);
  }
  submit(){
    let userdata = {
      firstName : this.editForm.value.firstName,
      lastName : this.editForm.value.lastName
    }
    console.log(userdata);
  }

  removeSkills(index : number){
    this.skills.removeAt(index);

  }
  
  clearSkills(){
    this.skills.clear();
  }

  showData(event : any) {
   this.data = event
   console.log(this.data);
  }

}
