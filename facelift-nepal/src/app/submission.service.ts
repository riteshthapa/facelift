import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './contact/user';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  private _url = 'your_url';
  private _imageUrl = 'https://s3.amazonaws.com/facelift.np/facelift_clients.json';
  constructor(private _http: HttpClient) { }

  submit(user: User){
    return this._http.post<any>(this._url, user);
  }

  getJSON() {
    return this._http.get(this._imageUrl);
  }
}