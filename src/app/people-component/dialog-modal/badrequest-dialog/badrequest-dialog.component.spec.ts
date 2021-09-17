import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadrequestDialogComponent } from './badrequest-dialog.component';

describe('BadrequestComponent', () => {
  let component: BadrequestDialogComponent;
  let fixture: ComponentFixture<BadrequestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadrequestDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadrequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
