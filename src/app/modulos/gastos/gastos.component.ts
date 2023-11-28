import { Component } from '@angular/core';
import { SoportesService } from 'src/app/services/soportes.service';
import { Soporte } from 'src/app/interfaces/soportes';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent {
  id: number;

  formSuports: FormGroup;
  formEdit: FormGroup;

  listarSoportes: Soporte[] = [];

  constructor(private _SoportesService: SoportesService, private toastr: ToastrService, private fb: FormBuilder) { 

  //Formulario para Insertar soportes en la base de datos

    this.formSuports = this.fb.group({
      fecha: ['', Validators.required],
      razon_social: ['', Validators.required],
      nit_cc: ['', Validators.required],
      guia: ['', Validators.required],
      factura: ['', Validators.required],
      proyecto: ['', Validators.required],
      concepto: ['', Validators.required],
      descripcion: ['', Validators.required],
      valor: ['', Validators.required]
    });

//Formulario para editar soportes en la base de datos

    this.formEdit = this.fb.group({
      fecha: ['', Validators.required],
      razon_social: ['', Validators.required],
      nit_cc: ['', Validators.required],
      guia: ['', Validators.required],
      factura: ['', Validators.required],
      proyecto: ['', Validators.required],
      concepto: ['', Validators.required],
      descripcion: ['', Validators.required],
      valor: ['', Validators.required]
    });   

   
  }

  ngOnInit() {
    this.getListarSoportes();
  }


// Función para ingresar soporte en la base de datos

  addSuport(){
    const Soporte: Soporte ={
      fecha: this.formSuports.value.fecha,
      razon_social: this.formSuports.value.razon_social,
      nit_cc: this.formSuports.value.nit_cc,
      guia: this.formSuports.value.guia,
      factura: this.formSuports.value.factura,
      proyecto: this.formSuports.value.proyecto,
      concepto: this.formSuports.value.concepto,
      descripcion: this.formSuports.value.descripcion,
      valor: this.formSuports.value.valor,
      documento: this.formSuports.value.documento
    }

      this._SoportesService.saveSoporte(Soporte).subscribe(() =>{
        //window.location.reload();
        this.getListarSoportes(); // Actualiza la lista localmente sin recargar la página
        setTimeout(() => {
        this.toastr.success('El soporte fue guardado con exito', 'Soporte Guardado');
        }), 10500;
      })
      
    
  }


// Función para editar soporte en la base de datos

getSoporte(id: number){

  this._SoportesService.getSoporte(id).subscribe((data:Soporte) => {
      this.formSuports.setValue({
        fecha: data.fecha,
        razon_social: data.razon_social,
        nit_cc: data.nit_cc,
        guia: data.guia,
        factura: data.factura,
        proyecto: data.proyecto,
        concepto: data.concepto,
        descripcion: data.descripcion,
        valor: data.valor
      });
     
    });
  }

  setEditId(id: number) {
    this.id = id;
    this.getSoporte(id); // Asegúrate de obtener los datos del soporte antes de abrir el modal de edición
  
    // Obtener los datos del soporte y asignarlos al formulario de edición
  this._SoportesService.getSoporte(id).subscribe((data: Soporte) => {
    this.formEdit.setValue({
      fecha: data.fecha,
      razon_social: data.razon_social,
      nit_cc: data.nit_cc,
      guia: data.guia,
      factura: data.factura,
      proyecto: data.proyecto,
      concepto: data.concepto,
      descripcion: data.descripcion,
      valor: data.valor
    });
  });
}
  


// Función para editar soporte en la base de datos

editSuport() {
  const idActualizar = this.id;

  this._SoportesService.updateSoporte(idActualizar, this.formEdit.value).subscribe(() => {
    this.getListarSoportes(); // Actualiza la lista localmente sin recargar la página
    //window.location.reload();
    setTimeout(() => {
      this.toastr.success('El soporte fue actualizado con éxito', 'Soporte Actualizado');
    }, 1000);

  });
}
  

// Función para listar soporte en la base de datos

  getListarSoportes(){
    this._SoportesService.getListarSoportes().subscribe((data) => {
      this.listarSoportes = data;
      
    })
  }



// Función para eliminar soporte en la base de datos

  deleteSupport(id: number){
    this._SoportesService.deleteSoporte(id).subscribe(() => {
      this.getListarSoportes(); // Actualiza la lista localmente sin recargar la página
      this.toastr.warning('El soporte fue eliminado con exito', 'Soporte Eliminado');
      this.getListarSoportes();
      
    })
  }

  
  // Función para la tabla de los soportes en la base de datos

  ngAfterViewInit() {
    setTimeout(() => {

    // Configura DataTables
    $('.tablagastos').DataTable({
      searching: true,
      lengthChange: true,
      "language": {
        "search": "Buscar:",
        "lengthMenu": "Mostrar _MENU_ Gastos",
        "info": "",
        "infoEmpty": "Total 0 de 0 Gastos",
        "infoFiltered": "Total filtrado _TOTAL_ de _MAX_ Soportes",
        "zeroRecords": "No se encontraron Soportes",
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
