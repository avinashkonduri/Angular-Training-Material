import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibillingComponent } from './sibilling.component';

describe('SibillingComponent', () => {
  let component: SibillingComponent;
  let fixture: ComponentFixture<SibillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SibillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SibillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
