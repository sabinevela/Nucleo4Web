import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductosComponent } from './pages/productos/productos.component';

export const routes: Routes = [
  {path:'home', component:InicioComponent},
  {path:'formulario',component:FormularioComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'productos',component:ProductosComponent},
  {path:'registro',component:FormularioComponent},
  {path: '**', component: Pagina404Component }
  ];
