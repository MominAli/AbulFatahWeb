import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiograhpyComponent } from './biograhpy.component';

describe('BiograhpyComponent', () => {
  let component: BiograhpyComponent;
  let fixture: ComponentFixture<BiograhpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiograhpyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiograhpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
