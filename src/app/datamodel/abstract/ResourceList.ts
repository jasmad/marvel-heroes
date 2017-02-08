/**
 * Created by madrebel on 5/2/2017.
 */

import {ResourceSummary} from "./ResourceSummary";
import {IResourceList} from "../interfaces/IResourceList";

export class ResourceList implements IResourceList
{

  /**
   * The number of total available issues in this list. Will always be greater than or equal to the "returned" value.
   */
  public available :number;
  /**
   * The number of issues returned in this collection (up to 20).
   */
  public returned :number;
  /**
   * The path to the full list of issues in this collection.
   */
  public collectionURI :string;
  /**
   * The list of returned respurce in this collection.
   */
  public items :Array<ResourceSummary>;



}
