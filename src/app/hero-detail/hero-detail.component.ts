import { Component, OnInit, Input } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //get currentSelectedHero from the parent app.component so we can use it
  @Input() currentSelectedHero: HeroComponent;

  constructor() { }

  ngOnInit() {
  }

}
