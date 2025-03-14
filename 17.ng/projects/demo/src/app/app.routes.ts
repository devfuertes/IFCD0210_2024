import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
    title: 'Home | Angular Demo',
<<<<<<< HEAD
    data: {label:'Home'}
  },

  { path: 'films', loadComponent: () => import('./films/films.component')
    title: 'Home | Angular Fims',
    data: {label:'Home'}
  },


  { path: 'about', loadComponent: () => import('./about/about.component'),
    title: 'About | Angular Demo',
    data: {label:'About'}
   },



=======
    data: { label: 'Home' },
  },

  {
    path: 'films',
    loadComponent: () => import('./films/films.component'),
    title: 'Films | Angular Demo',
    data: { label: 'Films' },
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component'),
    title: 'About | Angular Demo',
    data: { label: 'About' },
  },
>>>>>>> 0976fb62be418c65c49dbf3a3a670571274ed36b
  { path: '**', redirectTo: 'home' },
];
