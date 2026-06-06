import { Injectable }
from '@angular/core';

import { HttpClient }
from '@angular/common/http';

@Injectable({

  providedIn: 'root'

})

export class AuthService {

  private apiUrl =
  'http://localhost:3000/api/auth';

  constructor(

    private http: HttpClient

  ) {}

  login(

    nombre: string,

    password: string

  ) {

    return this.http.post(

      `${this.apiUrl}/login`,

      {

        nombre,

        password

      }

    );

  }

  guardarToken(
    token: string
  ) {

    localStorage.setItem(
      'token',
      token
    );

  }

  obtenerToken() {

    return localStorage.getItem(
      'token'
    );

  }

  cerrarSesion() {

    localStorage.removeItem(
      'token'
    );

  }

  estaAutenticado() {

    return !!this.obtenerToken();

  }

}