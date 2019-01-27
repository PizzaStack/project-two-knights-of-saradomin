import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeviewComponent } from './welcomeview.component';

describe('WelcomeviewComponent', () => {
  let component: WelcomeviewComponent;
  let fixture: ComponentFixture<WelcomeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
