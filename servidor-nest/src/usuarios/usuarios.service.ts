import { Injectable }
from '@nestjs/common';

import { Op } from 'sequelize';

import { InjectModel }
from '@nestjs/sequelize';

import { CreateUsuarioDto }
from './dto/create-usuario.dto';

import { Usuario }
from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()

export class UsuariosService {

  constructor(

    @InjectModel(Usuario)
    private usuarioModel: typeof Usuario

  ) {}

  findAll() {

    return this.usuarioModel.findAll();

  }
  async create(

    createUsuarioDto:
    CreateUsuarioDto

  ) {

    const passwordHash =
    await bcrypt.hash(

      createUsuarioDto.password,

      10

    );

    return this.usuarioModel.create({

      nombre:
      createUsuarioDto.nombre,

      password:
      passwordHash,

      rol:
      createUsuarioDto.rol

    });

  }

  findByNombre(
    nombre: string
  ) {

    return this.usuarioModel.findOne({

      where: { nombre }

    });

  }

}