import { Component, OnInit } from '@angular/core';
import { Profile } from '../../Profile';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profiles: Array<Profile> = [];
  loading: boolean = true;
  colors: string[] = ['#ffdd09', '#05ffea', '#d92ff7', '#8bff1f'];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchProfiles();
  }

  fetchProfiles() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(profiles => {
        this.profiles = profiles;
        this.loading = false;
        this.dataService.setProfiles(profiles);
      })
      .catch(error => {
        console.error('Error fetching profiles:', error);
        this.loading = false; // Set loading to false even in case of error
      });
  }

  getColorByIndex(index: number): string {
    return this.colors[index % this.colors.length];
  }
}
