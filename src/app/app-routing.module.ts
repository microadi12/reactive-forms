import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsComponent } from "../app/forms/forms.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/forms" },
  { path: "forms", component: FormsComponent },
  {
    path: "create-folio",
    loadChildren: () =>
      import("./create-folio/create-folio.module").then(
        m => m.CreateFolioModule
      )
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
