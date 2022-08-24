import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { SimpleinterestComponent } from './components/simpleinterest/simpleinterest.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';


@NgModule({
  declarations: [
    AppComponent,
    DatatypesComponent,
    UserComponent,
    UsersComponent,
    DatabindingComponent,
    SimpleinterestComponent,
    NgstyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
