import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketsIconComponent } from './pockets-icon.component';

describe('PocketsIconComponent', () => {
  let component: PocketsIconComponent;
  let fixture: ComponentFixture<PocketsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PocketsIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PocketsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
