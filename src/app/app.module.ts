import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//componentes para la app
import { DataTablesModule } from "angular-datatables";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//modulos angular
import { ReactiveFormsModule } from '@angular/forms';

//modulos de la app vistas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { ConsultaComponent } from './modulos/consulta/consulta.component';
import { MenuComponent } from './modulos/menu/menu.component';
import { AnticiposComponent } from './modulos/anticipos/anticipos.component';
import { GastosComponent } from './modulos/gastos/gastos.component';
import { ConfirmagastoComponent } from './modulos/confirmagasto/confirmagasto.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ConsultaComponent,
    MenuComponent,
    AnticiposComponent,
    GastosComponent,
    ConfirmagastoComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-left'
    }), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
