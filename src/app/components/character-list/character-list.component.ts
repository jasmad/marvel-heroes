import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../../services/characters/character.service";
import {CharacterModel} from "../../datamodel/impl/CharacterModel";

import {Observable, Subscription} from "rxjs";

import '../../rxjs-extensions';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: CharacterModel[];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void
  {
    let ob: Observable<any> = this.characterService.getCharacters();
    ob.subscribe(
      stuff => console.log(stuff),
      error => console.log("Error: ", error)
    );
      // .suscribe(
      //   response => {
      //     console.log("CharacterListComponent characterService.getCharacters() response: ", response);
      //   },
      //   err => {
      //     console.error(err);
      //   }
      // );
      // .then(response => {
      //   console.log("CharacterListComponent characterService.getCharacters() response: ", response);
      // });
  }

}
