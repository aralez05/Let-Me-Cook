import {
  Controller,
  Get,
  Post,
  Param,
  Body
}
from '@nestjs/common';

import { CarritoService }
from './carrito.service';

import { AgregarProductoDto }
from './dto/agregar-producto.dto';

@Controller('carrito')
export class CarritoController {

  constructor(

    private readonly carritoService:
    CarritoService

  ) {}


  @Get('mesa/:mesa')
  obtenerMesa(

    @Param('mesa')
    mesa: string

  ) {

    return this.carritoService
      .obtenerMesa(
        Number(mesa)
      );

  }


  @Post('mesa/:mesa/agregar')
  agregarProducto(

    @Param('mesa')
    mesa: string,

    @Body()
    producto:
    AgregarProductoDto

  ) {

    return this.carritoService
      .agregarProducto(
        Number(mesa),
        producto
      );

  }

}