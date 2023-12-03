import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpellServiceService } from '../service/spell-service.service';
import { Spell } from '../models/spells.model';

@Component({
  selector: 'app-list-spells',
  templateUrl: './list-spells.component.html',
  styleUrls: ['./list-spells.component.css']
})

export class ListSpellsComponent {
  selectedSpell: Spell | null = null;
  spells: Spell[] = [];

  constructor(private route: ActivatedRoute, private service: SpellServiceService) { }

  ngOnInit() {
    console.log("Getting spells list from database...");
    this.service.getSpells((spells: Spell[]) => {
      this.spells = spells;
    });
  }

  onSelectSpell(spell: Spell) {
    this.selectedSpell = spell;
  }
}
