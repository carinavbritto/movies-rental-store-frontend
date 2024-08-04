import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  _id: string;
  name: string;
  synopsis: string;
  rating: string;
  status: string;
  leaseExpiresAt?: Date;
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'http://localhost:3000/api/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie);
  }

  reserveMovie(movieId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/reserve`, { movieId });
  }

  leaseMovie(reserveId: string, customer: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/lease`, { reserveId, customer });
  }

  returnMovie(scheduleId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/return`, { scheduleId });
  }

  updateMovie(id: string, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiUrl}/${id}`, movie);
  }

  deleteMovie(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
