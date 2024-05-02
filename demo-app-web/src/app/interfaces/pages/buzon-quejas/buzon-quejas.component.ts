import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  DateAdapter,
  ErrorStateMatcher,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { CustomErrorStateMatcher } from 'src/app/shared/validators/CustomErrorStateMatcher';
import Swal from 'sweetalert2';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
export const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY', // this is how your date will be parsed from Input
  },
  display: {
    dateInput: 'DD/MM/YYYY', // this is how your date will get displayed on the Input
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-buzon-quejas',
  templateUrl: './buzon-quejas.component.html',
  styleUrls: ['./buzon-quejas.component.css'],
  providers: [
    {
      provide: ErrorStateMatcher,
      useClass: CustomErrorStateMatcher,
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
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
        confirmButtonColor: '#D50000',
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
  recargarPagina() {
    window.location.reload();
  }
  validateFormat(event: any) {
    let key;
    if (event.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }
    const regex = /[0-9]|\./;
    if (!regex.test(key)) {
      event.returnValue = false;
      if (event.preventDefault) {
        event.preventDefault();
      }
    }
  }
}
