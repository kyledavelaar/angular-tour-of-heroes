import { Injectable } from '@angular/core';
import { HEROES } from './mock.heroes';
import { HeroComponent } from './hero/hero.component';

@Injectable()
export class HeroService {
  //use a promise here b/c when we get mock data from a server we have to make it async or else will get undefined when try to load data on page on initial render
  getHeroes(): Promise<HeroComponent[]> {
    return Promise.resolve(HEROES);
  }
}