import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmagastoComponent } from './confirmagasto.component';

describe('ConfirmagastoComponent', () => {
  let component: ConfirmagastoComponent;
  let fixture: ComponentFixture<ConfirmagastoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmagastoComponent]
    });
    fixture = TestBed.createComponent(ConfirmagastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
