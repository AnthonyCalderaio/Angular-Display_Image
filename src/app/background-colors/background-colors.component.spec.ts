import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundColorsComponent } from './background-colors.component';

describe('BackgroundColorsComponent', () => {
  let component: BackgroundColorsComponent;
  let fixture: ComponentFixture<BackgroundColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
