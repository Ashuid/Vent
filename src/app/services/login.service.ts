import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/users/';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  constructor(private http: HttpClient) { }

  userlogin(username) {
    return this.http.get(baseUrl + `${username}`);
  }
}
