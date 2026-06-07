import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface OrderItem {
  productoId: string;
  nombre: string;
  precio: number;
  cantidad: number;
}

export interface TableOrder {
  id: string;
  tableNumber: number;
  items: OrderItem[];
  status: 'pending' | 'ready';
  timeReceived: Date;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  orders = signal<TableOrder[]>([]);

  ngOnInit() {
    this.cargarPedidos();
    window.addEventListener('storage', () => {
      this.cargarPedidos();
    });
  }

  cargarPedidos() {
    const guardados = localStorage.getItem('pedidos_dashboard');
    if (guardados) {
      try {
        const parsed = JSON.parse(guardados);
        // Convert string dates to actual Date objects
        const formated = parsed.map((p: any) => ({
          ...p,
          timeReceived: new Date(p.timeReceived)
        }));
        this.orders.set(formated);
      } catch (e) {
        console.error('Error parsing orders', e);
      }
    }
  }

  getElapsedTime(timeReceived: Date): string {
    const diffMs = Date.now() - timeReceived.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    return `${diffMins} min`;
  }

  markAsReady(orderId: string) {
    this.orders.update(currentOrders => 
      currentOrders.map(order => {
        if (order.id === orderId) {
          return { ...order, status: 'ready' };
        }
        return order;
      })
    );
    this.guardarCambios();

    // Remove from the queue after 2 seconds for the animation to play
    setTimeout(() => {
      this.orders.update(currentOrders => 
        currentOrders.filter(order => order.id !== orderId)
      );
      this.guardarCambios();
    }, 2000);
  }

  guardarCambios() {
    localStorage.setItem('pedidos_dashboard', JSON.stringify(this.orders()));
  }
}
