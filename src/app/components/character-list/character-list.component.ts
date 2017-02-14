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

  getCharacters(page?: number): void
  {
    let ob: Observable<CharacterDataWrapperModel> = this.characterService.getCharacters(page);
    ob.subscribe(
      (stuff: CharacterDataWrapperModel) => this.processDataWrapper(stuff),//console.log("CharacterListComponent getCharacters from Service", stuff),
      error => console.log("CharacterListComponent getCharacters Error: ", error)
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

  // TODO: move to pagination component
  currentPage: number = 1;
  public onNextPage()
  {
    if(!this.currentPage)
    {
      this.currentPage=0;
    }
    this.currentPage++;
    console.log("this.currentPage", this.currentPage)
    this.getCharacters(this.currentPage);
  }

  public onPreviousPage()
  {
    if(!this.currentPage)
    {
      this.currentPage=0;
    }
    if((this.currentPage-1) <= 1)
    {
      this.currentPage = 1;
    }
    else
    {
      this.currentPage--;
    }
    console.log("this.currentPage", this.currentPage);
    this.getCharacters(this.currentPage);
  }




}
