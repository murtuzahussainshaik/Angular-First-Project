import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  outpassRequests: any[];

  ngOnInit() {
    this.loadRequests();
  }

  loadRequests() {
    const existingRequests = localStorage.getItem('outpassRequests');
    this.outpassRequests = existingRequests ? JSON.parse(existingRequests) : [];
  }

  acceptOutpass(request: any) {
    const updatedRequests = this.outpassRequests.map((item) => {
      if (item.name === request.name && item.reason === request.reason) {
        return { ...item, status: 'Accepted' };
      }
      return item;
    });

    this.outpassRequests = updatedRequests;
    localStorage.setItem(
      'outpassRequests',
      JSON.stringify(this.outpassRequests)
    );

    // Notify the student
    alert(
      'Outpass accepted. Notification sent to the student: ' + request.name
    );
  }

  clearLocalStorage() {
    localStorage.removeItem('outpassRequests');
    this.outpassRequests = [];
    alert('LocalStorage cleared.');
  }
}
