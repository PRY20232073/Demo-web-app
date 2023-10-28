import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cita-online',
  templateUrl: './cita-online.component.html',
  styleUrls: ['./cita-online.component.css'],
})
export class CitaOnlineComponent {
  stepOneForm = this.fb.group({
    tipoDocumento: ['', Validators.required],
    numeroDocumento: ['', Validators.required],
    numeroCelular: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
  });

  stepTwoForm = this.fb.group({
    especialidad: ['', Validators.required],
    sintomas: [''],
  });

  stepThreeForm = this.fb.group({
    fechaCita: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  // Métodos para navegar entre pasos
  nextStep(step: number) {
    switch (step) {
      case 0:
        // Validar y avanzar al siguiente paso si es válido
        if (this.stepOneForm.valid) {
          // Realiza acciones necesarias y avanza al siguiente paso
          // Por ejemplo, puedes mostrar el siguiente paso
        }
        break;
      case 1:
        if (this.stepTwoForm.valid) {
          // Realiza acciones necesarias y avanza al siguiente paso
        }
        break;
    }
  }

  prevStep(step: number) {
    // Método para retroceder al paso anterior si es necesario
    // Puedes implementarlo de manera similar al método nextStep
  }

  submitForm() {
    // Método para enviar el formulario una vez que se completen todos los pasos
    if (this.stepThreeForm.valid) {
      // Realiza acciones necesarias para enviar el formulario
    }
  }
}
