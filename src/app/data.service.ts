import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './Profile';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private profiles: Profile[] = [];

  constructor(private http: HttpClient) {}

  setProfiles(profiles: Profile[]) {
    this.profiles = profiles;
  }

  getProfiles(): Profile[] {
    return this.profiles;
  }

  fetchProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>('https://jsonplaceholder.typicode.com/users');
  }
}
