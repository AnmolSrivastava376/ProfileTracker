import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../../Profile';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  profiles: Profile[] = [];
  loading: boolean = true;
  selectedProfile: Profile | undefined;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.profiles = this.dataService.getProfiles();
      if (this.profiles.length === 0) {
        // Fetch profiles from API if profiles array is empty
        this.dataService.fetchProfiles().subscribe((profiles: Profile[]) => {
          this.profiles = profiles;
          this.fetchSelectedProfile();
        });
      } else {
        this.fetchSelectedProfile();
      }
    });
  }
  fetchSelectedProfile(): void {
    this.route.paramMap.subscribe(params => {
      const idParam: string | null = params.get('id');
      if (idParam) {
        const id: number = parseInt(idParam, 10);
        this.selectedProfile = this.profiles.find(profile => profile.id === id);
        this.loading = false;
        console.log(this.selectedProfile);
      }
    });
  }
}
