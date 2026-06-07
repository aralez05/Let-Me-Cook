import { Injectable } from '@angular/core';

import { Producto } from '../models/producto';
import { ItemCarrito } from '../models/item-carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private items: ItemCarrito[] = [];

  constructor() {

    const guardados =
      localStorage.getItem('carrito');

    if (guardados) {

      this.items =
        JSON.parse(guardados);

    }

  }

  agregar(producto: Producto) {

    const itemExistente =
      this.items.find(
        item => item.producto.id === producto.id
      );

    if (itemExistente) {

      itemExistente.cantidad++;

    } else {

      this.items.push({
        producto,
        cantidad: 1
      });

    }

    this.guardar();

  }

  obtener() {

    return this.items;

  }

  eliminar(idProducto: number) {

    this.items =
      this.items.filter(
        item => item.producto.id !== idProducto
      );

    this.guardar();

  }

  limpiar() {

    this.items = [];

    this.guardar();

  }

  obtenerTotal(): number {

    return this.items.reduce(

      (total, item) =>

        total +
        (item.producto.precio * item.cantidad),

      0

    );

  }

  private guardar() {

    localStorage.setItem(

      'carrito',

      JSON.stringify(
        this.items
      )

    );

  }

}