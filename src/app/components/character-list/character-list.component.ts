import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../../services/characters/character.service";
import {CharacterModel} from "../../datamodel/impl/CharacterModel";

import {Observable, Subscription} from "rxjs";

import '../../rxjs-extensions';
import {CharacterDataWrapperModel} from "../../datamodel/impl/CharacterDataWrapperModel";
import {CharacterDataContainerModel} from "../../datamodel/impl/CharacterDataContainerModel";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: CharacterModel[];
  attributionHTML: string;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void
  {
    let ob: Observable<CharacterDataWrapperModel> = this.characterService.getCharacters();
    ob.subscribe(
      (stuff: CharacterDataWrapperModel) => this.processDataWrapper(stuff),//console.log("CharacterListComponent getCharacters from Service", stuff),
      error => console.log("CharacterListComponent Error: ", error)
    );
  }

  private processDataWrapper(wrapper: CharacterDataWrapperModel)
  {
    this.attributionHTML = wrapper.attributionHTML;
    this.populateCharactersFromWrapper(wrapper);

  }

  private populateCharactersFromWrapper(wrapper: CharacterDataWrapperModel)
  {
    const container: CharacterDataContainerModel = (wrapper.data as CharacterDataContainerModel);
    this.characters = container.results;
  }

}
