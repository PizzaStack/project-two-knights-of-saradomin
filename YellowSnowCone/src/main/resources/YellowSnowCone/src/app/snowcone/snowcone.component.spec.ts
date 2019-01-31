import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowconeComponent } from './snowcone.component';

describe('SnowconeComponent', () => {
  let component: SnowconeComponent;
  let fixture: ComponentFixture<SnowconeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnowconeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});