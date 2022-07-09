// Create url for the earthquake data. In this case we are using the weekly data. However, a different
// link can he used. 
var equakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// LayerGroup for the earthquakes that will be visualized
var earthquakes = L.layerGroup();

// Adding a tile layer
// We use mapbox to provide added mapping functionality above what is readily available in openstreetmap alone
// Note that a token is needed passed in as an API_KEY
var lightStyleMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  // Style id for the map we want to have
  id: "mapbox/light-v10",
  // API_KEY is saved in the config file
  accessToken: API_KEY
});

// Create the map with the layers
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [lightStyleMap, earthquakes]
});

// Use D3 to retrieve data from equakeURL
d3.json(equakeURL).then(function (data) {
  // Data markers should reflect the magnitude of the earthquake by their size
  function markerSize(magnitude) {
    // keep in mind the number used to multiply the magnitude is arbitrary based on 
    // preference and perception of how the visual needs to appear. It just needs to be the 
    // the same value for each event to be consistent
    return magnitude * 8;
  };

  // The data markers should reflect the depth of the earthquake by their color
  // Create a function that will select the appropriate color for the marker based on the condition
  function markerColor(depth) {
    // It is easier to go from largest option to smallest for this conditional logic
    switch(true) {
      case depth > 90:
        return "FireBrick";
      case depth > 70:
        return "OrangeRed";
      case depth > 50:
        return "Orange";
      case depth > 30:
        return "Gold";
      case depth > 10:
        return "Yellow";
      default:
        return "LawnGreen";
    }
  }

  // Create the layer details for the earthquakes that will appear on the map
  L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, 
        // Set the style of the markers based on properties.mag
        {
          radius: markerSize(feature.properties.mag),
          fillColor: markerColor(feature.geometry.coordinates[2]),
          fillOpacity: 0.75,
          color: "green",
          stroke: true,
          weight: 0.5
        }
      );
    },
    // Create the popup and the details for each earthquake
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h3>Location: " + feature.properties.place 
      + "</h3><hr><p>Date: " + new Date(feature.properties.time) 
      + "</p><hr><p>Magnitude: " + feature.properties.mag + "</p>"
      + "</p><hr><p>Magnitude: " + feature.geometry.coordinates[2] +"</p>");
    }
    // add to the map
  }).addTo(earthquakes);

  earthquakes.addTo(myMap);

    // Add legend
    // Important note: The css file contains the styling information that will facilitate the legend appearing correctly
    // on the map
  var legend = L.control({position: "bottomright"});
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    depth = [-10, 10, 30, 50, 70, 90];
    
  for (var i =0; i < depth.length; i++) {
    div.innerHTML += '<i style="background:' + markerColor(depth[i] + 1) + '"></i> ' +
        depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
      }
    return div;
  };
  legend.addTo(myMap);
});
