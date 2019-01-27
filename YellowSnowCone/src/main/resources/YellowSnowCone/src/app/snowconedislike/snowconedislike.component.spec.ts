import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowconedislikeComponent } from './snowconedislike.component';

describe('SnowconedislikeComponent', () => {
  let component: SnowconedislikeComponent;
  let fixture: ComponentFixture<SnowconedislikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowconedislikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowconedislikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
