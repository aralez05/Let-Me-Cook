import { Component, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../../../../core/services/carrito';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  productos = signal<any[]>([]);

  total = computed(() =>
    this.productos().reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    )
  );

  mesa = 0;
  intervalo: any;

  constructor(
    private carritoService: CarritoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.mesa = Number(
      this.route.snapshot.paramMap.get('mesa')
    );

    this.cargarCarrito();

    this.intervalo = setInterval(() => {
      this.cargarCarrito();
    }, 1500);
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

  cargarCarrito() {
    this.carritoService
      .obtenerMesa(this.mesa)
      .subscribe({
        next: (data: any) => {
          console.log('Respuesta:', data);

          this.productos.set(
            Array.isArray(data) ? data : []
          );
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
  reducir(item: any) {

  this.carritoService

    .reducirProducto(

      this.mesa,

      item.productoId

    )

    .subscribe({

      next: () => {

        this.cargarCarrito();

      },

      error: (error) => {

        console.error(error);

      }

    });

}
}