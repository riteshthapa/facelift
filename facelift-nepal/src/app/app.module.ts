import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    OwlModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    RecaptchaModule,  //this is the recaptcha main module
    RecaptchaFormsModule, //this is the module for form incase form validation
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    } as RecaptchaSettings,
  }]
})
export class AppModule { }
