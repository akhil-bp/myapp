import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
import { UsertableComponent } from './usertable/usertable.component';
import { EditComponent } from './edit/edit.component';
=======
>>>>>>> 553c82f2fdde1bc824fa34dc417d2778b6fb2d10

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '', component: LoginComponent  },
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent,canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent,canActivate: [AuthGuard]},
<<<<<<< HEAD
  { path: 'usertable', component: UsertableComponent,canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'edit', component: EditComponent}
=======
  { path: 'register', component: RegisterComponent}
>>>>>>> 553c82f2fdde1bc824fa34dc417d2778b6fb2d10
   
  ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    AdminComponent,
    RegisterComponent,
<<<<<<< HEAD
    NavbarComponent,
    UsertableComponent,
    EditComponent
=======
    NavbarComponent
>>>>>>> 553c82f2fdde1bc824fa34dc417d2778b6fb2d10
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
