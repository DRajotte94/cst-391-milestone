import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpellComponent } from './create-spell.component';

describe('CreateSpellComponent', () => {
  let component: CreateSpellComponent;
  let fixture: ComponentFixture<CreateSpellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSpellComponent]
    });
    fixture = TestBed.createComponent(CreateSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
