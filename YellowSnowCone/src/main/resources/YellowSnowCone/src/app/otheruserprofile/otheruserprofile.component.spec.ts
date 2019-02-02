import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtheruserprofileComponent } from './otheruserprofile.component';

describe('OtheruserprofileComponent', () => {
  let component: OtheruserprofileComponent;
  let fixture: ComponentFixture<OtheruserprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtheruserprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtheruserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
