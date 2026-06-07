import { Injectable, inject }
from '@angular/core';

import { HttpClient }
from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private http =
    inject(HttpClient);

  private api =
    'http://localhost:3000';

  obtenerMesa(
    mesa: number
  ) {

    return this.http.get(

      `${this.api}/carrito/mesa/${mesa}`

    );

  }

  agregarProducto(

    mesa: number,

    producto: any

  ) {

    return this.http.post(

      `${this.api}/carrito/mesa/${mesa}/agregar`,

      {
        productoId:
          producto.id,

        nombre:
          producto.nombre,

        precio:
          producto.precio
      }

    );

  }
  reducirProducto(

    mesa: number,

    productoId: number

  ) {

    return this.http.post(

      `${this.api}/carrito/mesa/${mesa}/reducir/${productoId}`,

      {}

    );

}
  
}