import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//el header y el footer
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
//--------------------------------------------------
//import { TucuentaModule } from './tucuenta/tucuenta.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//imports de componentes
import { SignupComponent } from './signup/signup.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { TucuentaComponent } from './tucuenta/tucuenta.component';
import { WelcomeComponent } from './welcome/welcome.component';

//import { CtrlGastosServiceService } from './ctrl-gastos-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    PrincipalComponent,
    LoginComponent,
    TucuentaComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,    
    HttpClientModule,
    FormsModule    
  ],
  //CtrlGastosServiceService
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
