/**
 * Created by madrebel on 5/2/2017.
 */


import {IResourceDataWrapper} from "../interfaces/IResourceDataWrapper";
import {ResourceDataContainer} from "./ResourceDataContainer";

export abstract class ResourceDataWrapper implements IResourceDataWrapper
{
  /**
   * The HTTP status code of the returned result.
   */
  public code: number;
  /**
   * A string description of the call status.
   */
  public status: string;
  /**
   * The copyright notice for the returned result.
   */
  public copyright: string;
  /**
   * The attribution notice for this result. Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API.
   */
  public attributionText: string;
  /**
   * An HTML representation of the attribution notice for this result. Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API.
   */
  public attributionHTML: string;
  /**
   * The results returned by the call.
   */
  public data: ResourceDataContainer;
  /**
   * A digest value of the content returned by the call.
   */
  public etag: string;
}
