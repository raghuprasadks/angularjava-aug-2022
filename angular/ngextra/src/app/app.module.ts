import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormValidationComponent } from './components/reactive-form-validation/reactive-form-validation.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import { NgswitchdemoComponent } from './components/ngswitchdemo/ngswitchdemo.component';
import { PipesdemoComponent } from './components/pipesdemo/pipesdemo.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    ReactiveFormValidationComponent,
    NgclassdemoComponent,
    NgswitchdemoComponent,
    PipesdemoComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
