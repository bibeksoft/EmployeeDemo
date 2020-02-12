import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockStarsComponent } from './rock-stars.component';

describe('RockStarsComponent', () => {
  let component: RockStarsComponent;
  let fixture: ComponentFixture<RockStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
