import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-drive-viewer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './drive-viewer.component.html',
  styleUrl: './drive-viewer.component.scss'
})
export class DriveViewerComponent {

  constructor(private http: HttpClient, private router: Router) {
  }
  getDocuments() {
  //  this.http.get('https://localhost:7160/api/tasks').subscribe();
     window.open('https://localhost:7160/api/tasks'); // Redirect to your server
    // this.router.navigate(['https://localhost:7160/api/tasks']).then()
  }

  getDocuments2() {
      this.http.get('https://localhost:7160/api/tasks/alltasks').subscribe();
  }
}
