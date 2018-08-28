import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FileSelectDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UsertableComponent } from './usertable/usertable.component';
import { EditComponent } from './edit/edit.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: LoginComponent  },
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent,canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent,canActivate: [AuthGuard]},
  { path: 'usertable', component: UsertableComponent,canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'edit', component: EditComponent,canActivate: [AuthGuard]},
   
  ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    AdminComponent,
    RegisterComponent,
    NavbarComponent,
    UsertableComponent,
    EditComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    Ng2SearchPipeModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
