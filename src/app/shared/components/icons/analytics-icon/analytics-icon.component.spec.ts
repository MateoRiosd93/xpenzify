import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsIconComponent } from './analytics-icon.component';

describe('AnalyticsIconComponent', () => {
  let component: AnalyticsIconComponent;
  let fixture: ComponentFixture<AnalyticsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyticsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
