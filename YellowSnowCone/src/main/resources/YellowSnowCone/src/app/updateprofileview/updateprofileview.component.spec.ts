import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprofileviewComponent } from './updateprofileview.component';

describe('UpdateprofileviewComponent', () => {
  let component: UpdateprofileviewComponent;
  let fixture: ComponentFixture<UpdateprofileviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateprofileviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprofileviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
