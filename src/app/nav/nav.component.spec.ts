import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NAVComponent } from './nav.component';

describe('NAVComponent', () => {
  let component: NAVComponent;
  let fixture: ComponentFixture<NAVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NAVComponent]
    });
    fixture = TestBed.createComponent(NAVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
