import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import {CharacterModel} from "../../datamodel/impl/CharacterModel";
// import {CharacterDataWrapperModel} from "../../datamodel/impl/CharacterDataWrapperModel";
import {Http, Headers, Response, RequestOptions, URLSearchParams, RequestOptionsArgs} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import {CharacterDataWrapperModel} from "../../datamodel/impl/CharacterDataWrapperModel";
import {CharacterDataContainerModel} from "../../datamodel/impl/CharacterDataContainerModel";

@Injectable()
export class CharacterService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: Http) { }

  getCurrentTimestamp(): number{
    return Date.now();
  }

  getGeneralHeaders(): Headers
  {
    let headers = new Headers();
    headers.append("Accept", "*/*");
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  getCharacters(): Observable<CharacterDataWrapperModel>//Promise<CharacterModel>
  {
    // http://gateway.marvel.com/v1/public/characters?apikey=d99ccfb4a9a727319cec923a94546a9e&ts=1&hash=888c9c7d308d67bdb3aa1a30533cbb42
    // http://gateway.marvel.com/v1/public/characters?apikey=d99ccfb4a9a727319cec923a94546a9e&ts=1&hash=888c9c7d308d67bdb3aa1a30533cbb42
    // 888c9c7d308d67bdb3aa1a30533cbb42
    // 888c9c7d308d67bdb3aa1a30533cbb42
    // 888c9c7d308d67bdb3aa1a30533cbb42

    let md5 = require("blueimp-md5");
    let currentTimestamp: string = this.getCurrentTimestamp().toString();
    console.log("currentTimestamp", currentTimestamp);
    console.log("environment.publicKey", environment.publicKey);
    console.log("environment.privateKey", environment.privateKey);

    let hashConcat = currentTimestamp + environment.privateKey + environment.publicKey;
    console.log('hashConcat: ', hashConcat);
    let hash: string = md5(hashConcat);
    console.log('hash: ', hash);
    const charactersUrl = this.apiBaseUrl + 'characters';
    console.log('charactersUrl:', charactersUrl);
    const search: URLSearchParams = new URLSearchParams();
    search.set("apikey", "d99ccfb4a9a727319cec923a94546a9e");
    search.set("ts", currentTimestamp);
    search.set("hash", hash);
    console.log("search", search);
    const reqOpts = new RequestOptions({search: search, headers: this.getGeneralHeaders()});
    return this.http.get(charactersUrl, reqOpts)
      .map((res:Response) => {
        console.log("CharacterService getting Heroes response: ", (res.json() as CharacterDataWrapperModel));
        return (res.json() as CharacterDataWrapperModel);
      })
      .catch((error:any) => {
        return Observable.throw(error.json() || 'Server error');
      });
      // .toPromise()
      // .then(response => {
      //   console.log("CharacterService getting Heroes response: ", response);
      //   return response.json().data as CharacterDataWrapperModel;
      // })
      // .catch(this.handleError);
  }

  private handleError(error:any): Promise<any> {
    console.error('CharacterService Error:', error);
    return Promise.reject(error.message || error);
  }

}
