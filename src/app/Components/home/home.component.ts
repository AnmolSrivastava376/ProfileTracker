import { Component, OnInit, OnDestroy } from '@angular/core';
import { Profile } from '../../Profile';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  profiles: Array<Profile> = [];
  loading: boolean = true;
  colors: string[] = ['#ffdd09', '#05ffea', '#d92ff7', '#8bff1f'];
  private profilesSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.fetchProfiles();
  }

  ngOnDestroy(): void {
    if (this.profilesSubscription) {
      this.profilesSubscription.unsubscribe();
    }
  }

  fetchProfiles() {
    const profilesObservable = new Observable<Profile[]>(observer => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(profiles => {
          observer.next(profiles);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });

    this.profilesSubscription = profilesObservable.subscribe({
      next: (profiles: Profile[]) => {
        this.profiles = profiles;
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Error fetching profiles:', error);
        this.loading = false;
      }
    });
  }

  getColorByIndex(index: number): string {
    return this.colors[index % this.colors.length];
  }
}
