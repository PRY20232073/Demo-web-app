import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Observable, map, startWith } from 'rxjs';
import Swal from 'sweetalert2';
import { CustomErrorStateMatcher } from 'src/app/shared/validators/CustomErrorStateMatcher';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cita-online',
  templateUrl: './cita-online.component.html',
  styleUrls: ['./cita-online.component.css'],
  providers: [
    {
      provide: ErrorStateMatcher,
      useClass: CustomErrorStateMatcher,
    },
  ],
})
export class CitaOnlineComponent {
  ahora: any;
  tipoDocumento: any[] = [
    { value: 'DNI', viewValue: 'DNI' },
    { value: 'Pasaporte', viewValue: 'Pasaporte' },
  ];
  startDate = new Date(2005, 1, 1);
  tipoDocumentocontrol = new FormControl(this.tipoDocumento[0].value);
  especialidad = new FormControl('');
  options: string[] = [
    'Cardiología',
    'Dermatología',
    'Obstetricia',
    'Urologia',
  ];
  selectedHour: string | null = null;
  filteredOptions: Observable<string[]> | undefined;
  SubmitForm = false;
  StepperForm = 0;
  stepOneForm = this.fb.group({
    tipoDocumento: [this.tipoDocumento[0].value, Validators.required],
    numeroDocumento: ['', Validators.required],
    numeroCelular: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
  });

  stepTwoForm = this.fb.group({
    especialidad: ['', Validators.required],
    sintomas: ['', Validators.required],
  });

  stepThreeForm = this.fb.group({
    fechaCita: ['', Validators.required],
  });

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  customErrorStateMatcher = new CustomErrorStateMatcher();
  constructor(
    private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private router: Router
  ) {}
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
    // Si la hora seleccionada es la misma, deselecciónala
    if (this.selectedHour === hour) {
      this.selectedHour = null;
    } else {
      // De lo contrario, selecciona la nueva hora
      this.selectedHour = hour;
    }

    // Puedes realizar otras acciones según sea necesario
  }
  isSelectedHour(hour: string): boolean {
    return this.selectedHour === hour;
  }
  isHourDisabled(hour: string): boolean {
    // Puedes agregar lógica aquí para deshabilitar ciertas horas si es necesario
    // Por ejemplo, si ya está reservada, etc.
    return false;
  }
  ngOnInit() {
    this.filteredOptions = this.especialidad.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
    const datePite = new DatePipe('en-Us');
    this.ahora = datePite.transform(new Date(), 'yyyy-MM-dd');
  }
  onSelect(event: any) {
    this.selectedDate = event;
    // Calcula las horas disponibles basándose en la fecha seleccionada
    this.calculateAvailableHours();
  }
  // Métodos para navegar entre pasos
  nextStep(step: number) {
    switch (step) {
      case 0:
        this.markFormGroupTouched(this.stepOneForm);
        this.SubmitForm = true;
        // Validar y avanzar al siguiente paso si es válido
        if (this.stepOneForm.valid) {
          this.SubmitForm = false;
          window.sessionStorage['fechaNacimiento'] =
            this.stepOneForm.value.fechaNacimiento;
          window.sessionStorage['numeroCelular'] =
            this.stepOneForm.value.numeroCelular;
          window.sessionStorage['numeroDocumento'] =
            this.stepOneForm.value.numeroDocumento;
          window.sessionStorage['tipoDocumento'] =
            this.stepOneForm.value.tipoDocumento;
          // Marcar como tocados los controles del formulario actual
          this.markFormGroupTouched(this.stepOneForm);
          // Realiza acciones necesarias y avanza al siguiente paso
          // Por ejemplo, puedes mostrar el siguiente paso
        }
        break;
      case 1:
        this.SubmitForm = true;
        this.markFormGroupTouched(this.stepTwoForm);
        if (this.stepTwoForm.valid) {
          window.sessionStorage['especialidad'] =
            this.stepTwoForm.value.especialidad;
          window.sessionStorage['sintomas'] = this.stepTwoForm.value.sintomas;
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
    this.markFormGroupTouched(this.stepThreeForm);
    // Método para enviar el formulario una vez que se completen todos los pasos
    if (this.selectedHour) {
      // Verificar si el formulario es válido antes de mostrar el mensaje
      if (this.stepThreeForm.valid) {
        window.sessionStorage['fechaCita'] = this.stepThreeForm.value.fechaCita;
        // Realiza acciones necesarias para enviar el formulario
        this.StepperForm = 1;
      }
    } else {
      // Mostrar un mensaje indicando que se debe seleccionar una hora
    }
  }
  confirmtForm() {
    Swal.fire({
      title: 'Cita Online',
      text: 'Su cita fue agendada correctamente',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/consultar-cita');
        //window.location = window."/consultar-cita";
      }
    });
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
