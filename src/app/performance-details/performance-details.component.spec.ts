import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { performanceDetailsComponent } from './performance-details.component'

describe('performanceDetailsComponent', () => {
  let component: performanceDetailsComponent;
  let fixture: ComponentFixture<performanceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [performanceDetailsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(performanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
