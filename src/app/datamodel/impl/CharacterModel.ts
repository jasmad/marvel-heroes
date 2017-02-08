/**
 * Created by madrebel on 5/2/2017.
 */

import {UrlModel} from "./UrlModel";
import {ImageModel} from "./ImageModel";
import {ComicListModel} from "./ComicListModel";
import {StoryListModel} from "./StoryListModel";
import {EventListModel} from "./EventListModel";
import {SeriesListModel} from "./SeriesListModel";


export class CharacterModel
{
  /**
   *  The unique ID of the character resource.,
   */
  public id: number;

  /**
   *  The name of the character.,
   */
  public name: string;

  /**
   *   A short bio or description of the character.,
   */
  public description: string;

  /**
   *  The date the resource was most recently modified.,
   */
  public modified: Date;

  /**
   *  The canonical URL identifier for this resource.,
   */
  public resourceURI: string;

  /**
   *  A set of public web site URLs for the resource.,
   */
  public urls: Array<UrlModel>;

  /**
   *  The representative image for this character.,
   */
  public thumbnail: ImageModel;

  /**
   *  A resource list containing comics which feature this character.,
   */
  public comics: ComicListModel;

  /**
   *  A resource list of stories in which this character appears.,
   */
  public stories: StoryListModel;

  /**
   *  A resource list of events in which this character appears.,
   */
  public events: EventListModel;

  /**
   *  A resource list of series in which this character appears.
   */
  public series: SeriesListModel;


}
