var lat = 45.7748593;
var long = 4.77;
var myMap = L.map('map').setView([lat, long], 13);

var borneIcon = L.icon({
    iconUrl: 'leaflet/images/arbre_no_bg.png',
    shadowUrl: 'marker-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([45.7755608,4.7782374],{icon:borneIcon}).addTo(myMap);
L.marker([45.7724782,4.7713198],{icon:borneIcon}).addTo(myMap);
L.marker([45.7826615,4.7665165],{icon:borneIcon}).addTo(myMap);
L.marker([45.7755219,4.766633],{icon:borneIcon}).addTo(myMap);
L.marker([45.7758915,4.777726]).addTo(myMap)
    .bindPopup('Ecole primaire Sainte Blandine')
    .openPopup();
L.marker([45.7771203,4.7684945]).addTo(myMap)
    .bindPopup('Ecole Elémentaire Du Centre')
    .openPopup();
L.marker([45.7712459,4.7705788]).addTo(myMap)
    .bindPopup('École élémentaire publique Vallon de Grandvaux')
    .openPopup();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
fetch('data/contours.JSON')
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(data) {
        L.geoJSON(data).addTo(myMap);
    });

L.marker([lat, long]).addTo(myMap)
    .bindPopup('Groupe Scolaire Charriere Blanche')
    .openPopup();
