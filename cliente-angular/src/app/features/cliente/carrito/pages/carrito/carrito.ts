import { Component }
from '@angular/core';

import { CarritoService }
from '../../../../../core/services/carrito';

@Component({
  selector: 'app-carrito',
  standalone: true,
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  productos: any[] = [];

  constructor(

    private carritoService:
    CarritoService

  ) {}

  total = 0;

  ngOnInit() {

    this.productos =
      this.carritoService.obtener();

    this.total =
      this.carritoService.obtenerTotal();

  }
  

}