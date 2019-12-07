/*
 * Public API Surface of mapir-angular-component
 */

export * from './lib/mapir-angular-component.module';

// Expose control component to allow custom directives
export * from './lib/control/control.component';

// Expose MapService for mapir-angular-component extensions
export * from './lib/map/map.service';
export * from './lib/map/map.component';

// Expose GeoJSONSourceComponent to access cluster functions
export * from './lib/source/geojson/geojson-source.component';

export * from './lib/map/map.types';

// Expose GeocoderControlDirective provided injection tokens
export { MAPBOX_GEOCODER_API_KEY } from './lib/control/geocoder-control.directive';
