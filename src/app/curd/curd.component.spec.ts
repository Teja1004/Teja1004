import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CURDComponent } from './curd.component';

describe('CURDComponent', () => {
  let component: CURDComponent;
  let fixture: ComponentFixture<CURDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CURDComponent]
    });
    fixture = TestBed.createComponent(CURDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
