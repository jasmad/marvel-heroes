/**
 * Created by madrebel on 5/2/2017.
 */

import {IResourceDataContainer} from "../interfaces/IResourceDataContainer";


export abstract class ResourceDataContainer implements IResourceDataContainer
{
  /**
   * The requested offset (number of skipped results) of the call.
   */
  public offset: number;
  /**
   * The requested result limit.
   */
  public limit: number;
  /**
   * The total number of resources available given the current filter set.
   */
  public total: number;
  /**
   * The total number of results returned by this call.
   */
  public count: number;
  /**
   * The list of objects returned by the call.
   */
  public results: Array<Object>
}
