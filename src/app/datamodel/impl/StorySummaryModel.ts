/**
 * Created by madrebel on 5/2/2017.
 */

import {ResourceSummary} from "../abstract/ResourceSummary";

export class StorySummaryModel extends ResourceSummary
{
  /**
   * The type of the story (interior or cover).
   */
  public type: string;
}
