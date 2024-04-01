import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../../Profile';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  profiles: Profile[] = [];
  loading: boolean = true;
  selectedProfile: Profile | undefined;
  private profileSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.profiles = this.dataService.getProfiles();
      if (this.profiles.length === 0) {
        this.profileSubscription = this.dataService.fetchProfiles().subscribe((profiles: Profile[]) => {
          this.profiles = profiles;
          this.fetchSelectedProfile(params);
        });
      } else {
        this.fetchSelectedProfile(params);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
  }

  fetchSelectedProfile(params: any): void {
    const idParam: string | null = params.get('id');
    if (idParam) {
      const id: number = parseInt(idParam, 10);
      this.selectedProfile = this.profiles.find(profile => profile.id === id);
      this.loading = false;
    }
  }
}
