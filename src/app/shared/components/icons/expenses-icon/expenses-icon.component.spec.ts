import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesIconComponent } from './expenses-icon.component';

describe('ExpensesIconComponent', () => {
  let component: ExpensesIconComponent;
  let fixture: ComponentFixture<ExpensesIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpensesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
