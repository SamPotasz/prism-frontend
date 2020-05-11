import React from 'react';
import { GeoJSONLayer } from 'react-mapbox-gl';
import * as MapboxGL from 'mapbox-gl';
import adminBoundaries from '../../../config/bag.json';

const linePaint: MapboxGL.LinePaint = {
  'line-color': 'grey',
  'line-width': 1,
  'line-opacity': 0.3,
};

/**
 * To activate fillOnClick option, we "fill in"
 * polygons with opacity 0.
 */
const fillPaint: MapboxGL.FillPaint = { 'fill-opacity': 0 };
/*
// Get admin data to process.
//function getAdminData(evt: any) {
// eslint-disable-next-line
// console.log(get(evt.features[0], 'properties.ADM2_PCODE'));
//}
*/
function Nso() {
  return (
    <GeoJSONLayer
      data={adminBoundaries}
      linePaint={linePaint}
      fillPaint={fillPaint}
    />
  );
}

export default Nso;
