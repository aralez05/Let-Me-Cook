import { Routes }
from '@angular/router';

import { LoginComponent }
from './features/auth/pages/login/login';

import { Home }
from './features/dashboard/pages/home/home';

import { Usuarios }
from './features/usuarios/pages/usuarios/usuarios';

import { authGuard }
from './core/guards/auth-guard';
import { Menu } from './features/cliente/menu/pages/menu/menu';
import { Carrito } from './features/cliente/carrito/pages/carrito/carrito';
import { Pedido } from './features/cliente/pedido/pages/pedido/pedido';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'm/1',
    pathMatch: 'full'
  },
  {
    path: 'm/:mesa',
    component: Menu
  },
  {
  path: 'm/:mesa/carrito',
    component: Carrito
  },
  {
    path: 'm/:mesa/pedido',
    component: Pedido
  },

  {
    path: 'admin/login',
    component: LoginComponent
  },

  {
    path: 'dashboard',

    component: Home,

    canActivate: [authGuard]
  },

  {
    path: 'usuarios',

    component: Usuarios,
    
    canActivate: [authGuard]
  }

];