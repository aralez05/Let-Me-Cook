import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OrderItem {
  productoId: string;
  nombre: string;
  precio: number;
  cantidad: number;
}

interface TableOrder {
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
  orders = signal<TableOrder[]>([
    {
      id: 'ord-101',
      tableNumber: 4,
      status: 'pending',
      timeReceived: new Date(Date.now() - 1000 * 60 * 15), // 15 mins ago
      items: [
        { productoId: 'P-001', nombre: 'Hamburguesa Clásica', precio: 12.50, cantidad: 2 },
        { productoId: 'P-005', nombre: 'Papas Fritas', precio: 4.00, cantidad: 1 }
      ]
    },
    {
      id: 'ord-102',
      tableNumber: 2,
      status: 'pending',
      timeReceived: new Date(Date.now() - 1000 * 60 * 5), // 5 mins ago
      items: [
        { productoId: 'P-012', nombre: 'Pizza Margarita', precio: 15.00, cantidad: 1 },
        { productoId: 'P-020', nombre: 'Limonada', precio: 3.50, cantidad: 2 }
      ]
    },
    {
      id: 'ord-103',
      tableNumber: 7,
      status: 'pending',
      timeReceived: new Date(Date.now() - 1000 * 60 * 2), // 2 mins ago
      items: [
        { productoId: 'P-031', nombre: 'Tacos al Pastor', precio: 8.50, cantidad: 4 },
        { productoId: 'P-022', nombre: 'Coca Cola', precio: 2.50, cantidad: 2 }
      ]
    }
  ]);

  markAsReady(orderId: string) {
    this.orders.update(orders => 
      orders.map(order => 
        order.id === orderId ? { ...order, status: 'ready' } : order
      )
    );
    
    // Optional: Auto-remove the order after a few seconds
    setTimeout(() => {
      this.orders.update(orders => orders.filter(o => o.id !== orderId));
    }, 3000);
  }

  getElapsedTime(timeReceived: Date): string {
    const diffMs = Date.now() - timeReceived.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1) return 'Hace un momento';
    return `Hace ${diffMins} min`;
  }
}
