import { Injectable } from '@angular/core';
import { Profile } from './Profile';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  fetchProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        catchError(error => {
          console.error('Error fetching profiles:', error);
          return throwError('Something went wrong while fetching profiles.');
        })
      );
  }

  fetchProfileById(id: number): Observable<Profile> {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return this.http.get<Profile>(url)
      .pipe(
        catchError(error => {
          console.error(`Error fetching profile with id ${id}:`, error);
          return throwError('Something went wrong while fetching the profile.');
        })
      );
  }
}
