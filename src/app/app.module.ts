import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { ConsultaComponent } from './modulos/consulta/consulta.component';
import { MenuComponent } from './modulos/menu/menu.component';
import { AnticiposComponent } from './modulos/anticipos/anticipos.component';
import { GastosComponent } from './modulos/gastos/gastos.component';
import { ConfirmagastoComponent } from './modulos/confirmagasto/confirmagasto.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ConsultaComponent,
    MenuComponent,
    AnticiposComponent,
    GastosComponent,
    ConfirmagastoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
