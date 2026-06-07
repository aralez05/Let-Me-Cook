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
      productoId: 'P-001',
      nombre: 'Hamburguesa Clásica',
      precio: 120
    },
    {
      productoId: 'P-002',
      nombre: 'Hamburguesa Doble',
      precio: 160
    },
    {
      productoId: 'P-003',
      nombre: 'Pizza Margarita',
      precio: 180
    },
    {
      productoId: 'P-004',
      nombre: 'Pizza Pepperoni',
      precio: 200
    },
    {
      productoId: 'P-005',
      nombre: 'Tacos al Pastor',
      precio: 90
    },
    {
      productoId: 'P-006',
      nombre: 'Tacos de Bistec',
      precio: 110
    },
    {
      productoId: 'P-007',
      nombre: 'Papas Fritas',
      precio: 50
    },
    {
      productoId: 'P-008',
      nombre: 'Aros de Cebolla',
      precio: 65
    },
    {
      productoId: 'P-009',
      nombre: 'Limonada',
      precio: 35
    },
    {
      productoId: 'P-010',
      nombre: 'Coca Cola',
      precio: 30
    },
    {
      productoId: 'P-011',
      nombre: 'Cerveza',
      precio: 60
    },
    {
      productoId: 'P-012',
      nombre: 'Cheesecake',
      precio: 75
    }
  ];
    agregar(producto: any) {

    this.carritoService.agregar(producto);

    console.log('Agregado');

  }
}