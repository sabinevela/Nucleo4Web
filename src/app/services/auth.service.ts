import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private usuarioServicio: UsuarioService) { }

  login(username: string, password: string): Observable<any | null> {
    return this.usuarioServicio.getUsuarios().pipe(
      map((data: any) => {
        const usuarios = Object.entries(data).map(([id, value]: any) => {
          return { id, ...value };
        });
        const user = usuarios.find((u: any) => u.username === username && u.password === password);
        if(user){
          localStorage.setItem('usuario', JSON.stringify(user));
          return user;
        } else {
          return null;
        }
      })
    );
  }
}
