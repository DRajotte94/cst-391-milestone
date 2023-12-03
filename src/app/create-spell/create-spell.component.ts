import { Component, OnInit } from '@angular/core';
import { Spell } from '../models/spells.model';
import { SpellServiceService } from '../service/spell-service.service';

@Component({
  selector: 'app-create-spell',
  templateUrl: './create-spell.component.html',
  styleUrls: ['./create-spell.component.css']
})
export class CreateSpellComponent implements OnInit {

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

  constructor(private service: SpellServiceService) { }

  ngOnInit() {
  }

  public onSubmit() {
    console.log(this.spell);
    this.service.createSpell(this.spell, () => {
      this.wasSubmitted = true;
    });
  }
}
