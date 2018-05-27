/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.extensibility.visual {
    "use strict";
    import DataViewObjectsParser = powerbi.extensibility.utils.dataview.DataViewObjectsParser;
    import ValueFormatter = powerbi.extensibility.utils.formatting.valueFormatter;

    let defaultFontSize: number = 11;
    let defaultFontSizeSmall: number = 8;
    let defaultFontFamily: string = '"Segoe UI", wf_segoe-ui_normal, helvetica, arial, sans-serif';
    let defaultFontColor: string = '#777777';
    let defaultAxisFontColor: string = '#777777';
    let defaultAxisGridlineColor: string = '#EAEAEA';
    let defaultBackgroundColor: string = null;
    let defaultBackgroundColorAlternate: string = '#F3F3F3';

    export class VisualSettings extends DataViewObjectsParser {
      public debug: debugSettings = new debugSettings();
      public smallMultiple: smallMultipleSettings = new smallMultipleSettings();
      public legend: legendSettings = new legendSettings();
      public colorSelector: colorSelectorSettings = new colorSelectorSettings();
      public yAxis: yAxisSettings = new yAxisSettings();
    }

    export class debugSettings {
      public show: boolean = true;
    }

    export class colorSelectorSettings {

    }

    export class legendSettings {
      // Show legend
      public show: boolean = true;
      // Legend position
      public position: string = 'Top';
      // Show title
      public showTitle: boolean = true;
      // Title text
      public titleText: string = 'Legend';
      // Include x-ranges
      public includeRanges: boolean = true;
      // Font color
      public fontColor: string = defaultFontColor;
      // Text Size
      public fontSize: number = defaultFontSizeSmall;
    }

    export class smallMultipleSettings {
      // Show label
      public showMultipleLabel: boolean = true;
      // Font color
      public fontColor: string = defaultFontColor;
      // Position
      public labelPosition: string = 'top';
      // Alignment
      public labelAlignment: string = 'center';
      // Text Size
      public fontSize: number = defaultFontSize;
      // Font
      public fontFamily: string = defaultFontFamily;
      // Maximum multiples per row
      public maximumMultiplesPerRow: number = null;
      // Background color
      public backgroundColor: string = defaultBackgroundColor;
      // Background transparency
      public backgroundTransparency: number = 50;
      // Banded multiples switch
      public bandedMultiples: boolean = false;
      // Alternate background color
      public backgroundColorAlternate: string = defaultBackgroundColorAlternate;
      // Alternate font color
      public fontColorAlternate: string = defaultAxisFontColor;
      
      // No capabilities, so not in the properties pane, but still accessible

        // Required height for multiple label
        public labelHeight: number = 0;

    }

    

    export class axisSettings {
      // Show whole axis
      public show: boolean = true;
      // Font color
      public fontColor: string = defaultFontColor;
      // Text Size
      public fontSize: number = defaultFontSize;
      // Font
      public fontFamily: string = defaultFontFamily;
      // Display Units
      public labelDisplayUnits: number = 0;
      // Precision
      public precision: number = null;
      // Show Title
      public showTitle: boolean = true;
      // Title Style
      public titleStyle: string = 'title'
      // Title Colour
      public titleColor: string = defaultAxisFontColor;
      // Title
      public titleText: string = null;
      // Title Text Size
      public titleFontSize: number = defaultFontSize;
      // Title Font
      public titleFontFamily: string = defaultFontFamily;
      // Gridlines Toggle
      public gridlines: boolean = true;
      // Gridline colour
      public gridlineColor: string = defaultAxisGridlineColor;
      // Gridline stroke width
      public gridlineStrokeWidth: number = 1;
      // Gridline line style
      public gridlineStrokeLineStyle: string = 'solid';
      // No capabilities, so not in the properties pane, but still accessible

        // Axis number format
        public numberFormat: utils.formatting.IValueFormatter;

    }

    // Independent of the toggle
    export class yAxisSettings extends axisSettings {
      // Axis range start
      public start: number = null;
      // Axis range end
      public end: number = null;
      
      // No capabilities, so not in the properties pane, but still accessible

        // Specified width of y-axis
        public width: number = 0;

    }




}
