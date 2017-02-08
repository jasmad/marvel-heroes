import { Injectable } from '@angular/core';

import { Hero } from '../hero';
// import { HEROES } from './mock-heroes';
import { Headers, Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

// import {md5} from 'blueimp-md5';


@Injectable()
export class HeroService {
  private marvelBaseUrl = 'https://gateway.marvel.com/';
  private heroesUrl = 'api/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});
  // private readonly heroViewEditUrl = `${this.heroesUrl}/${id}`;

  constructor(private http: Http) { }

  getCurrentTimestamp(): number{
    return new Date().valueOf();
  }

  getHeroes(): Promise<Hero[]> {

    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => {
        console.log("getHeroes response: ", response);
        return response.json().data as Hero[];
      })
      .catch(this.handleError);
    // return Promise.resolve(HEROES);
  }

  private handleError(error:any): Promise<any> {
    console.error('HeroService Error:', error);
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
    // return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}),
        {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
