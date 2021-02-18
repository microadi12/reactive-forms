import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateFolioRoutingModule } from './create-folio-routing.module';
import { CreateFolioComponent } from './create-folio.component';
import { AddNomineeComponent } from './add-nominee/add-nominee.component';


@NgModule({
  declarations: [CreateFolioComponent, AddNomineeComponent],
  imports: [
    CommonModule,
    CreateFolioRoutingModule
  ]
})
export class CreateFolioModule { }
