import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySpellComponent } from './display-spell.component';

describe('DisplaySpellComponent', () => {
  let component: DisplaySpellComponent;
  let fixture: ComponentFixture<DisplaySpellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaySpellComponent]
    });
    fixture = TestBed.createComponent(DisplaySpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
