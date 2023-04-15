import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterAdminComponent} from "./backOffice/register-admin/register-admin.component";
import {RegisterUserComponent} from "./frontOffice/register-user/register-user.component";
import {AllTemplateAdminComponent} from "./backOffice/all-template-admin/all-template-admin.component";
import {AllTemplateUserComponent} from "./frontOffice/all-template-user/all-template-user.component";

const routes: Routes = [
  {
    path:'admin', component:AllTemplateAdminComponent,
    children:[
      {path:'register', component:RegisterAdminComponent}
    ]

  },
  {
    path:'user',
    component: AllTemplateUserComponent,
    children:[
      {path:'register',component:RegisterUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
