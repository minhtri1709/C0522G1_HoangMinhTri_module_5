import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoundownTimerComponent } from './coundown-timer.component';

describe('CoundownTimerComponent', () => {
  let component: CoundownTimerComponent;
  let fixture: ComponentFixture<CoundownTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoundownTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoundownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
