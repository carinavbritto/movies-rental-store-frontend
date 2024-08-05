import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';
import { heroArrowRightOnRectangle, heroUsers } from '@ng-icons/heroicons/outline';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgIconComponent],
  viewProviders: [provideIcons({ heroArrowRightOnRectangle, heroUsers })],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
