import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Movie, MoviesService } from '../movies/service/movies.service';

@Component({
  selector: 'app-cms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cms.component.html',
  styleUrl: './cms.component.scss'
})

export class CmsComponent implements OnInit {
  isLoggedIn = false;
  movies: Movie[] = [];
  movieForm: FormGroup;
  selectedMovieId: string | null = null;

  constructor(private fb: FormBuilder, private movieService: MoviesService) {
    this.movieForm = this.fb.group({
      name: ['', Validators.required],
      synopsis: ['', Validators.required],
      rating: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

  handleLoginSuccess() {
    this.isLoggedIn = true;
    this.loadMovies();
  }

  onSubmit() {
    if (this.movieForm.valid) {
      const movieData = this.movieForm.value;
      if (this.selectedMovieId) {
        this.movieService.updateMovie(this.selectedMovieId, movieData).subscribe(() => {
          this.loadMovies();
          this.movieForm.reset();
          this.selectedMovieId = null;
        });
      } else {
        this.movieService.createMovie(movieData).subscribe(() => {
          this.loadMovies();
          this.movieForm.reset();
        });
      }
    }
  }

  editMovie(movie: Movie) {
    this.selectedMovieId = movie._id;
    this.movieForm.patchValue(movie);
  }

  deleteMovie(id: string) {
    this.movieService.deleteMovie(id).subscribe(() => {
      this.loadMovies();
    });
  }
}
