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

export const routes: Routes = [

  {
    path: '',

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