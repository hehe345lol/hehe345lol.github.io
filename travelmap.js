//36.2048° N latitude and 138.2529° E longitude
var coordinates = [36.2048, 138.2529];
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.marker(coordninates, {"title": "hello from Japan!"}).bindPopup("<p>hello from Japan!</p>").addTo(map);
