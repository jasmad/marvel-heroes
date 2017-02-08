/**
 * Created by madrebel on 5/2/2017.
 */

import {IResourceSummary} from "../interfaces/IResourceSummary";

export abstract class ResourceSummary implements IResourceSummary
{
  /**
   * The path to the individual comic resource.
   */
  public resourceURI :string;

  /**
   * The canonical name of the comic.
   */
  public name :string;
}
