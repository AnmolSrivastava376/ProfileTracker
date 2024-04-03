import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../Profile';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.css'
})
export class CardComponentComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() profile : Profile | undefined;
  @Input() color : String | undefined;
}
