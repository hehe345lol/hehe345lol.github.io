//36.2048° N latitude and 138.2529° E longitude
var coordinates = [35.6762, 139.6503];
var popupcode = `<center>
<h3>Hello from Japan!</h3>
<iframe width="400" height="300" src="https://www.youtube.com/embed/IuTDuvYr7f0?si=SUQg8JXxj8nr-YG_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center`;
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.circle(coordinates, {"title": "hello from Japan!",
                      color: "red", fillColor: "#03ddff",
                      radius: 90}).bindPopup(popupcode).addTo(map);
