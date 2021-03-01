import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  editForm : FormGroup;
  skills = new FormArray([
    
  ]);
   
   
  
  constructor() { }

  ngOnInit() {
    this.addSkills();
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
}
