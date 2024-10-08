import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsFormComponent } from './teams-form.component';

describe('TeamsFormComponent', () => {
  let component: TeamsFormComponent;
  let fixture: ComponentFixture<TeamsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
