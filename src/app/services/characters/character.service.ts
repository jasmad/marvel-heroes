import { Injectable } from '@angular/core';

import {Http, Response, URLSearchParams} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import {CharacterDataWrapperModel} from "../../datamodel/impl/CharacterDataWrapperModel";
import {BaseApiAccessService} from "../base-api-access/base-api-access.service";

@Injectable()
export class CharacterService extends BaseApiAccessService
{
  currentPage: number = 1;

  urlFragment: string = null;

  constructor(http: Http) {
    super(http);
  }

  protected getUrlFragment(): string {
    return (null != this.urlFragment && this.urlFragment.length > 0 ) ? this.urlFragment : '';
  }

  protected setUrlFragment(fragment: string): void
  {
    this.urlFragment = fragment;
  }

  protected getEntityType(): string {
    return 'characters';
  }

  protected getSearchParams(): URLSearchParams {
    if(!this.currentPage)
    {
      this.currentPage = 1;
    }
    let limit: number = 20;
    let offset: number = this.currentPage > 1 ? this.currentPage * limit : 0;
    let search: URLSearchParams = new URLSearchParams();
    search.set("offset", offset.toString());
    search.set("limit", limit.toString());
    return search;
  }

  getCharacters(page?: number): Observable<CharacterDataWrapperModel>
  {
    this.setUrlFragment('');
    this.currentPage = page;
    return this.getResource()
      .map((res:Response) => {
        console.log("CharacterService getting Heroes response: ", (res.json() as CharacterDataWrapperModel));
        return (res.json() as CharacterDataWrapperModel);
      })
      .catch((error:any) => {
        return Observable.throw(error.json() || 'Server error');
      });
  }

}

// OLD VERSION
// @Injectable()
// export class CharacterService {
//
//   private apiBaseUrl = environment.apiBaseUrl;
//
//   constructor(private http: Http) { }
//
//   private getCurrentTimestamp(): number{
//     return Date.now();
//   }
//
//   private getGeneralHeaders(): Headers
//   {
//     let headers = new Headers();
//     headers.append("Accept", "*/*");
//     headers.append('Content-Type', 'application/json');
//     return headers;
//   }
//
//   getCharacters(page?: number): Observable<CharacterDataWrapperModel>//Promise<CharacterModel>
//   {
//     if(!page)
//     {
//       page = 1;
//     }
//     // http://gateway.marvel.com/v1/public/characters?apikey=d99ccfb4a9a727319cec923a94546a9e&ts=1&hash=888c9c7d308d67bdb3aa1a30533cbb42
//     // http://gateway.marvel.com/v1/public/characters?apikey=d99ccfb4a9a727319cec923a94546a9e&ts=1&hash=888c9c7d308d67bdb3aa1a30533cbb42
//     // 888c9c7d308d67bdb3aa1a30533cbb42
//     // 888c9c7d308d67bdb3aa1a30533cbb42
//     // 888c9c7d308d67bdb3aa1a30533cbb42
//     let limit: number = 20;
//     let offset: number = page > 1 ? page * limit : 0;
//
//     let md5 = require("blueimp-md5");
//     let currentTimestamp: string = this.getCurrentTimestamp().toString();
//     console.log("currentTimestamp", currentTimestamp);
//     console.log("environment.publicKey", environment.publicKey);
//     console.log("environment.privateKey", environment.privateKey);
//
//     let hashConcat = currentTimestamp + environment.privateKey + environment.publicKey;
//     console.log('hashConcat: ', hashConcat);
//     let hash: string = md5(hashConcat);
//     console.log('hash: ', hash);
//     const charactersUrl = this.apiBaseUrl + 'characters';
//     console.log('charactersUrl:', charactersUrl);
//     const search: URLSearchParams = new URLSearchParams();
//     search.set("apikey", "d99ccfb4a9a727319cec923a94546a9e");
//     search.set("ts", currentTimestamp);
//     search.set("hash", hash);
//     // search.set("series", "2258");
//     search.set("offset", offset.toString());
//     search.set("limit", limit.toString());
//
//     console.log("search", search);
//     const reqOpts = new RequestOptions({search: search, headers: this.getGeneralHeaders()});
//     return this.http.get(charactersUrl, reqOpts)
//       .map((res:Response) => {
//         console.log("CharacterService getting Heroes response: ", (res.json() as CharacterDataWrapperModel));
//         return (res.json() as CharacterDataWrapperModel);
//       })
//       .catch((error:any) => {
//         return Observable.throw(error.json() || 'Server error');
//       });
//   }
//
//   private handleError(error:any): Promise<any> {
//     console.error('CharacterService Error:', error);
//     return Promise.reject(error.message || error);
//   }
//
// }
