export * from './index';

import {createMap} from './components/map';

// `mapbox-gl/esm` requires mapbox-gl v3.23 or newer.
// eslint-disable-next-line import/no-unresolved
export const Map = createMap(() => import('mapbox-gl/esm'));
export default Map;
