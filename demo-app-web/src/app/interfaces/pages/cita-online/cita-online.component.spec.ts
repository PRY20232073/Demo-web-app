import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaOnlineComponent } from './cita-online.component';

describe('CitaOnlineComponent', () => {
  let component: CitaOnlineComponent;
  let fixture: ComponentFixture<CitaOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitaOnlineComponent]
    });
    fixture = TestBed.createComponent(CitaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
