import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buzon-quejas',
  templateUrl: './buzon-quejas.component.html',
  styleUrls: ['./buzon-quejas.component.css'],
})
export class BuzonQuejasComponent {
  tipoDocumento: any[] = [
    { value: 'DNI', viewValue: 'DNI' },
    { value: 'Pasaporte', viewValue: 'Pasaporte' },
  ];
  tipoQueja: any[] = [
    { value: 'DNI', viewValue: 'Atencion al Cliente' },
    { value: 'Pasaporte', viewValue: 'Diseño de la web' },
  ];
  quejas = this.fb.group({
    tipoDocumento: [this.tipoDocumento[0].value, Validators.required],
    numeroDocumento: ['', Validators.required],
    fechaQueja: ['', Validators.required],
    correoElectronico: ['', Validators.required],
    comentario: ['', Validators.required],
    tipoQueja: [this.tipoQueja[0].value, Validators.required],
  });

  constructor(private fb: FormBuilder) {}
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  submitForm() {
    this.markFormGroupTouched(this.quejas);
    if (this.quejas.valid) {
      console.log('paso todas las validaciones');
      Swal.fire({
        title: 'Buzon de Quejas',
        text: 'Su queja fue registrada correctamente',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Aceptar',
      });
    } else {
      console.log('no paso todas las validaciones');
    }
  }
}
