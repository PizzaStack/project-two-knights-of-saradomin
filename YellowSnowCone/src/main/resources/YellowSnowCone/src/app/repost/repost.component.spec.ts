import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepostComponent } from './repost.component';

describe('RepostComponent', () => {
  let component: RepostComponent;
  let fixture: ComponentFixture<RepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
