import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsDetailsViewComponent } from './teams-details-view.component';

describe('TeamsDetailsViewComponent', () => {
  let component: TeamsDetailsViewComponent;
  let fixture: ComponentFixture<TeamsDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsDetailsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
