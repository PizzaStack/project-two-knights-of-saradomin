import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepictureComponent } from './profilepicture.component';

describe('ProfilepictureComponent', () => {
  let component: ProfilepictureComponent;
  let fixture: ComponentFixture<ProfilepictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilepictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilepictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
