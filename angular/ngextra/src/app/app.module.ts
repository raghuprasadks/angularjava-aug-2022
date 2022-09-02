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
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { LifecycleparentComponent } from './components/lifecycleparent/lifecycleparent.component';
import { LifecyclechildComponent } from './components/lifecyclechild/lifecyclechild.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    ReactiveFormValidationComponent,
    NgclassdemoComponent,
    NgswitchdemoComponent,
    PipesdemoComponent,
    ExponentialStrengthPipe,
    SearchFilterPipe,
    SearchComponent,
    LifecycleparentComponent,
    LifecyclechildComponent,
    PostsComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
