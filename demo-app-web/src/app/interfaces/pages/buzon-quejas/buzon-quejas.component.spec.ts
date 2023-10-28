import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzonQuejasComponent } from './buzon-quejas.component';

describe('BuzonQuejasComponent', () => {
  let component: BuzonQuejasComponent;
  let fixture: ComponentFixture<BuzonQuejasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuzonQuejasComponent]
    });
    fixture = TestBed.createComponent(BuzonQuejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
