const L = window.L;
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

    const map = L.map('map', mapOptions);

    const tileLayer = L.tileLayer(url);

    tileLayer.addTo(map);

    const icon = L.icon({
      iconUrl: './img/svg/pin.svg',
      iconSize: [70, 70],
      iconAnchor: [40, 70],
    });

    const marker = L.marker(coordinate, {icon});

    marker.addTo(map);
  }
};

export {initMap};
