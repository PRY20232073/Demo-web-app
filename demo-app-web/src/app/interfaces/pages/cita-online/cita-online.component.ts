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
import {
  DateAdapter,
  ErrorStateMatcher,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { Router } from '@angular/router';
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
  selector: 'app-cita-online',
  templateUrl: './cita-online.component.html',
  styleUrls: ['./cita-online.component.css'],
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
    'Medicina General',
    'Cardiología',
    'Dermatología',
    'Obstetricia',
    'Urología',
    'Pediatría',
    'Oncología',
    'Neurología',
    'Ginecología',
    'Traumatología',
    'Oftalmología',
    'Endocrinología',
    'Gastroenterología',
    'Psiquiatría',
    'Nefrología',
    'Hematología',
    'Radiología',
    'Fisioterapia',
    'Nutrición',
    'Rehabilitación',
  ];
  selectedHour: string | null = null;
  filteredOptions: Observable<string[]> | undefined;
  SubmitForm = false;

  //Indica si inicia con el form o el resumen
  StepperForm = 0;
  stepOneForm = this.fb.group({
    tipoDocumento: [this.tipoDocumento[0].value, Validators.required],
    numeroDocumento: ['', Validators.required],
    numeroCelular: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
  });

  stepTwoForm = this.fb.group({
    especialidad: ['', [Validators.required, this.customValidator.bind(this)]],
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
  private audio = new Audio();
  constructor(
    private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private router: Router,
    private datePipe: DatePipe
  ) {}
  selectedDate: any;
  name = 'Angular 6';
  availableHours: string[] = [];
  faltaHora: boolean = false;

  dataSource = [
    { label: 'Tipo de Documento', value: this.stepOneForm.value.tipoDocumento },
    {
      label: 'Número de Documento',
      value: this.stepOneForm.value.numeroDocumento,
    },
    {
      label: 'Fecha de Nacimiento',
      value: this.stepOneForm.value.fechaNacimiento,
    },
    { label: 'Número de Celular', value: this.stepOneForm.value.numeroCelular },
    { label: 'Especialidad', value: this.stepTwoForm.value.especialidad },
    { label: 'Síntomas', value: this.stepTwoForm.value.sintomas },
    { label: 'Fecha de Cita', value: this.stepThreeForm.value.fechaCita },
  ];
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
      this.faltaHora = true;
      this.selectedHour = null;
    } else {
      this.faltaHora = false;
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
    this.ahora = datePite.transform(
      new Date().setDate(new Date().getDate() + 1),
      'yyyy-MM-dd'
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(filterValue);
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
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
  backForm() {
    this.StepperForm = 0;
  }
  submitForm() {
    this.markFormGroupTouched(this.stepThreeForm);
    // Método para enviar el formulario una vez que se completen todos los pasos
    if (this.selectedHour) {
      // Verificar si el formulario es válido antes de mostrar el mensaje
      if (this.stepThreeForm.valid) {
        window.sessionStorage['fechaCita'] = this.stepThreeForm.value.fechaCita;
        // Realiza acciones necesarias para enviar el formulario
        this.dataSource = [
          {
            label: 'Tipo de Documento',
            value: this.stepOneForm.value.tipoDocumento,
          },
          {
            label: 'Número de Documento',
            value: this.stepOneForm.value.numeroDocumento,
          },
          {
            label: 'Fecha de Nacimiento',
            value: this.datePipe.transform(
              this.stepOneForm.value.fechaNacimiento,
              'dd/MM/yyyy'
            ),
          },
          {
            label: 'Número de Celular',
            value: this.stepOneForm.value.numeroCelular,
          },
          { label: 'Especialidad', value: this.stepTwoForm.value.especialidad },
          { label: 'Síntomas', value: this.stepTwoForm.value.sintomas },
          {
            label: 'Fecha de Cita',
            value:
              this.datePipe.transform(
                this.stepThreeForm.value.fechaCita,
                'dd/MM/yyyy'
              ) +
              ' ' +
              this.selectedHour,
          },
        ];
        this.StepperForm = 1;
      }
    } else {
      this.faltaHora = true;
      // Mostrar un mensaje indicando que se debe seleccionar una hora
    }
  }
  confirmtForm() {
    this.audio.src = '../../../../assets/sounds/notificacion.wav';
    this.audio.volume = 0.3;
    this.audio.play();
    setTimeout(() => {}, 400);
    Swal.fire({
      title: 'Cita Online',
      text: 'Su cita fue agendada correctamente',
      icon: 'success',
      confirmButtonColor: '#D50000',
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
  customValidator(control: any) {
    const inputValue = control.value;
    this.filteredOptions = this.especialidad.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(inputValue || ''))
    );

    return this.verificarValor(inputValue) ? null : { invalidOption: true };
  }
  verificarValor(inputValue: any): boolean {
    return this.options.includes(inputValue);
  }
}
