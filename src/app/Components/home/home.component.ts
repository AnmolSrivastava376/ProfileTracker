import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchProfiles();
  }

  fetchProfiles() {
    this.http.get<Profile[]>('https://jsonplaceholder.typicode.com/users') 
      .subscribe(profiles => {
        this.profiles = profiles;
        this.loading = false;
        this.dataService.setProfiles(profiles);
      });
  }
  getColorByIndex(index: number): string {
    return this.colors[index % this.colors.length];
  }
}
