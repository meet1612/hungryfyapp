import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincusineeditComponent } from './admincusineedit.component';

describe('AdmincusineeditComponent', () => {
  let component: AdmincusineeditComponent;
  let fixture: ComponentFixture<AdmincusineeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincusineeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincusineeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
