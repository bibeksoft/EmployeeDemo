import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockstarsDetailsComponent } from './performance-details.component';

describe('RockstarsDetailsComponent', () => {
  let component: RockstarsDetailsComponent;
  let fixture: ComponentFixture<RockstarsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockstarsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockstarsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
