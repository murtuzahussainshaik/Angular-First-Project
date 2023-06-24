import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'student-form', component: StudentFormComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: '', redirectTo: '/student-login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    StudentFormComponent,
    AdminDashboardComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
