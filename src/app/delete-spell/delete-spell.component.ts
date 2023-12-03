import { Component, Input } from '@angular/core';
import { Spell } from '../models/spells.model';
import { ActivatedRoute } from '@angular/router';
import { SpellServiceService } from '../service/spell-service.service';

@Component({
  selector: 'app-delete-spell',
  templateUrl: './delete-spell.component.html',
  styleUrls: ['./delete-spell.component.css']
})
export class DeleteSpellComponent {
  @Input() spell_id: number;

  constructor(private route: ActivatedRoute, private service: SpellServiceService) { }

  ngOnInit() {
  }

  deleteSpell(spell_id: number) {
    if(confirm("Are you sure you want to delete this?")) {
      this.service.deleteSpell(this.spell_id, () => {
        console.log(`Spell ${this.spell_id} has been removed`);
        window.location.reload();
      });
    }
  }
}
