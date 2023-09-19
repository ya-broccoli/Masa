import {map as createMap, tileLayer as createTileLayer, icon as createIcon, marker as createMarker} from '../../vendor/leaflet';
const myMap = document.querySelector('#map');

const initMap = () => {
  if (myMap) {
    myMap.querySelector('picture').remove();

    const coordinate = [55.028553, 82.928182];
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const mapOptions = {
      center: coordinate,
      zoom: 17,
      scrollWheelZoom: false,
    };

    const map = createMap('map', mapOptions);

    const tileLayer = createTileLayer(url);

    tileLayer.addTo(map);

    const icon = createIcon({
      iconUrl: './img/svg/pin.svg',
      iconSize: [70, 70],
      iconAnchor: [40, 70],
    });

    const marker = createMarker(coordinate, {icon});

    marker.addTo(map);
  }
};

export {initMap};
