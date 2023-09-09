import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOOTERComponent } from './footer.component';

describe('FOOTERComponent', () => {
  let component: FOOTERComponent;
  let fixture: ComponentFixture<FOOTERComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FOOTERComponent]
    });
    fixture = TestBed.createComponent(FOOTERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
