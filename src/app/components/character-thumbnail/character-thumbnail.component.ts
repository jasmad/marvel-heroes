import {Component, OnInit, Input} from '@angular/core';
import {CharacterModel} from "../../datamodel/impl/CharacterModel";

@Component({
  selector: 'app-character-thumbnail',
  templateUrl: './character-thumbnail.component.html',
  styleUrls: ['./character-thumbnail.component.css']
})
export class CharacterThumbnailComponent implements OnInit {

  @Input()
  public character: CharacterModel;

  constructor() { }

  ngOnInit() {

  }

}
