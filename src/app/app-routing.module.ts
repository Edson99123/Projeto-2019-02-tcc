import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaPageModule' },
  { path: 'manicure', loadChildren: './manicure/manicure.module#ManicurePageModule' },
  { path: 'pedirure', loadChildren: './pedirure/pedirure.module#PedirurePageModule' },
  { path: 'cabelo', loadChildren: './cabelo/cabelo.module#CabeloPageModule' },
  { path: 'maquiagem', loadChildren: './maquiagem/maquiagem.module#MaquiagemPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
