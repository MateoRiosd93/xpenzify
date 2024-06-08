import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesIconComponent } from './incomes-icon.component';

describe('IncomesIconComponent', () => {
  let component: IncomesIconComponent;
  let fixture: ComponentFixture<IncomesIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomesIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncomesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
