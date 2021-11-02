import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:4000/api/user/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  guardarUser(user: User): Observable<any> {
    return this.http.post(this.url, user);
  }

  obtenerUser(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

}
