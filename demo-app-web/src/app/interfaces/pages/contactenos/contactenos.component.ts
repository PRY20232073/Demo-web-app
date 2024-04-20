import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css'],
})
export class ContactenosComponent {
  startDate = new Date(2005, 1, 1);
  FormComplete = 0;

  tipoDocumento: any[] = [
    { value: 'DNI', viewValue: 'DNI' },
    { value: 'Pasaporte', viewValue: 'Pasaporte' },
  ];
  contactenos = this.fb.group({
    tipoDocumento: [this.tipoDocumento[0].value, Validators.required],
    numeroDocumento: ['', Validators.required],
    numeroCelular: ['', Validators.required],
    //fechaNacimiento: ['', Validators.required],
    //correoElectronico: ['', Validators.required],
    comentario: ['', Validators.required],
  });
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
    this.markFormGroupTouched(this.contactenos);
    if (this.contactenos.valid) {
      this.audio.src = '../../../../assets/sounds/notificacion.wav';
      this.audio.volume = 0.3;
      this.audio.play();
      setTimeout(() => {}, 400);
      console.log('paso todas las validaciones');
      Swal.fire({
        title: 'En contacto',
        text: 'Lo estaremos contactando pronto',
        icon: 'success',
        confirmButtonColor: '#D50000',
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
  recargarPagina() {
    window.location.reload();
  }
}
