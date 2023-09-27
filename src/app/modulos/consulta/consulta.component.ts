import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Configura DataTables
    $('.tableConsultas').DataTable({
      searching: true,
      lengthChange: true,
      "language": {
        "search": "Buscar:",
        "lengthMenu": "Mostrar _MENU_ guias",
        "info": "Total _START_ de _END_ de _TOTAL_ guias",
        "infoEmpty": "Total 0 de 0 de 0 registros",
        "infoFiltered": "(filtrado de _MAX_ guias en total)",
        "zeroRecords": "No se encontraron guias",
        "paginate": {
          "first": "Primero",
          "previous": "Anterior",
          "next": "Siguiente",
          "last": "Último"
        },
      }
    });
  }
}
