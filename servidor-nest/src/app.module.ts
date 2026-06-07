import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CarritoModule } from './carrito/carrito.module';

import { SequelizeModule }
from '@nestjs/sequelize';

import { UsuariosModule }
from './usuarios/usuarios.module';

@Module({

  imports: [

    SequelizeModule.forRoot({

      dialect: 'sqlite',

      storage: './database.sqlite',

      autoLoadModels: true,

      synchronize: true

    }),

    UsuariosModule,

    AuthModule,

    CarritoModule

  ]

})

export class AppModule {}