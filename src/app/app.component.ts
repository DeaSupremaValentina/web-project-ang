import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-project-ang';
  showSidebar = false;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
