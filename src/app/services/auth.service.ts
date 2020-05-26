import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/api/usuario/';

  // Crear nuevos Usuarios



  // Login

  constructor( private http: HttpClient) { }

  logout() { }

  login(usuario: UsuarioModel) { }

  nuevoUsuario(usuario:UsuarioModel) {
      
    const authData = {
      ...usuario
    };

    return this.http.post(
      `${this.url}/add`,
      authData
    );
  }
}
