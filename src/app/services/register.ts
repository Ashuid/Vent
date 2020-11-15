import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/users';

@Injectable({
    providedIn: 'root'
})

export class RegisterService {

  constructor(private http: HttpClient){}

      userRegistration(data) {
        return this.http.post(baseUrl, data);
      }

}