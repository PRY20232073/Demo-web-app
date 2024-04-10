import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomErrorStateMatcher } from 'src/app/shared/validators/CustomErrorStateMatcher';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buzon-quejas',
  templateUrl: './buzon-quejas.component.html',
  styleUrls: ['./buzon-quejas.component.css'],
  providers: [
    {
      provide: ErrorStateMatcher,
      useClass: CustomErrorStateMatcher,
    },
  ],
})
export class BuzonQuejasComponent {
  customErrorStateMatcher = new CustomErrorStateMatcher();
  SubmitForm = false;

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
    numeroCelular: ['', Validators.required],
    comentario: ['', Validators.required],
    tipoQueja: [this.tipoQueja[0].value, Validators.required],
  });
  FormComplete = 0;
  private audio = new Audio();

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
    this.SubmitForm = true;

    if (this.quejas.valid) {
      this.audio.src = '../../../../assets/sounds/notificacion.wav';
      this.audio.volume = 0.3;
      this.audio.play();
      setTimeout(() => {}, 400);
      console.log('paso todas las validaciones');
      Swal.fire({
        title: 'Buzon de Quejas',
        text: 'Su queja fue registrada correctamente',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Aceptar',
      }).then((result) => {
        if (result.isConfirmed) {
          this.FormComplete = 1;
        }
      });
    } else {
      console.log('no paso todas las validaciones');
    }
  }
}
