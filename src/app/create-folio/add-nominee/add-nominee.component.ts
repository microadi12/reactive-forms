import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { VariableAst } from "@angular/compiler";

@Component({
  selector: "app-add-nominee",
  templateUrl: "./add-nominee.component.html",
  styleUrls: ["./add-nominee.component.scss"]
})
export class AddNomineeComponent implements OnInit {
  myForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl("", Validators.required),
      relation: new FormControl("", Validators.required),
      dob: new FormControl("", Validators.required),
      allocation: new FormControl("", Validators.required)
    });

   this.setDate(); 
  }
  
  setDate() {
    this.myForm.patchValue({ dob: "1996-12-04" });
  }

  addNominee() {
    console.log(this.myForm);
    console.log(this.myForm.value.firstName);
    console.log(this.myForm.value.relation);
    console.log(this.myForm.value.dob);
    console.log(this.myForm.value.allocation);
    console.log(this.myForm.status);
    if(this.myForm.value.allocation < 100 || this.myForm.value.allocation > 100){
      window.alert('Allocation should be 100%')
    } else {
      window.alert('Great Congratulation!!!')
    }

    this.clearForm();
  }

  clearForm() {
    this.myForm.reset();
  }
 
}
