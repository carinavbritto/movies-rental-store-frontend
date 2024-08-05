import { Component } from '@angular/core';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './shared/hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'movie-rental-store';
}
