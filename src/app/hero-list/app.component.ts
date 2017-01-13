import { Component, OnInit  } from '@angular/core';

import { Hero } from './hero';

import { HeroService } from './services/hero.service';

@Component({
  providers: [HeroService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  heroes: Hero[];
  title = 'Tour of Heroes';
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // this.heroes = this.heroService.getHeroes();
  }
  // hero: Hero = {
  //     id: 1,
  //     name: "windstorm"
  // };

}

