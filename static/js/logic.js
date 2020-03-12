// Store our API endpoint inside queryUrl
// var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

// Perform a GET request using D3
d3.json("golf.json", function(data) {
    console.log(data);
    });
    
    // Once we get a response, send the data.features object to the createFeatures function
    // createFeatures(data.features);
    function createFeatures(data) {
    
      // Define a function we want to run once for each feature in the features array
      // Give each feature a popup describing the name, location, ranking, architect, and year of each course
      function onEachFeature(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.Name +
          "</h3><hr><p>" + new Rank(feature.properties.coordinates) + "</p>");
      }
    
      // Define a markerSize function to set circle size based on ranking
    function radiusSize(Rank) {
      return (101 - Rank);
    }
    
    // Define circleColor function to set circle color based on ranking 
    function circlefillColor(Rank) {
      if (Rank < 20) {
        return "#ccff33"
      }
      else if (Rank < 40) {
        return "#ffff33"
      }
      else if (Rank < 60) {
        return "#ffcc33"
      }
      else if (Rank < 80) {
        return "#ff9933"
      }
      else if (Rank < 100) {
        return "#ff6633"
      }
      else {
        return "#ff3333"
      }
    }
    
    // Create a GeoJSON layer containing the features array on the golfData object
    // Run the onEachFeature function once for each piece of data in the array
    var golfcourses = L.geoJSON(data, {
      pointToLayer: function(data, latlng) {
        return L.circle(latlng, {
          radius: radiusSize(data.properties.Rank),
          fillColor: circlefillColor(data.properties.Rank),
          color: "white",
          fillOpacity: 1,
        });
      },
      onEachFeature: onEachFeature
    });
    
    // Sending our golf layer to the createMap function
    createMap(golfcourses);
    }
    
    function createMap(golfcourses) {
      
      // Define streetmap and darkmap and grayscale layers
      var grayscalemap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.light",
        accessToken: API_KEY
      });
    
      var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken: API_KEY
      });
    
      var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.dark",
        accessToken: API_KEY
      });
    
      // Define a baseMaps object to hold our base layers
      var baseMaps = {
        "Grayscalemap": grayscalemap,
        "Street Map": streetmap,
        "Dark Map": darkmap
      };
    
      // Create overlay object to hold our overlay layer
      var overlayMaps = {
        Golfcourses: golfcourses
      };
    
      // Create our map, giving it the grayscale and earthquakes layers to display on load
      var myMap = L.map("map", {
        center: [37.42, -122.08],
        zoom: 5,
        layers: [grayscalemap, golfcourses]
      });
    
      // Create a layer control
      // Pass in our baseMaps and overlayMaps
      // Add the layer control to the map
      L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
      }).addTo(myMap);
    
    
    // Create legend dimensions and criteria
    function getColor(d) {
      return d > 5 ? "#ff3333" :
             d > 4  ? "#ff6633" :
             d > 3  ? "#ff9933" :
             d > 2  ? "#ffcc33" :
             d > 1  ? "#ffff33" :
                      "#ccff33" ;
    }
    
    // Create legend dimensions and criteria
    var legend = L.control({ position: "bottomright" });
    legend.onAdd = function(map) {
      var div = L.DomUtil.create("div", "info legend");
          Ranks = [0, 20, 40, 60, 80, 100];
          labels = [];
    
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < Ranks.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(Ranks[i] + 1) + '"></i> ' +
            Ranks[i] + (Ranks[i + 1] ? '&ndash;' + Ranks[i + 1] + '<br>' : '+');
    }
    
        return div;
    }; 
    
    // Add legend to map
    legend.addTo(myMap);
    
    };
  
    