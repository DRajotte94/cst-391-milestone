import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListSpellsComponent } from './list-spells/list-spells.component';
import { CreateSpellComponent } from './create-spell/create-spell.component';
import { EditSpellComponent } from './edit-spell/edit-spell.component';
import { DeleteSpellComponent } from './delete-spell/delete-spell.component';
import { DisplaySpellComponent } from './display-spell/display-spell.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListSpellsComponent,
    CreateSpellComponent,
    EditSpellComponent,
    DeleteSpellComponent,
    DisplaySpellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
