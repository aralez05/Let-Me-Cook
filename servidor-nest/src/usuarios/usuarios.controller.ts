import {

  Controller,
  Get, 
  Post,
  Body,
  UseGuards

} from '@nestjs/common';

import { UsuariosService }
from './usuarios.service';

import { CreateUsuarioDto }
from './dto/create-usuario.dto';

import { JwtGuard }
from '../auth/jwt.guard';

@Controller('api/usuarios')

export class UsuariosController {

  constructor(

    private readonly usuariosService:
    UsuariosService

  ) {}

  @UseGuards(JwtGuard)

  @Get()

  findAll() {

    return this.usuariosService.findAll();

  }
  @Post()

  create(
    @Body()
    createUsuarioDto: CreateUsuarioDto
  ) {

    return this.usuariosService.create(
      createUsuarioDto
    );

}

}