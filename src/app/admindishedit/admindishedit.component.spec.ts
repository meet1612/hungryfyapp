import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindisheditComponent } from './admindishedit.component';

describe('AdmindisheditComponent', () => {
  let component: AdmindisheditComponent;
  let fixture: ComponentFixture<AdmindisheditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindisheditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindisheditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
