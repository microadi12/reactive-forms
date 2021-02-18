import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-nominee',
  templateUrl: './add-nominee.component.html',
  styleUrls: ['./add-nominee.component.scss']
})
export class AddNomineeComponent implements OnInit {

  @Input() data : any;
  @Output() dataDetails = new EventEmitter();

  constructor() { }

  ngOnInit() {
  
    console.log('Its works');

  }

}
