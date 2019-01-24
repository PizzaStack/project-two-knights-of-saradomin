import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowconelikeComponent } from './snowconelike.component';

describe('SnowconelikeComponent', () => {
  let component: SnowconelikeComponent;
  let fixture: ComponentFixture<SnowconelikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowconelikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowconelikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
