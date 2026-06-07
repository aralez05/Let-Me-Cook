import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
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
      id: 'P-001',
      nombre: 'Hamburguesa Clásica',
      precio: 120
    },
    {
      id: 'P-002',
      nombre: 'Hamburguesa Doble',
      precio: 160
    },
    {
      id: 'P-003',
      nombre: 'Pizza Margarita',
      precio: 180
    },
    {
      id: 'P-004',
      nombre: 'Pizza Pepperoni',
      precio: 200
    },
    {
      id: 'P-005',
      nombre: 'Tacos al Pastor',
      precio: 90
    },
    {
      id: 'P-006',
      nombre: 'Tacos de Bistec',
      precio: 110
    },
    {
      id: 'P-007',
      nombre: 'Papas Fritas',
      precio: 50
    },
    {
      id: 'P-008',
      nombre: 'Aros de Cebolla',
      precio: 65
    },
    {
      id: 'P-009',
      nombre: 'Limonada',
      precio: 35
    },
    {
      id: 'P-010',
      nombre: 'Coca Cola',
      precio: 30
    },
    {
      id: 'P-011',
      nombre: 'Cerveza',
      precio: 60
    },
    {
      id: 'P-012',
      nombre: 'Cheesecake',
      precio: 75
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

  verCarrito() {
    this.router.navigate(['m', this.mesa, 'carrito']);
  }
}