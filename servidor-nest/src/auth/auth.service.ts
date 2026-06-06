import {

  Injectable,
  UnauthorizedException

} from '@nestjs/common';

import { JwtService }
from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { UsuariosService }
from '../usuarios/usuarios.service';

@Injectable()

export class AuthService {

  constructor(

    private usuariosService:
    UsuariosService,

    private jwtService:
    JwtService

  ) {}

  async login(

    nombre: string,

    password: string

  ) {

    const usuario =
    await this.usuariosService
    .findByNombre(nombre);

    if (!usuario) {

      throw new UnauthorizedException(
        'Usuario no encontrado'
      );

    }

    const passwordCorrecta =
    await bcrypt.compare(

      password,

      usuario.get('password')

    );

    if (!passwordCorrecta) {

      throw new UnauthorizedException(
        'Password incorrecta'
      );

    }

    const payload = {

    sub: usuario.get('id'),

    nombre: usuario.get('nombre'),

    rol: usuario.get('rol')

    };

    return {

      mensaje: 'Login correcto',

      token: this.jwtService.sign(payload)

    };

  }

}