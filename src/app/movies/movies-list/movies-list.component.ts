import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { ConfirmRentalComponent } from '../confirm-rental/confirm-rental.component';
import { ModalComponent } from '../../shared/modal/modal.component';
import { Movie, MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, ModalComponent, ConfirmRentalComponent],
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];
  selectedMovieId: string | null = null;
  showConfirmRentalModal = false;
  showSuccessModal = false;
  leaseExpiresAt: Date | null = null;
  reservationId: string | null = null;
  showReservationModal = false;

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  reserveMovie(id: string): void {
    this.movieService.reserveMovie(id).subscribe((response: any) => {
      this.reservationId = response.reserveId;
      this.showReservationModal = true;
      this.ngOnInit();
    });
  }

  confirmRental(customer: { name: string; email: string; phone: string }) {
    if (this.reservationId) {
      this.movieService.leaseMovie(this.reservationId, customer).subscribe((response: any) => {
        this.leaseExpiresAt = new Date(response.leaseExpiresAt);
        this.showConfirmRentalModal = false;
        this.showSuccessModal = true;
        this.ngOnInit();
      });
    }
  }

  closeReservationModal() {
    this.showReservationModal = false;
    this.showConfirmRentalModal = true;
  }

  closeConfirmRentalModal() {
    this.showConfirmRentalModal = false;
  }

  closeSuccessModal() {
    this.showSuccessModal = false;
  }
}
