export * from './index';

import {createMap} from './components/map';

// eslint-disable-next-line import/no-unresolved
export const Map = createMap(() => import('mapbox-gl/esm'));
export default Map;
