import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { SoportesService } from 'src/app/services/soportes.service';
import { Soporte } from 'src/app/interfaces/soportes';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements AfterViewInit, OnDestroy {
  id: number;

  formSuports: FormGroup;
  formEdit: FormGroup;

  listarSoportes: Soporte[] = [];

  constructor(private _SoportesService: SoportesService, private toastr: ToastrService, private fb: FormBuilder, private el: ElementRef) {
    
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

  async addSupport() {
    if (this.formSuports.valid) {
      const supportData: Soporte = { ...this.formSuports.value, documento: this.formSuports.value.documento };

      try {
        await this._SoportesService.saveSoporte(supportData).toPromise();
        this.formSuports.reset();
        this.getListarSoportes();
        this.toastr.success('El soporte fue guardado con éxito', 'Soporte Guardado');
      } catch (error) {
        this.toastr.error('Hubo un error al guardar el soporte', 'Error');
      }
    } else {
      this.toastr.error('Por favor, complete todos los campos antes de enviar el formulario.', 'Formulario Inválido');
    }
  }

  //funcion para obtener los datos del id consultado

  getSoporte(id: number) {
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
  
  //funcion para obtener el id que vamos a editar

  setEditId(id: number) {
    this.id = id;
    this.getSoporte(id);
  }

  //Funcion para Editar soportes

  async editSuport() {
    if (this.formEdit.valid) {
    const idActualizar = this.id;
  
    try {
      await this._SoportesService.updateSoporte(idActualizar, this.formEdit.value).toPromise();
      this.getListarSoportes();

      this.toastr.success('El soporte fue actualizado con éxito', 'Soporte Actualizado');
    } catch (error) {
      // Maneja el error, por ejemplo, mostrando un mensaje de error
      this.toastr.error('Hubo un error al actualizar el soporte', 'Error');
    }
  } else {
    this.toastr.error('Por favor, complete todos los campos antes de enviar el formulario.', 'Formulario Inválido');
  }
  }
  

  getListarSoportes() {
    this._SoportesService.getListarSoportes().subscribe((data) => {
      this.listarSoportes = data;
      this.destroyAndReinitializeDataTables();
    });
  }

  deleteSupport(id: number) {
    this._SoportesService.deleteSoporte(id).subscribe(() => {
      this.getListarSoportes();
      this.toastr.warning('El soporte fue eliminado con éxito', 'Soporte Eliminado');
    });
  }

  ngAfterViewInit() {
    this.initializeDataTables();
  }

  ngOnDestroy() {
    $('.tablagastos').DataTable().destroy();
  }

  private destroyAndReinitializeDataTables() {
    $('.tablagastos').DataTable().destroy();
    this.initializeDataTables();
  }

  private initializeDataTables() {
    if (this.listarSoportes && this.listarSoportes.length > 0) {
      setTimeout(() => {
    $('.tablagastos').DataTable({
      searching: true,
      lengthChange: true,
      "language": {
        "search": "Buscar:",
        "lengthMenu": "Mostrar _MENU_ Gastos",
        "info": "Total _TOTAL_ de _MAX_ Gastos",
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
  }, 200);
  }
  }

  truncateText(text: string, maxLength: number): string {
    return text.length > maxLength ? text.substring(0, maxLength - 3) + '...' : text;
  }
}
