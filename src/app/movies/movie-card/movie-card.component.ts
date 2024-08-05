import { Component, Input } from '@angular/core';
import { Movie } from '../service/movies.service';
import { CommonModule } from '@angular/common';
import { heroBanknotes } from '@ng-icons/heroicons/outline';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  viewProviders: [provideIcons({ heroBanknotes })],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Input() onReserve!: (id: string) => void;
}
