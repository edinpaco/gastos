import { Component } from '@angular/core';

@Component({
  selector: 'app-anticipos',
  templateUrl: './anticipos.component.html',
  styleUrls: ['./anticipos.component.css']
})
export class AnticiposComponent {

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
        "lengthMenu": "Mostrar _MENU_ Anticipos",
        "info": "Total _START_ de _END_ de _TOTAL_ Anticipos",
        "infoEmpty": "Total 0 de 0 de 0 Anticipos",
        "infoFiltered": "(filtrado de _MAX_ Anticipos en total)",
        "zeroRecords": "No se encontraron Anticipos",
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
