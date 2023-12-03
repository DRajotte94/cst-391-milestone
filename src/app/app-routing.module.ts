import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSpellComponent } from './create-spell/create-spell.component';
import { ListSpellsComponent } from './list-spells/list-spells.component';
import { DisplaySpellComponent } from './display-spell/display-spell.component';
import { EditSpellComponent } from './edit-spell/edit-spell.component';
import { DeleteSpellComponent } from './delete-spell/delete-spell.component';

const routes: Routes = [
  { path: 'create', component: CreateSpellComponent },
  { path: 'spell-list', component: ListSpellsComponent },
  { path: 'display/:id', component: DisplaySpellComponent },
  { path: 'edit/:id', component: EditSpellComponent },
  { path: 'delete/:id', component: DeleteSpellComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
