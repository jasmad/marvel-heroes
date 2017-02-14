import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Http, Headers, URLSearchParams, Response, RequestOptions} from "@angular/http";
import {ResourceDataWrapper} from "../../datamodel/abstract/ResourceDataWrapper";
import {Observable} from "rxjs";

@Injectable()
export abstract class BaseApiAccessService {

  protected apiBaseUrl = environment.apiBaseUrl;

  protected abstract getEntityType(): string;

  protected abstract getSearchParams(): URLSearchParams;

  protected abstract getUrlFragment(): string;

  // protected abstract extraSearchParams: URLSearchParams;

  constructor(protected http: Http) { }

  protected getCurrentTimestamp(): number
  {
    return Date.now();
  }

  protected getGeneralHeaders(): Headers
  {
    const headers = new Headers();
    headers.append("Accept", "*/*");
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  private prepareRequestUrl(): string
  {
    if(!this.getEntityType())
    {
      throw new Error("No entity type defined");
    }
    const fragment: string = this.getUrlFragment().length > 0 ? `/${this.getUrlFragment()}` : '';
    return `${this.apiBaseUrl}${this.getEntityType()}${fragment}`;
  }

  private prepareRequestOptions(): RequestOptions
  {
    return new RequestOptions({search: this.prepareUrlSearchParams(), headers: this.getGeneralHeaders()});
  }

  private prepareUrlSearchParams(): URLSearchParams
  {
    let search: URLSearchParams = new URLSearchParams();
    let md5 = require("blueimp-md5");
    if(this.getSearchParams())
    {
      search.setAll(this.getSearchParams());
    }
    const currentTimestamp: string = this.getCurrentTimestamp().toString();
    const hash: string = md5(`${currentTimestamp + environment.privateKey + environment.publicKey}`);
    search.set("apikey", environment.publicKey);
    search.set("ts", currentTimestamp);
    search.set("hash", hash);
    return search;
  }

  protected getResource(): Observable<Response>
  {
    return this.http.get(this.prepareRequestUrl(), this.prepareRequestOptions());
  }

}
