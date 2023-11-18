import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-cita-online',
  templateUrl: './cita-online.component.html',
  styleUrls: ['./cita-online.component.css'],
})
export class CitaOnlineComponent {
  ahora: any;
  tipoDocumento: any[] = [
    { value: 'DNI', viewValue: 'DNI' },
    { value: 'Pasaporte', viewValue: 'Pasaporte' },
  ];
  startDate = new Date(2005, 1, 1);
  tipoDocumentocontrol = new FormControl(this.tipoDocumento[0].value);
  myControl = new FormControl('');
  options: string[] = [
    'Cardiología',
    'Dermatologíawo',
    'Obstetricia',
    'Urologia',
  ];

  filteredOptions: Observable<string[]> | undefined;

  stepOneForm = this.fb.group({
    tipoDocumento: [this.tipoDocumento[0].value, Validators.required],
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
  selectedDate: any;
  name = 'Angular 6';
  availableHours: string[] = [];

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
  calculateAvailableHours() {
    // Lógica para calcular las horas disponibles (puedes personalizar según tus necesidades)
    // Aquí un ejemplo básico para disponibilidad de 10:00 am a 5:00 pm
    const today = new Date();
    const selectedDay = this.selectedDate;

    if (selectedDay) {
      this.availableHours = [];

      // Lógica para calcular las horas disponibles según tus criterios
      // Aquí un ejemplo básico: desde las 10:00 am hasta las 5:00 pm
      const startHour = 9;
      const endHour = 17; // 5:00 pm

      for (let i = startHour; i <= endHour; i++) {
        this.availableHours.push(`${i}:00`);
      }
    }
  }

  selectHour(hour: string) {
    // Lógica para manejar la selección de la hora
    console.log(`Hora seleccionada: ${hour}`);
  }

  isHourDisabled(hour: string): boolean {
    // Puedes agregar lógica aquí para deshabilitar ciertas horas si es necesario
    // Por ejemplo, si ya está reservada, etc.
    return false;
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
    const datePite = new DatePipe('en-Us');
    this.ahora = datePite.transform(new Date(), 'yyyy-MM-dd');
  }
  onSelect(event: any) {
    console.log(event);

    this.selectedDate = event;
    // Calcula las horas disponibles basándose en la fecha seleccionada
    this.calculateAvailableHours();
  }
  // Métodos para navegar entre pasos
  nextStep(step: number) {
    switch (step) {
      case 0:
        this.markFormGroupTouched(this.stepOneForm);
        // Validar y avanzar al siguiente paso si es válido
        if (this.stepOneForm.valid) {
          // Marcar como tocados los controles del formulario actual
          this.markFormGroupTouched(this.stepOneForm);
          // Realiza acciones necesarias y avanza al siguiente paso
          // Por ejemplo, puedes mostrar el siguiente paso
        }
        break;
      case 1:
        this.markFormGroupTouched(this.stepTwoForm);

        if (this.stepTwoForm.valid) {
          // Marcar como tocados los controles del formulario actual
          this.markFormGroupTouched(this.stepTwoForm);
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
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
