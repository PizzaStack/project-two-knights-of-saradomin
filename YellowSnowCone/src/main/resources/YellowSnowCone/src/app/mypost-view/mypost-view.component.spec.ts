import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypostViewComponent } from './mypost-view.component';

describe('MypostViewComponent', () => {
  let component: MypostViewComponent;
  let fixture: ComponentFixture<MypostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
