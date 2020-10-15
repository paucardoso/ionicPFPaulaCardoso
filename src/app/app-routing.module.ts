import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children: [{
      path: "",
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      
    },
    {
      path: ":nombre",
      loadChildren: () => import('./fuentes/fuentes.module').then( m => m.FuentesPageModule)
      
      },
      {
        path: ":param",
        loadChildren: () => import('./parametros/parametros.module').then( m => m.ParametrosPageModule)
        
      },
      {
        path: ":param2",
        loadChildren: () => import('./parametros-b2/parametros-b2.module').then( m => m.ParametrosB2PageModule)
        
      },
      {
        path: ":ubicacion",
        loadChildren: () => import('./ubicacion-fuentes/ubicacion-fuentes.module').then( m => m.UbicacionFuentesPageModule)
        
        }
    ]
    
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'fuentes',
    loadChildren: () => import('./fuentes/fuentes.module').then( m => m.FuentesPageModule)
  },
  {
    path: 'parametros',
    loadChildren: () => import('./parametros/parametros.module').then( m => m.ParametrosPageModule)
  },
  {
    path: 'parametros-b2',
    loadChildren: () => import('./parametros-b2/parametros-b2.module').then( m => m.ParametrosB2PageModule)
  },
  {
    path: 'ubicacion-fuentes',
    loadChildren: () => import('./ubicacion-fuentes/ubicacion-fuentes.module').then( m => m.UbicacionFuentesPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
