import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor(private heroService: HeroService){}

  //typescript declaring what type is expected here.  first the heroComponent array and then just the heroComponent
  heroes: HeroComponent[];
  selectedHero: HeroComponent;

  getHeroes(): void {
    //IF WE DIDN'T USE A PROMISE (SCYNC);
    // this.heroes = this.heroService.getHeroes();
    
    //since using a promise in hero.service, this.heroes is now type "promise" so have to treat heroService.getHeroes() as returning a promise and not an array
    this.heroService.getHeroes()
      .then((heroesFromPromise) => {
        this.heroes = heroesFromPromise;
      })
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: HeroComponent): void {
    this.selectedHero = hero;
  }
}
