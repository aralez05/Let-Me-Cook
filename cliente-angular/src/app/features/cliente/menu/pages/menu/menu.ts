import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../../../../../core/services/carrito';
@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.html',
  styleUrl: './menu.css'
    
})

export class Menu {
  
  mesa = 0;

  constructor(  
    private route: ActivatedRoute,
    private carritoService:
    CarritoService
  ) {}

  ngOnInit() {

    this.mesa = Number(
      this.route.snapshot.paramMap.get('mesa')
    );

    console.log('Mesa:', this.mesa);

  }
  productos = [
    {
      id: 1,
      nombre: 'Hamburguesa',
      precio: 120
    },
    {
      id: 2,
      nombre: 'Pizza',
      precio: 180
    },
    {
      id: 3,
      nombre: 'Tacos',
      precio: 90
    }
  ];
  agregar(producto: any) {
    this.carritoService
      .agregarProducto(
        this.mesa,
        producto
      )
      .subscribe({
        next: (respuesta) => {
          console.log(
            'Producto agregado',
            respuesta
          );
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
}