import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterBuyerAdminComponent} from "./backOffice/register-buyer-admin/register-buyer-admin.component";
import {RegisterUserComponent} from "./frontOffice/register-user/register-user.component";
import {AllTemplateAdminComponent} from "./backOffice/all-template-admin/all-template-admin.component";
import {AllTemplateUserComponent} from "./frontOffice/all-template-user/all-template-user.component";
import {RegisterVendorAdminComponent} from "./backOffice/register-vendor-admin/register-vendor-admin.component";
import {RegisterProviderAdminComponent} from "./backOffice/register-provider-admin/register-provider-admin.component";
import {RegisterLivreurAdminComponent} from "./backOffice/register-livreur-admin/register-livreur-admin.component";

const routes: Routes = [
  {
    path:'admin', component:AllTemplateAdminComponent,
    children:[
      {path:'register-buyer', component:RegisterBuyerAdminComponent},
      {path:'register-vendor', component:RegisterVendorAdminComponent},
      {path:'register-provider', component:RegisterProviderAdminComponent},
      {path:'register-livreur', component:RegisterLivreurAdminComponent}
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
