import { Component, OnInit } from "@angular/core";
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"]
})
export class FormsComponent implements OnInit {

  valueChangeTracked = '';
  editForm: FormGroup; //Give same name as given in a html Template.
  constructor(private formBuilder: FormBuilder) {
    // this.editForm = formBuilder.group({  // Building the form using formBuilder
    //   firstName: new FormControl(), // in the formBuilder - we are cerating a group of form elements these are exactly same as form template
    //   lastName: new FormControl()
    // });

    this.editForm = formBuilder.group({  // Building the form using formBuilder
      firstName: ['',[Validators.required, Validators.email]], // in the formBuilder - we are cerating a group of form elements these are exactly same as form template
      lastName: ['', Validators.required],
      checkbox: ['', Validators.requiredTrue],
      // items : this.formBuilder.array         ([
      //   this.formBuilder.group({
      //     itemId : ['1'],
      //     itemName : ['Aditya'],
      //     itemDesc : ['Singh'],
      //     itemDone : ['', Validators.requiredTrue]

      //   })
      // ]),
      // cars : this.formBuilder.array([
      //     new FormControl('Angular'),
      //     new FormControl('React'),
      // ])
    });
  }

  ngOnInit(): void {
    // this.editForm.setValue({ //Using the setValue method - we are setting entire FORM value
    //   firstName: 'abc@test.com',
    //   lastName: 'lastName',
    //   checkbox: true
    // }); // we cannot omit or leave the fields

    this.editForm.get('firstName').valueChanges.subscribe(data => { //
     this.valueChangeTracked = data
    })
    
    //the difference is whenever there is any changes in any Form Control
    this.editForm.valueChanges.subscribe(data => {
      console.log(data)
    })
     
    // Dynamically we capture the status of validation of the form indiviual field.
    this.editForm.get('firstName').statusChanges.subscribe(data => {
      console.log(data)
    })
  
    // Dynamically we capture the status of validation of the entire form.
    this.editForm.statusChanges.subscribe(data => {
      console.log(data)
    })


    this.editForm.patchValue({ //Using the patchValue method - we are setting entire FORM value
      firstName: 'abc@test.com',
      lastName: 'lastName',
      // checkbox: true
    });
  }

  onSubmit() {
    console.log(this.editForm); // we are getting entire form value using this
    console.log(this.editForm.value); // this will give all forms value
    console.log(this.editForm.value.firstName);
    console.log(this.editForm.value.lastName); // using this we get the read the indiviual value.
    console.log(this.editForm.value.checkbox);

    // this.resetForm();
    // Set value 
    // in reactive forms we set the value using 2 type 1st is setValue() & 2nd is patchValue()
    // we can set the value of entire form using setValue();
    //
  }

  resetForm() {
    this.editForm.reset(); //we will use the reset() to reset entire form in one shot;
    
  }
}


// 1 Form Control 
//   - Any form field in your form becomes a FormControl
// 2 Group multiples of FormControls
//   FormGroup    
// FormArray [formControl , formControl]
// FormArray [formGroup , formGroup]

// formArray is a collection of some formcontrols
// formArray is collection have formgroup this formgroup have multiple formcontrols
