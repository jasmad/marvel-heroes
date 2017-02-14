import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import {CharacterService} from "./services/characters/character.service";
import { CharacterThumbnailComponent } from './components/character-thumbnail/character-thumbnail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroListComponent,
    HeroSearchComponent,
    CharacterListComponent,
    CharacterThumbnailComponent
  ],
  providers: [HeroService, CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
