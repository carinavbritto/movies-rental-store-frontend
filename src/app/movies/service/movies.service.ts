import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/service/auth.service';
import { environment } from '../../../../environment';

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
  private apiUrl = `${environment.apiUrl}/movies`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie, { headers: this.getAuthHeaders() });
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
    return this.http.put<Movie>(`${this.apiUrl}/${id}`, movie, { headers: this.getAuthHeaders() });
  }

  deleteMovie(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}
