import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';

import { Hero } from '../hero';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) { }

  search(term: string): Observable<Hero[]> {
    console.log("HeroSearchService searching term: ", term);
    return this.http
      .get(`app/heroes/?name=${term}`)
      .map(
        (r: Response) => {
          console.log("HeroSearchService searching response:", r);
          return r.json().data as Hero[];
        });
  }

}
