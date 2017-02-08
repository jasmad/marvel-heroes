/**
 * Created by madrebel on 5/2/2017.
 */

import {ResourceList} from "../abstract/ResourceList";
import {ComicSummaryModel} from "./ComicSummaryModel";

export class ComicListModel extends ResourceList
{
  /**
   * The list of returned issues in this collection.
   */
  public items: Array<ComicSummaryModel>;
}
