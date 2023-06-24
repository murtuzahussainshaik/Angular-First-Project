import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css'],
})
export class StudentLoginComponent {
  username: string;
  password: string;

  constructor(private router: Router) {}

  login() {
    // Perform authentication logic here, such as checking credentials
    // For simplicity, let's assume any non-empty username and password is valid

    if (this.username && this.password) {
      this.router.navigate(['/student-form']);
    }
  }
}
