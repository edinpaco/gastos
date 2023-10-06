import { Component } from '@angular/core';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Configura DataTables
    $('.tablagastos').DataTable({
      searching: true,
      lengthChange: true,
      "language": {
        "search": "Buscar:",
        "lengthMenu": "Mostrar _MENU_ Gastos",
        "info": "Total _START_ de _END_ de _TOTAL_ Gastos",
        "infoEmpty": "Total 0 de 0 de 0 Gastos",
        "infoFiltered": "(filtrado de _MAX_ Gastos en total)",
        "zeroRecords": "No se encontraron Gastos",
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
