import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: "domfarr.eu.auth0.com",
      clientId: "saaM8PGeI93vOxRsFpcSe8P5E3yTz6r7"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
