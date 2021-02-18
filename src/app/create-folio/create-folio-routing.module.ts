import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateFolioComponent } from "./create-folio.component";
import { AddNomineeComponent } from './add-nominee/add-nominee.component';

const routes: Routes = [
  { path: "", component: CreateFolioComponent },
  { path: "add-nominee", component: AddNomineeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateFolioRoutingModule {}
