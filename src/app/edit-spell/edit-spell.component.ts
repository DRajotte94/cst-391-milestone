import { Component, Input } from '@angular/core';
import { Spell } from '../models/spells.model';
import { ActivatedRoute } from '@angular/router';
import { SpellServiceService } from '../service/spell-service.service';

@Component({
  selector: 'app-edit-spell',
  templateUrl: './edit-spell.component.html',
  styleUrls: ['./edit-spell.component.css']
})

export class EditSpellComponent {
  spell: Spell = {
    spellId: Math.floor(Math.random() * 1000000),
    name: "",
    school: "",
    castTime: "",
    spellRange: "",
    duration: "",
    level: 0,
    classes: "",
    image: "",
    source: "",
    description: "",
  };
  
  wasSubmitted: boolean = false;

  constructor(private route: ActivatedRoute, private service: SpellServiceService) { }

  ngOnInit() {
    this.spell.spellId = parseInt(this.route.snapshot.paramMap.get('id')!);
    // this.service.getSpellById(parseInt(this.spell_id), (spell: Spell) => {
    //   this.spell = spell;
    // });
  }

  onSubmit() {
    this.service.editSpell(this.spell, () => {
      this.wasSubmitted = true;
    });
  }
}
