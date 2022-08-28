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
import { TemplateformComponent } from './components/templateform/templateform.component';
import { TodosComponent } from './components/todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { PromiseComponent } from './components/promise/promise.component';
import { DemoComponent } from './components/demo/demo.component';
import { CompanyComponent } from './components/company/company.component';
import { CompaniesComponent } from './components/companies/companies.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatypesComponent,
    UserComponent,
    UsersComponent,
    DatabindingComponent,
    SimpleinterestComponent,
    NgstyleComponent,
    TemplateformComponent,
    TodosComponent,
    ParentComponent,
    ChildComponent,
    DummyComponent,
    PromiseComponent,
    DemoComponent,
    CompanyComponent,
    CompaniesComponent
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
