// script.js

// Create the map centered on Paris with a starting zoom level
const map = L.map('map').setView([48.8566, 2.3522], 3);

// Add a tile layer to the map (background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Coordinates and details of airports
const airports = [
    {
        lat: 45.470556,
        lon: -73.740833,
        name: "Montréal (YUL)",
        details: "Aéroport Pierre-Elliott-Trudeau de Montréal (YUL).<br>Code IATA: YUL <br>Code OACI: CYUL<br>Localisation: Montréal, Canada<br>Type: International<br>Nombre de lignes: 1<br>Nombre d'avions: 10"
    },
    {
        lat: 43.665278,
        lon: 7.215,
        name: "Nice (NCE)",
        details: "Aéroport de Nice Côte d'Azur (NCE).<br>Code IATA: NCE<br>Code OACI: LFMN<br>Localisation: Nice, France<br>Type: International<br>Nombre de lignes: 44<br>Nombre d'avions: 22"
    },
    {
        lat: 48.723333,
        lon: 2.379444,
        name: "Paris Orly (ORY)",
        details: "Aéroport de Paris-Orly (ORY).<br>Code IATA: ORY<br>Code OACI: LFPO<br>Localisation: Paris, France<br>Type: International<br>Nombre de lignes: 35<br>Nombre d'avions: 19"
    }
];

// Add markers to the map with detailed popup windows
airports.forEach(airport => {
    L.marker([airport.lat, airport.lon]).addTo(map)
        .bindPopup(`<b>${airport.name}</b><br>${airport.details}`);
});
