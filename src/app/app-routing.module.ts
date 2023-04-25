import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterBuyerAdminComponent} from "./backOffice/register-buyer-admin/register-buyer-admin.component";
import {AllTemplateAdminComponent} from "./backOffice/all-template-admin/all-template-admin.component";
import {AllTemplateUserComponent} from "./frontOffice/all-template-user/all-template-user.component";
import {RegisterVendorAdminComponent} from "./backOffice/register-vendor-admin/register-vendor-admin.component";
import {RegisterProviderAdminComponent} from "./backOffice/register-provider-admin/register-provider-admin.component";
import {RegisterLivreurAdminComponent} from "./backOffice/register-livreur-admin/register-livreur-admin.component";
import {RegisterBuyerUserComponent} from "./frontOffice/register-buyer-user/register-buyer-user.component";
import {RegisterLivreurUserComponent} from "./frontOffice/register-livreur-user/register-livreur-user.component";
import {RegisterProviderUserComponent} from "./frontOffice/register-provider-user/register-provider-user.component";
import {RegisterVendorUserComponent} from "./frontOffice/register-vendor-user/register-vendor-user.component";
import {SendCodeUserComponent} from "./frontOffice/send-code-user/send-code-user.component";
import {HomeUserComponent} from "./frontOffice/home-user/home-user.component";
import {RegisterUserComponent} from "./frontOffice/register-user/register-user.component";
import {AuthenticationUserComponent} from "./frontOffice/authentication-user/authentication-user.component";
import {UploadLogoUserComponent} from "./frontOffice/upload-logo-user/upload-logo-user.component";
import {HomeBuyerUserComponent} from "./frontOffice/home-buyer-user/home-buyer-user.component";
import {ShowAdminComponent} from "./backOffice/show-admin/show-admin.component";
import {DashboardAdminComponent} from "./backOffice/dashboard-admin/dashboard-admin.component";
import {DetailsAdminComponent} from "./backOffice/details-admin/details-admin.component";

const routes: Routes = [
  {
    path:'admin', component:AllTemplateAdminComponent,
    children:[
      {path:'', component:DashboardAdminComponent},
      {path:'show', component:ShowAdminComponent},
      {path:'details/:id', component:DetailsAdminComponent},
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
      {path:'',component:HomeUserComponent},
      {path:'register',component:RegisterUserComponent},
      {path:'register-buyer',component:RegisterBuyerUserComponent},
      {path:'register-livreur',component:RegisterLivreurUserComponent},
      {path:'register-provider',component:RegisterProviderUserComponent},
      {path:'register-vendor',component:RegisterVendorUserComponent},
      {path:'send-code',component:SendCodeUserComponent},
      {path:'authenticate',component:AuthenticationUserComponent},
      {path:'upload-logo',component:UploadLogoUserComponent},
      {path:'home-buyer',component:HomeBuyerUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
