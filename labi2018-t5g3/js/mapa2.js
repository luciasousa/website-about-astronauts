var initialCoordinates = [37.0902, -95.7129];
var initialZoomLevel = 3;
var map = L.map('map').setView(initialCoordinates, initialZoomLevel);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var muxiCoordinates = [37.409112,-122.064412];
var muxiMarkerMessage = "Ames Research Center";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [34.950461,-117.887747];
var muxiMarkerMessage = "Armstrong Flight Research Center";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [41.412204,-81.862753];
var muxiMarkerMessage = "Glenn Research Center";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [38.995800,-76.852455];
var muxiMarkerMessage = "Goddard Space Flight Center";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [40.805748,-73.965300];
var muxiMarkerMessage = "Goddard Institute for Space Studies";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [39.431187,-80.196979];
var muxiMarkerMessage = "Independent Verification and Validation Facility";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [34.201583,-118.171448];
var muxiMarkerMessage = "Jet Propulsion Laboratory";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [29.559606,-95.090009];
var muxiMarkerMessage = "Johnson Space Center";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [28.573164,-80.648992];
var muxiMarkerMessage = "Kennedy Space Center";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [37.086495,-76.380891];
var muxiMarkerMessage = "Langley Research Center";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [34.661739,-86.671849];
var muxiMarkerMessage = "Marshall Space Flight Center";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [30.025767,-89.915385];
var muxiMarkerMessage = "Michoud Assembly Facility";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [37.086495,-76.380923];
var muxiMarkerMessage = "NASA Engineering and Safety Center";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [38.883161,-77.016396];
var muxiMarkerMessage = "NASA Headquarters";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [41.407478,-81.873900];
var muxiMarkerMessage = "NASA Safety Center";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [30.370187,-89.617721];
var muxiMarkerMessage = "NASA Shared Services Center";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [41.350116,-82.650524];
var muxiMarkerMessage = "Plum Brook Station";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [30.383556,-89.605860];
var muxiMarkerMessage = "Stennis Space Center";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [37.936964,-75.469862];
var muxiMarkerMessage = "Wallops Flight Facility";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [32.485400,-106.614017];
var muxiMarkerMessage = "White Sands Test Facility";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [48.848269, 2.304267];
var muxiMarkerMessage = "Headquarters ESA";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [52.219962, 4.419892];
var muxiMarkerMessage = "European Space Research and Technology Centre";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [49.870831, 8.622736];
var muxiMarkerMessage = "European Space Operations Centre";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [41.827380, 12.674051];
var muxiMarkerMessage = "ESA’s centre for Earth observation";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [50.852537, 7.131748];
var muxiMarkerMessage = "European Astronaut Centre";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [40.444235, -3.952696];
var muxiMarkerMessage = "European Space Astronomy Centre";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [4.895088, -52.756951];
var muxiMarkerMessage = "Guiana Space Centre";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [50.002834, 5.145528];
var muxiMarkerMessage = "European space Security and Education Centre";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [51.576161, -1.307626];
var muxiMarkerMessage = "European Centre for Space Applications and Telecommunications";
L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();
