import { Module }
from '@nestjs/common';

import { JwtModule }
from '@nestjs/jwt';

import { AuthService }
from './auth.service';

import { AuthController }
from './auth.controller';


import { UsuariosModule }
from '../usuarios/usuarios.module';

import { JwtGuard }
from './jwt.guard';

@Module({

  imports: [

    UsuariosModule,

    JwtModule.register({

      secret: 'secreto123',

      signOptions: {

        expiresIn: '1d'

      }

    })

  ],

  controllers: [AuthController],

  providers: [

    AuthService

  ]

})

export class AuthModule {}