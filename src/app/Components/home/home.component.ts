import { Component, OnInit, OnDestroy } from '@angular/core';
import { Profile } from '../../Profile';
import { ProfileService } from '../../profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  profiles: Profile[] = [];
  loading: boolean = true;
  colors: string[] = ['#ffdd09', '#05ffea', '#d92ff7', '#8bff1f'];
  private profilesSubscription: Subscription | undefined;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.fetchProfiles();
  }

  ngOnDestroy(): void {
    if (this.profilesSubscription) {
      this.profilesSubscription.unsubscribe();
    }
  }

  fetchProfiles() {
    this.profilesSubscription = this.profileService.fetchProfiles().subscribe({
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
