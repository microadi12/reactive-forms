import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-create-folio',
  templateUrl: './create-folio.component.html',
  styleUrls: ['./create-folio.component.scss']
})
export class CreateFolioComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  ngForm: any;



  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log('Aditya Singh')
    let user = {
      FirstName : this.firstName,
      LastName : this.lastName,
      Email : this.email,
      Password: this.password,
    }
    console.log(user);


   
  }

  

}
