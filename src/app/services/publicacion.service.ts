import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacion } from 'src/app/models/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  url = 'http://localhost:4000/api/publicacion/';
  PUBLICACION : any;

  constructor(private http: HttpClient) { }

  getPublicaciones(): Observable<any> {
    return this.http.get(this.url);
  }

  guardarPublicacion(publicacion: Publicacion): Observable<any> {
    return this.http.post(this.url, publicacion);
  }

  obtenerPublicacion(id:string): Observable<any> {
    return this.http.get(this.url + id);
  }

  modificarPublicacion(id: string, publicacion: Publicacion): Observable<any> {
    return this.http.put(this.url + id, publicacion);
  }

  eliminarPublicacion(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

}
