import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../../Profile';
import { Subscription } from 'rxjs';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  selectedProfile: Profile | undefined;
  loading: boolean = true;
  private profileSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam: string | null = params.get('id');
      if (idParam) {
        const id: number = parseInt(idParam, 10);
        this.loading = true;
        this.profileSubscription = this.profileService.fetchProfileById(id).subscribe((profile: Profile) => {
          this.selectedProfile = profile;
          this.loading = false;
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
  }
}
