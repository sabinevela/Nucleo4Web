import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private API_URL = 'https://sabibot-e36e2-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }

  postUsuario(usuario: any): Observable<any> {
    // POST a la colección "usuarios"
    return this.http.post(`${this.API_URL}/usuarios.json`, usuario);
  }

  getUsuarios(): Observable<any> {
    return this.http.get(`${this.API_URL}/usuarios.json`);
  }

  getUsuarioById(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/usuarios/${id}.json`);
  }

  deleteUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/usuarios/${id}.json`);
  }

  putUsuario(id: string, usuario: any): Observable<any> {
    return this.http.put(`${this.API_URL}/usuarios/${id}.json`, usuario);
  }
}
