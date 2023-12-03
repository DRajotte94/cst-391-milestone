import { Injectable } from '@angular/core';
import { Spell } from '../models/spells.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpellServiceService {

  private host = "http://localhost:5000"; // API active port
  spells: Spell[] = [];
  spell: Spell;

  constructor(private http: HttpClient) { }

  // Return list of spells
  public getSpells(callback: (spells: Spell[]) => void): void {
    this.http.get<Spell[]>(this.host + "/spells").subscribe((spells: Spell[]) => {
      callback(spells);
    });
  }

  // Return spell by spell_id
  public getSpellById(id: number, callback: (spell: Spell) => void): void {
    this.http.get<Spell>(this.host + "/spells?spellId=" + id).subscribe((spell: Spell) => {
      callback(spell);
    });
  }

  // create new spell
  public createSpell(spell: Spell, callback: () => void): void {
    this.http.post<Spell>(this.host + "/spells", spell).subscribe((data) => {
      callback();
    });
  }

  // edit the selected spell
  public editSpell(spell: Spell, callback: () => void): void {
    this.http.put<Spell>(this.host + "/spells", spell).subscribe((data) => {
      callback();
    });
  }

  // delete spell from database
  public deleteSpell(id: number, callback: () => void): void {
    this.http.delete<Spell>(this.host + "/spells/" + id).subscribe((data) => {
      callback();
    });
  }
}
