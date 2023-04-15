import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { MenuAdminComponent } from './backOffice/menu-admin/menu-admin.component';
import { NavbarAdminComponent } from './backOffice/navbar-admin/navbar-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { NavbarUserComponent } from './frontOffice/navbar-user/navbar-user.component';
import { BannerUserComponent } from './frontOffice/banner-user/banner-user.component';
import { FooterUserComponent } from './frontOffice/footer-user/footer-user.component';
import { RegisterUserComponent } from './frontOffice/register-user/register-user.component';
import { RegisterBuyerAdminComponent } from './backOffice/register-buyer-admin/register-buyer-admin.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RegisterVendorAdminComponent } from './backOffice/register-vendor-admin/register-vendor-admin.component';
import { RegisterProviderAdminComponent } from './backOffice/register-provider-admin/register-provider-admin.component';
import { RegisterLivreurAdminComponent } from './backOffice/register-livreur-admin/register-livreur-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateAdminComponent,
    AllTemplateUserComponent,
    MenuAdminComponent,
    NavbarAdminComponent,
    FooterAdminComponent,
    NavbarUserComponent,
    BannerUserComponent,
    FooterUserComponent,
    RegisterUserComponent,
    RegisterBuyerAdminComponent,
    RegisterVendorAdminComponent,
    RegisterProviderAdminComponent,
    RegisterLivreurAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
