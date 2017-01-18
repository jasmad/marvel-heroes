import { Component, OnInit  } from '@angular/core';

import { Hero } from '../hero';

import { HeroService } from '../services/hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  heroes: Hero[];
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

