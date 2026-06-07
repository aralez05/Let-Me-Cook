import { Injectable } from '@nestjs/common';
import { AgregarProductoDto } from './dto/agregar-producto.dto';

@Injectable()
export class CarritoService {

  private carritos =
    new Map<number, any[]>();


  obtenerMesa(mesa: number) {

    return this.carritos.get(mesa) || [];

  }


  agregarProducto(
    mesa: number,
    producto: AgregarProductoDto
  ) {

    let carrito =
      this.carritos.get(mesa);

    if (!carrito) {

      carrito = [];

      this.carritos.set(
        mesa,
        carrito
      );

    }

    const existente =
      carrito.find(

        item =>

          item.productoId ===
          producto.productoId

      );

    if (existente) {

      existente.cantidad++;

    } else {

      carrito.push({

        productoId:
          producto.productoId,

        nombre:
          producto.nombre,

        precio:
          producto.precio,

        cantidad: 1

      });

    }

    return carrito;

  }

}