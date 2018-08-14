import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincusineComponent } from './admincusine.component';

describe('AdmincusineComponent', () => {
  let component: AdmincusineComponent;
  let fixture: ComponentFixture<AdmincusineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincusineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincusineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
