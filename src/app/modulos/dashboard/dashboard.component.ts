import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Configura DataTables
    $('.tabledate').DataTable({
      searching: false,
      lengthChange: true,
      scrollY: 'auto',
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
