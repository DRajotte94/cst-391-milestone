import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpellsComponent } from './list-spells.component';

describe('ListSpellsComponent', () => {
  let component: ListSpellsComponent;
  let fixture: ComponentFixture<ListSpellsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSpellsComponent]
    });
    fixture = TestBed.createComponent(ListSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
