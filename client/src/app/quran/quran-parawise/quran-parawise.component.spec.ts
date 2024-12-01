import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuranParawiseComponent } from './quran-parawise.component';

describe('QuranParawiseComponent', () => {
  let component: QuranParawiseComponent;
  let fixture: ComponentFixture<QuranParawiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuranParawiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuranParawiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
