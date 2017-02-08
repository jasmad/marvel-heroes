/**
 * Created by madrebel on 5/2/2017.
 */

import {ResourceDataContainer} from "../abstract/ResourceDataContainer";
import {Character} from "./CharacterModel";

export class CharacterDataContainerModel extends ResourceDataContainer
{
  /**
   * The list of characters returned by the call.
   */
  public results: Array<Character>;
}
