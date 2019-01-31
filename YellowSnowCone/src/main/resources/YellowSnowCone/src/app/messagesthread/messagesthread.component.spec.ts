import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesthreadComponent } from './messagesthread.component';

describe('MessagesthreadComponent', () => {
  let component: MessagesthreadComponent;
  let fixture: ComponentFixture<MessagesthreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesthreadComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesthreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});