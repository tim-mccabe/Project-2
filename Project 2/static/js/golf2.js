// Creating map object
var myMap = L.map("map", {
  center: [35.0522, -98.2437],
  zoom: 4
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 15,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Load in geojson data
var url = "/static/data/golf.json";

// Grab data with d3
d3.json(url).then(function(data){
  console.log(data);
  var newdata = data.features;

  newdata.forEach(function(newmarker) {
    coords = newmarker.geometry.coordinates
    reverse_coords = coords.reverse()
    console.log (reverse_coords)

  // Add a new marker to the cluster group and bind a pop-up
    L.marker(reverse_coords)
      .addTo(myMap)

  });
});
