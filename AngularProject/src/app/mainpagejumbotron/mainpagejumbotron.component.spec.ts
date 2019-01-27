import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpagejumbotronComponent } from './mainpagejumbotron.component';

describe('MainpagejumbotronComponent', () => {
  let component: MainpagejumbotronComponent;
  let fixture: ComponentFixture<MainpagejumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpagejumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpagejumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
