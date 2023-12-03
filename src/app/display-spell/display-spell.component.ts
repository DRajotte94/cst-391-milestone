import { Component, Input } from '@angular/core';
import { Spell } from '../models/spells.model';

@Component({
  selector: 'app-display-spell',
  templateUrl: './display-spell.component.html',
  styleUrls: ['./display-spell.component.css']
})
export class DisplaySpellComponent {
  @Input() spell: Spell;

  return() {
    window.location.reload();
  }
}
