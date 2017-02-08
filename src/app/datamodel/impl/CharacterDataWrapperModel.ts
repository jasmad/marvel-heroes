/**
 * Created by madrebel on 5/2/2017.
 */

import {ResourceDataWrapper} from "../abstract/ResourceDataWrapper";
import {CharacterDataContainerModel} from "./CharacterDataContainerModel";

export class CharacterDataWrapperModel extends ResourceDataWrapper
{
  /**
   * The results returned by the call.
   */
  public data: CharacterDataContainerModel;
}
