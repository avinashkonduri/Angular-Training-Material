import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSibComponent } from './child-sib.component';

describe('ChildSibComponent', () => {
  let component: ChildSibComponent;
  let fixture: ComponentFixture<ChildSibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildSibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildSibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
