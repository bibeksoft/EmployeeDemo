import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectupdateAddComponent } from './projectupdate-add.component';

describe('ProjectupdateAddComponent', () => {
  let component: ProjectupdateAddComponent;
  let fixture: ComponentFixture<ProjectupdateAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectupdateAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectupdateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
