import { Component }
from '@angular/core';

import { FormsModule }
from '@angular/forms';

import { Router }
from '@angular/router';

import { AuthService }
from '../../../../core/services/auth';

@Component({

  selector: 'app-login',

  standalone: true,

  imports: [FormsModule],

  templateUrl: './login.html',

  styleUrl: './login.css'

})

export class LoginComponent {

  nombre = '';

  password = '';

  constructor(

    private authService:
    AuthService,

    private router:
    Router

  ) {}

  iniciarSesion() {

    this.authService.login(

      this.nombre,

      this.password

    )

    .subscribe({

      next: (respuesta: any) => {

        this.authService.guardarToken(

          respuesta.token

        );

        this.router.navigate([
          '/dashboard'
        ]);

      },

      error: (error) => {

        console.log(error);

        alert(
          'Credenciales incorrectas'
        );

      }

    });

  }

}