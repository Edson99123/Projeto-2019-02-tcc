import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable } from 'rxjs';
import {map} from 'rxjs/operators';


const routes: Routes = [
  { path: '',  loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioPageModule' }
  { path: 'contact', loadChildren: './contact/contact..module#contactPageModule' }

 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
