//36.2048° N latitude and 138.2529° E longitude
var coordinates = [35.6762, 139.6503];
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.circle(coordinates, {"title": "hello from Japan!",
                      color: "red", fillColor: "#03ddff",
                      radius: 90}).bindPopup("<p>hello from Japan!</p>").addTo(map);
