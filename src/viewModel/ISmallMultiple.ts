/** Power BI API references */
import powerbi from "powerbi-visuals-api";
import ISelectionId = powerbi.visuals.ISelectionId;

/** Internal dependencies */
import ISmallMultipleMeasure from "./ISmallMultipleMeasure";
import IElementSideDimension from "./IElementSideDimension";

/**
 * Defines the structure of a small multiple object within the visual.
 */
export default interface ISmallMultiple {
  name: string;
  measures: ISmallMultipleMeasure[];
  margin: IElementSideDimension;
  spacing: IElementSideDimension;
  selectionId: ISelectionId;
  row: number;
  column: number;
  backgroundColour: string;
  titleColour: string;
}
