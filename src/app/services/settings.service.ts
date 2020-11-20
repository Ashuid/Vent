import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/settings';

@Injectable({
  providedIn: 'root',
})

export class SettingsService {
  constructor(private http: HttpClient) { }

  create(data) {
    return this.http.post(baseUrl, data);
  }
  getbyId(id) {
    return this.http.get(`http://localhost:8080/api/settings/${id}`);
  }
  getAll() {
    return this.http.get(baseUrl);
  }
  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
