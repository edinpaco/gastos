import { Component, AfterViewInit } from '@angular/core';
import { SoportesService } from 'src/app/services/soportes.service';
import { Soporte } from 'src/app/interfaces/soportes';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {

  listarSoportes: Soporte[] = [];
  
  constructor(private _SoportesService: SoportesService) { }

  ngOnInit() {
    this.getListarSoportes();
  }

  getListarSoportes(){
    this._SoportesService.getListarSoportes().subscribe((data) => {
      this.listarSoportes = data;
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {

    // Configura DataTables
    $('.tablagastos').DataTable({
      searching: true,
      lengthChange: true,
      "language": {
        "search": "Buscar:",
        "lengthMenu": "Mostrar _MENU_ Gastos",
        "info": "Total _TOTAL_ de _MAX_ Gastos",
        "infoEmpty": "Total 0 de 0 Gastos",
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
  }, 100);
}

truncateText(text: string, maxLength: number): string {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + '...';
  } else {
    return text;
  }
}

}
