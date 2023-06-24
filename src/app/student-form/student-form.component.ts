import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  name: string;
  reason: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  submitForm() {
    const outpassRequest = {
      name: this.name,
      reason: this.reason,
      status: 'Pending',
    };

    // Retrieve existing outpass requests from localStorage
    const existingRequests = localStorage.getItem('outpassRequests');
    const requests = existingRequests ? JSON.parse(existingRequests) : [];

    // Add the new outpass request
    requests.push(outpassRequest);

    // Save the updated requests in localStorage
    localStorage.setItem('outpassRequests', JSON.stringify(requests));

    alert('Outpass request submitted successfully.');

    this.name = '';
    this.reason = '';

    // Navigate to the admin dashboard
    this.router.navigate(['/admin-dashboard']);
  }
}
