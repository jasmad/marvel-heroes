/**
 * Created by madrebel on 5/2/2017.
 */

import {ResourceList} from "../abstract/ResourceList";
import {StorySummaryModel} from "./StorySummaryModel";

export class StoryListModel extends ResourceList
{
  public items: Array<StorySummaryModel>;
}
