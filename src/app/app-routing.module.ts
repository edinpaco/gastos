import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { ConsultaComponent } from './modulos/consulta/consulta.component';
import { AnticiposComponent } from './modulos/anticipos/anticipos.component';
import { GastosComponent } from './modulos/gastos/gastos.component';
import { ConfirmagastoComponent } from './modulos/confirmagasto/confirmagasto.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';

const routes: Routes = [

  {path: '',pathMatch:'full', redirectTo:'dashboard'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'consulta', component:ConsultaComponent},
  {path: 'anticipos', component:AnticiposComponent},
  {path: 'gastos', component:GastosComponent},
  {path: 'confirmar_gasto', component:ConfirmagastoComponent},
  {path: 'usuarios', component:UsuariosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
