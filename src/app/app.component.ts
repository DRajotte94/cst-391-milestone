import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Spell Book';

  constructor(private router: Router) { }

  displaySpells() {
    this.router.navigate(['spell-list'], { queryParams: { data: new Date() } });
  }
}
