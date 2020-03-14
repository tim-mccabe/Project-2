// Create a map object
var myMap = L.map("map", {
  center: [35.0522, -98.2437],
  zoom: 5
});


// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
maxZoom: 18,
id: "mapbox.streets",
accessToken: API_KEY
}).addTo(myMap);


// An array containing each site's name,  city_state
var cities = [{
    
  location: [ 39.792235, -74.972227], 
  rank: "1",
  name: "PINE VALLEY G.C.",
  yards: "7181",
  par: "70",
  points: "72.0078",
  city_state: "Pine Valley N.J.",
  architect: "George Crump & H.S. Colt",
  year_built: "(1918)",
  restoration_architect: "Tom Fazio",
  year_restored: "(2017)"
    },
{
  location: [ 33.502354, -82.022577], 
  rank: "2",
  name: "AUGUSTA NATIONAL G.C.",
  yards: "7435",
  par: "72",
  points: "71.5810",
  city_state: "Augusta Ga.",
  architect: "Alister MacKenzie & Bobby Jones",
  year_built: "(1933)",
  restoration_architect: "Tom Fazio",
  year_restored: "(2018)"
    },
{
  location: [
    36.580509,
    -121.974148
  ], 
  rank: "3",
  name: "CYPRESS POINT CLUB",
  yards: "6524",
  par: "72",
  points: "69.6830",
  city_state: "",
  architect: "Alister MacKenzie & Robert Hunter",
  year_built: "(1929)",
  restoration_architect: "Jeff Markow",
  year_restored: "(2004)"
    },
{
  location: [
    40.894252,
    -72.439777
  ], 
  rank: "4",
  name: "SHINNECOCK HILLS G.C.",
  yards: "7445",
  par: "70",
  points: "69.2526",
  city_state: "",
  architect: "William Flynn",
  year_built: "(1931)",
  restoration_architect: "Bill Coore & Ben Crenshaw",
  year_restored: "(2012)"
    },
{
  location: [
    40.526148,
    -79.82686899999999
  ], 
  rank: "5",
  name: "OAKMONT C.C.",
  yards: "7255",
  par: "71",
  points: "68.9218",
  city_state: "Oakmont Pa.",
  architect: "Henry Fownes",
  year_built: "(1903)",
  restoration_architect: "Tom Fazio",
  year_restored: "(2014)"
    },
{
  location: [
    40.002115,
    -75.311825
  ], 
  rank: "6",
  name: "MERION G.C. (East)",
  yards: "6996",
  par: "70",
  points: "67.8860",
  city_state: "",
  architect: "Hugh Wilson",
  year_built: "(1912)",
  restoration_architect: "Gil Hanse",
  year_restored: "(2018)"
    },
{
  location: [
    36.569888,
    -121.949766
  ], 
  rank: "7",
  name: "PEBBLE BEACH G. LINKS",
  yards: "6828",
  par: "72",
  points: "67.5261",
  city_state: "",
  architect: "Jack Neville & Douglas Grant",
  year_built: "(1919)",
  restoration_architect: "Arnold Palmer & Thad Layton",
  year_restored: "(2016)"
    },
{
  location: [
    40.915639,
    -72.449685
  ], 
  rank: "8",
  name: "NATIONAL G. LINKS OF AMERICA",
  yards: "6935",
  par: "72",
  points: "67.3855",
  city_state: "Southampton N.Y.",
  architect: "C.B. Macdonald",
  year_built: "(1911)",
  restoration_architect: "Karl Olson",
  year_restored: "(1994)"
    },
{
  location: [
    41.855487,
    -101.092794
  ], 
  rank: "9",
  name: "SAND HILLS G.C.",
  yards: "7089",
  par: "71",
  points: "66.3549",
  city_state: "",
  architect: "Bill Coore & Ben Crenshaw",
  year_built: "(1995)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    41.280167999999996,
    -71.948782
  ], 
  rank: "10",
  name: "FISHERS ISLAND CLUB",
  yards: "6615",
  par: "70",
  points: "66.1937",
  city_state: "Fishers Island N.Y.",
  architect: "Seth Raynor & Charles Banks",
  year_built: "(1926)",
  restoration_architect: "Gil Hanse",
  year_restored: "(2000)"
    },
{
  location: [
    40.957914,
    -73.753538
  ], 
  rank: "11",
  name: "WINGED FOOT G.C. (West)",
  yards: "7426",
  par: "72",
  points: "66.1885",
  city_state: "Mamaroneck N.Y.",
  architect: "A.W. Tillinghast",
  year_built: "(1923)",
  restoration_architect: "Gil Hanse",
  year_restored: "(2017)"
    },
{
  location: [
    26.860346000000003,
    -80.04735
  ], 
  rank: "12",
  name: "SEMINOLE G.C.",
  yards: "6836",
  par: "72",
  points: "65.9329",
  city_state: "Juno Beach Fla.",
  architect: "Donald Ross",
  year_built: "(1929)",
  restoration_architect: "Bill Coore & Ben Crenshaw",
  year_restored: "(2017)"
    },
{
  location: [
    44.702604,
    -86.23465300000001
  ], 
  rank: "13",
  name: "CRYSTAL DOWNS C.C.",
  yards: "6560",
  par: "70",
  points: "65.6377",
  city_state: "Frankfort Mich.",
  architect: "Alister MacKenzie & Perry Maxwell",
  year_built: "(1931)",
  restoration_architect: "Tom Doak",
  year_restored: "(2018)"
    },
{
  location: [
    41.849607,
    -88.115714
  ], 
  rank: "14",
  name: "CHICAGO G.C.",
  yards: "6877",
  par: "70",
  points: "65.5659",
  city_state: "Wheaton Ill.",
  architect: "C.B. Macdonald",
  year_built: "(1894)",
  restoration_architect: "Seth Raynor(1922)/Tom Doak",
  year_restored: "(2002)"
    },
{
  location: [
    40.965569,
    -72.725673
  ], 
  rank: "15",
  name: "FRIAR'S HEAD G.C.",
  yards: "7071",
  par: "71",
  points: "65.2092",
  city_state: "Baiting Hollow N.Y.",
  architect: "Bill Coore & Ben Crenshaw",
  year_built: "(2002)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    40.140718,
    -83.14094399999999
  ], 
  rank: "16",
  name: "MUIRFIELD VILLAGE G.C.",
  yards: "7392",
  par: "72",
  points: "65.2030",
  city_state: "Dublin Ohio",
  architect: "Jack Nicklaus & Desmond Muirhead",
  year_built: "(1974)",
  restoration_architect: "Jack Nicklaus",
  year_restored: "(2015)"
    },
{
  location: [
    43.193806,
    124.389921
  ], 
  rank: "17",
  name: "PACIFIC DUNES",
  yards: "6633",
  par: "7164.9775",
  points: "",
  city_state: "Bandon Ore.",
  architect: "Tom Doak",
  year_built: "(2001)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    42.315031,
    -71.147826
  ], 
  rank: "18",
  name: "THE COUNTRY CLUB (Clyde/Squirrel)",
  yards: "6753",
  par: "70",
  points: "64.9361",
  city_state: "Chestnut Hill Mass.",
  architect: "Willie Campbell",
  year_built: "(1895)",
  restoration_architect: "Alex Campbell(1902)/Gil Hanse",
  year_restored: "(2012)"
    },
{
  location: [
    34.071313,
    -118.423381
  ], 
  rank: "19",
  name: "LOS ANGELES C.C. (North)",
  yards: "7530",
  par: "71",
  points: "64.7659",
  city_state: "Los Angeles",
  architect: "George C. Thomas Jr. & Gil Hanse",
  year_built: "(1921)",
  restoration_architect: "Geoff Shackelford & Jim Wagner",
  year_restored: "(2010)"
    },
{
  location: [
    42.545085,
    -83.277016
  ], 
  rank: "20",
  name: "OAKLAND HILLS C.C. (South)",
  yards: "7445",
  par: "72",
  points: "/ 64.7535Bloomfield Hills",
  city_state: "Mich.",
  architect: "Donald Ross",
  year_built: "(1917)",
  restoration_architect: "Rees Jones",
  year_restored: "(2006)"
    },
{
  location: [
    43.851259000000006,
    -87.73513100000001
  ], 
  rank: "21",
  name: "WHISTLING STRAITS (Straits)",
  yards: "7790",
  par: "72",
  points: "64.6465",
  city_state: "Haven Wis.",
  architect: "Pete Dye",
  year_built: "(1998)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    43.113044,
    -77.532834
  ], 
  rank: "22",
  name: "OAK HILL C.C. (East)",
  yards: "7152",
  par: "70",
  points: "64.6417",
  city_state: "Rochester N.Y.",
  architect: "Donald Ross",
  year_built: "(1925)",
  restoration_architect: "Tom Fazio",
  year_restored: "(2010)"
    },
{
  location: [
    34.050069,
    -118.501323
  ], 
  rank: "23",
  name: "RIVIERA C.C.",
  yards: "7040",
  par: "71",
  points: "64.5878",
  city_state: "Pacific Palisades Calif.",
  architect: "George C. Thomas Jr. & W.P. Bell",
  year_built: "(1926)",
  restoration_architect: "Tom Fazio",
  year_restored: "(2012)"
    },
{
  location: [
    32.640882,
    -80.02986899999999
  ], 
  rank: "24",
  name: "THE OCEAN COURSE",
  yards: "7356",
  par: "72",
  points: "64.5348",
  city_state: "Kiawah Island S.C.",
  architect: "Pete Dye & Alice Dye",
  year_built: "(1991)",
  restoration_architect: "Pete Dye",
  year_restored: "(2011)"
    },
{
  location: [
    35.090405,
    -83.07496
  ], 
  rank: "25",
  name: "WADE HAMPTON G.C.",
  yards: "7395",
  par: "72",
  points: "64.4646",
  city_state: "Cashiers N.C.",
  architect: "Tom Fazio",
  year_built: "(1987)",
  restoration_architect: "Tom Fazio",
  year_restored: "(2018)"
    },
{
  location: [
    36.258654,
    -115.107324
  ], 
  rank: "26",
  name: "SHADOW CREEK",
  yards: "7560",
  par: "72",
  points: "64.2344",
  city_state: "North Las Vegas Nev.",
  architect: "Tom Fazio & Steve Wynn",
  year_built: "(1990)",
  restoration_architect: "Tom Fazio",
  year_restored: "(2008)"
    },
{
  location: [
    38.091643,
    -97.847999
  ], 
  rank: "27",
  name: "PRAIRIE DUNES C.C.",
  yards: "6947",
  par: "70",
  points: "64.0759",
  city_state: "Hutchinson Kan.",
  architect: "Perry Maxwell",
  year_built: "(1937)",
  restoration_architect: "Press Maxwell(1957) & Dave Axland",
  year_restored: "(2014)"
    },
{
  location: [
    35.087497,
    -85.04414399999999
  ], 
  rank: "28",
  name: "THE HONORS COURSE",
  yards: "7450",
  par: "72",
  points: "63.9746",
  city_state: "Ooltewah Tenn.",
  architect: "Pete Dye",
  year_built: "(1983)",
  restoration_architect: "Pete Dye",
  year_restored: "(2008)"
    },
{
  location: [
    35.196264,
    -79.473608
  ], 
  rank: "29",
  name: "PINEHURST RESORT (No. 2)",
  yards: "7588",
  par: "72",
  points: "63.8172",
  city_state: "Pinehurst N.C.",
  architect: "Donald Ross",
  year_built: "(1935)",
  restoration_architect: "Bill Coore & Ben Crenshaw",
  year_restored: "(2010)"
    },
{
  location: [
    33.877129,
    -84.32696700000001
  ], 
  rank: "30",
  name: "PEACHTREE G.C.",
  yards: "7414",
  par: "72",
  points: "63.7396",
  city_state: "Atlanta",
  architect: "Robert Trent Jones & Bobby Jones",
  year_built: "(1947)",
  restoration_architect: "Bob Cupp",
  year_restored: "(2005)"
    },
{
  location: [
    34.857623,
    -92.577013
  ], 
  rank: "31",
  name: "THE ALOTIAN CLUB",
  yards: "7500",
  par: "72",
  points: "63.7310",
  city_state: "Roland Ark.",
  architect: "Tom Fazio",
  year_built: "(2004)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    47.617354,
    -116.76623300000001
  ], 
  rank: "32",
  name: "GOZZER RANCH G. & LAKE C.",
  yards: "7317",
  par: "72",
  points: "63.7068",
  city_state: "Harrison Idaho",
  architect: "Tom Fazio",
  year_built: "(2007)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    37.709886,
    -122.494657
  ], 
  rank: "33",
  name: "THE OLYMPIC CLUB (Lake)",
  yards: "6934",
  par: "71",
  points: "63.6777",
  city_state: "San Francisco",
  architect: "Sam Whiting",
  year_built: "(1924)",
  restoration_architect: "Bill Love",
  year_restored: "(2016)"
    },
{
  location: [
    36.070384999999995,
    -95.94548
  ], 
  rank: "34",
  name: "SOUTHERN HILLS C.C.",
  yards: "7184",
  par: "71",
  points: "63.4031",
  city_state: "Tulsa Okla.",
  architect: "Perry Maxwell",
  year_built: "(1936)",
  restoration_architect: "Gil Hanse",
  year_restored: "(2018)"
    },
{
  location: [
    37.71174,
    -122.47647099999999
  ], 
  rank: "35",
  name: "SAN FRANCISCO G.C.",
  yards: "6836",
  par: "71",
  points: "63.3742",
  city_state: "San Francisco",
  architect: "A.W. Tillinghast",
  year_built: "(1924)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    43.186003,
    -124.39086999999999
  ], 
  rank: "36",
  name: "BANDON DUNES",
  yards: "6732",
  par: "72",
  points: "63.3655",
  city_state: "Bandon Ore.",
  architect: "David McLay Kidd",
  year_built: "(1999)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    40.745954,
    -73.452899
  ], 
  rank: "37",
  name: "BETHPAGE STATE PARK (Black)",
  yards: "7465",
  par: "71",
  points: "63.2976",
  city_state: "Farmingdale N.Y.",
  architect: "Joseph H. Burbeck & A.W. Tillinghast",
  year_built: "(1936)",
  restoration_architect: "Rees Jones",
  year_restored: "(2015)"
    },
{
  location: [
    40.066741,
    -82.785987
  ], 
  rank: "38",
  name: "THE GOLF CLUB",
  yards: "7439",
  par: "72",
  points: "63.1712",
  city_state: "New Albany Ohio",
  architect: "Pete Dye",
  year_built: "(1967)",
  restoration_architect: "Pete Dye",
  year_restored: "(2013)"
    },
{
  location: [
    40.911007,
    -72.455751
  ], 
  rank: "39",
  name: "SEBONACK G.C.",
  yards: "7512",
  par: "72",
  points: "63.1402",
  city_state: "Southampton N.Y.",
  architect: "Jack Nicklaus & Tom Doak",
  year_built: "(2006)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    39.537713000000004,
    -79.867076
  ], 
  rank: "40",
  name: "PIKEWOOD NATIONAL G.C.",
  yards: "7649",
  par: "72",
  points: "63.0881",
  city_state: "Morgantown W. Va.",
  architect: "J. Robert Gwynne & John Raese",
  year_built: "(2009)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    40.705217,
    -74.327997
  ], 
  rank: "41",
  name: "BALTUSROL G.C. (Lower)",
  yards: "7400",
  par: "72",
  points: "63.0290",
  city_state: "Springfield N.J.",
  architect: "A.W. Tillinghast",
  year_built: "(1922)",
  restoration_architect: "Rees Jones",
  year_restored: "(2014)"
    },
{
  location: [
    43.246134999999995,
    -88.398494
  ], 
  rank: "42",
  name: "ERIN HILLS G. CSE.",
  yards: "7800",
  par: "72",
  points: "62.7609",
  city_state: "Erin Wis.",
  architect: "Michael Hurdzan & Dana Fry & Ron Whitten",
  year_built: "(2006)",
  restoration_architect: "Dana Fry",
  year_restored: "(2013)"
    },
{
  location: [
    38.00098,
    -87.346458
  ], 
  rank: "43",
  name: "VICTORIA NATIONAL G.C.",
  yards: "7242",
  par: "72",
  points: "62.7167",
  city_state: "Newburgh Ind.",
  architect: "Tom Fazio",
  year_built: "(1998)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    39.181217,
    -84.333969
  ], 
  rank: "44",
  name: "CAMARGO CLUB",
  yards: "6659",
  par: "7",
  points: "062.7111",
  city_state: "Indian Hill Ohio",
  architect: "Seth Raynor & Charles Banks",
  year_built: "(1927)",
  restoration_architect: "Tom Doak",
  year_restored: "(2000)"
    },
{
  location: [
    36.582518,
    -121.95831899999999
  ], 
  rank: "45",
  name: "SPYGLASS HILL G. CSE.",
  yards: "6960",
  par: "72",
  points: "62.6761",
  city_state: "Pebble Beach",
  architect: "Robert Trent Jones",
  year_built: "(1966)",
  restoration_architect: "Tom Fazio",
  year_restored: "(1996)"
    },
{
  location: [
    40.419593,
    -102.26279699999999
  ], 
  rank: "46",
  name: "BALLYNEAL G.C.",
  yards: "7147",
  par: "71",
  points: "62.6718",
  city_state: "Holyoke Colo.",
  architect: "Tom Doak",
  year_built: "(2006)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    41.840779,
    -87.933245
  ], 
  rank: "47",
  name: "BUTLER NATIONAL G.C.",
  yards: "7523",
  par: "71",
  points: "62.5935",
  city_state: "Oak Brook Ill.",
  architect: "George Fazio & Tom Fazio",
  year_built: "(1974)",
  restoration_architect: "Tom Fazio",
  year_restored: "(2012)"
    },
{
  location: [
    39.442721999999996,
    -104.898651
  ], 
  rank: "48",
  name: "CASTLE PINES G.C.",
  yards: "7701",
  par: "72",
  points: "62.5820",
  city_state: "Castle Rock Colo.",
  architect: "Jack Nicklaus",
  year_built: "(1981)",
  restoration_architect: "Jack Nicklaus & Jim Lipe",
  year_restored: "(2015)"
    },
{
  location: [
    30.199933,
    -81.393834
  ], 
  rank: "49",
  name: "TPC SAWGRASS (Players Stadium)",
  yards: "7245",
  par: "72",
  points: "62.4413",
  city_state: "Ponte Verde Beach Fla.",
  architect: "Pete Dye & Alice Dye",
  year_built: "(1980)",
  restoration_architect: "Steve Wenzloff",
  year_restored: "(2016)"
    },
{
  location: [
    43.185824,
    -124.39090800000001
  ], 
  rank: "50",
  name: "OLD MACDONALD",
  yards: "6944",
  par: "71",
  points: "62.4135",
  city_state: "Bandon Ore.",
  architect: "Tom Doak & Jim Urbina",
  year_built: "(2010)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    40.7257,
    -73.6432
  ], 
  rank: "51",
  name: "GARDEN CITY G.C.",
  yards: "6922",
  par: "73",
  points: "62.412",
  city_state: "5 Garden City N.Y.",
  architect: "Devereux Emmet",
  year_built: "(1899)",
  restoration_architect: "Walter Travis (1913) & Tom Doak",
  year_restored: "(2015)"
    },
{
  location: [
    40.9595,
    -73.7545
  ], 
  rank: "52",
  name: "WINGED FOOT G.C. (East)",
  yards: "6808",
  par: "72",
  points: "62.3774",
  city_state: "Mamaroneck N.Y.",
  architect: "A.W. Tillinghast",
  year_built: "(1923)",
  restoration_architect: "Gil Hanse",
  year_restored: "(2012)"
    },
{
  location: [
    41.9665,
    -88.04804399999999
  ], 
  rank: "53",
  name: "MEDINAH C.C. (No. 3)",
  yards: "7657",
  par: "72",
  points: "62.3690",
  city_state: "Medinah Ill.",
  architect: "Tom Bendelow",
  year_built: "(1928)",
  restoration_architect: "Rees Jones",
  year_restored: "(2009)"
    },
{
  location: [
    30.945786,
    -95.25021
  ], 
  rank: "54",
  name: "WHISPERING PINES G.C.",
  yards: "7473",
  par: "72",
  points: "62.2766",
  city_state: "Trinity Texas",
  architect: "Chet Williams",
  year_built: "(2000)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    42.298417,
    -87.840612
  ], 
  rank: "55",
  name: "SHOREACRES",
  yards: "6729",
  par: "70",
  points: "62.2752",
  city_state: "Lake Bluff Ill.",
  architect: "Seth Raynor",
  year_built: "(1921)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    36.603455,
    -121.948617
  ], 
  rank: "56",
  name: "MONTEREY PENINSULA C.C. (Shore)",
  yards: "6873",
  par: "72",
  points: "62.2081",
  city_state: "Pebble Beach",
  architect: "Mike Strantz",
  year_built: "(2004)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    40.007474,
    -83.07520699999999
  ], 
  rank: "57",
  name: "SCIOTO C.C.",
  yards: "7140",
  par: "70",
  points: "62.1702",
  city_state: "Columbus Ohio",
  architect: "Donald Ross",
  year_built: "(1916)",
  restoration_architect: "Michael Hurdzan & Jack Nicklaus",
  year_restored: "(2008)"
    },
{
  location: [
    44.915414,
    -93.380033
  ], 
  rank: "58",
  name: "INTERLACHEN C.C.",
  yards: "6981",
  par: "72",
  points: "62.1545",
  city_state: "Edina Minn.",
  architect: "Willie Watson",
  year_built: "(1911)",
  restoration_architect: "Brian Silva",
  year_restored: "(2006)"
},
{
  location: [ 41.904, -70.606], 
  rank: "59",
  name: "OLD SANDWICH G.C.",
  yards: "6908",
  par: "71",
  points: "62.1544",
  city_state: "Plymouth Mass.",
  architect: "Bill Coore & Ben Crenshaw (2005)",
  year_built: "41.904963",
  restoration_architect: "-70.606797"
    },
{
  location: [ 35.719808, -97.505376], 
  rank: "60",
  name: "OAK TREE NATIONAL",
  yards: "7410",
  par: "71",
  points: "62.1249",
  city_state: "Edmond Okla.",
  architect: "Pete Dye & Alice Dye",
  year_built: "(1976)",
  restoration_architect: "Tripp Davis",
  year_restored: "(2012)"
    },
{
  location: [40.705222, -74.327968], 
  rank: "61",
  name: "BALTUSROL G.C. (Upper)",
  yards: "7348",
  par: "72",
  points: "62.0814",
  city_state: "Springfield N.J.",
  architect: "A.W. Tillinghast",
  year_built: "(1922)",
  restoration_architect: "Rees Jones",
  year_restored: "(2014)"
    },
{
  location: [39.469871000000005, -87.683776], 
  rank: "62",
  name: "CANYATA G.C.",
  yards: "7266",
  par: "72",
  points: "62.0771",
  city_state: "Marshall Ill.",
  architect: "Bob Lohmann & Mike Benkusky",
  year_built: "(2004)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    40.723527000000004,
    -74.588352
  ], 
  rank: "63",
  name: "SOMERSET HILLS C.C.",
  yards: "6784",
  par: "71",
  points: "62.0366",
  city_state: "Bernardsville N.J.",
  architect: "A.W. Tillinghast",
  year_built: "(1918)",
  restoration_architect: "Tom Doak",
  year_restored: "(2018)"
    },
{
  location: [
    39.710179,
    -80.302832
  ], 
  rank: "64",
  name: "PETE DYE G.C.",
  yards: "7308",
  par: "72",
  points: "62.0220",
  city_state: "Bridgeport W.Va.",
  architect: "Pete Dye",
  year_built: "(1994)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    32.733711,
    -96.903139
  ], 
  rank: "65",
  name: "DALLAS NATIONAL G.C.",
  yards: "7372",
  par: "72",
  points: "61.9804",
  city_state: "Dallas",
  architect: "Tom Fazio",
  year_built: "(2002)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    37.636181,
    -77.687369
  ], 
  rank: "66",
  name: "KINLOCH G.C.",
  yards: "7203",
  par: "72",
  points: "61.9740",
  city_state: "Manakin-Sabot Va",
  architect: "Lester George & Vinny Giles",
  year_built: "(2001)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    40.951797,
    -72.174592
  ], 
  rank: "67",
  name: "MAIDSTONE CLUB",
  yards: "6665",
  par: "72",
  points: "61.9365",
  city_state: "East Hampton N.Y.",
  architect: "Willie Park Jr. & Jack Park",
  year_built: "(1924)",
  restoration_architect: "Bill Coore & Ben Crenshaw",
  year_restored: "(2013)"
    },
{
  location: [
    44.456862,
    -86.242552
  ], 
  rank: "68",
  name: "ARCADIA BLUFFS G.C.",
  yards: "7300",
  par: "72",
  points: "61.9264",
  city_state: "Arcadia Mich.",
  architect: "Rick Smith & Warren Henderson",
  year_built: "(2000)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    43.185068,
    -124.39108799999998
  ], 
  rank: "69",
  name: "BANDON TRAILS",
  yards: "6788",
  par: "71",
  points: "61.8574",
  city_state: "Bandon Ore.",
  architect: "Bill Coore & Ben Crenshaw",
  year_built: "(2005)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    33.738170000000004,
    -111.865178
  ], 
  rank: "70",
  name: "THE ESTANCIA CLUB",
  yards: "7314",
  par: "72",
  points: "61.8021",
  city_state: "Scottsdale",
  architect: "Tom Fazio",
  year_built: "(1995)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    40.965934999999995,
    -73.761651
  ], 
  rank: "71",
  name: "QUAKER RIDGE G.C.",
  yards: "7008",
  par: "70",
  points: "61.7439",
  city_state: "Scarsdale N.Y.",
  architect: "A.W. Tillinghast",
  year_built: "(1918)",
  restoration_architect: "Gil Hanse",
  year_restored: "(2011)"
    },
{
  location: [
    39.643128000000004,
    -104.962483
  ], 
  rank: "72",
  name: "CHERRY HILLS C.C.",
  yards: "7348",
  par: "72",
  points: "61.7080",
  city_state: "Cherry Hills Village Colo.",
  architect: "William Flynn",
  year_built: "(1923)",
  restoration_architect: "Tom Doak",
  year_restored: "(2009)"
    },
{
  location: [
    42.584047999999996,
    -70.763529
  ], 
  rank: "73",
  name: "ESSEX COUNTY CLUB",
  yards: "6555",
  par: "70",
  points: "61.6472",
  city_state: "Manchester Mass.",
  architect: "Donald Ross",
  year_built: "(1917)",
  restoration_architect: "Tom Doak",
  year_restored: "(2008)"
    },
{
  location: [
    43.166821,
    -87.941941
  ], 
  rank: "74",
  name: "MILWAUKEE C.C.",
  yards: "7097",
  par: "72",
  points: "61.6431",
  city_state: "River Hills Wis.",
  architect: "H.S. Colt & C.H. Alison",
  year_built: "(1929)",
  restoration_architect: "Tom Doak",
  year_restored: "(2015)"
    },
{
  location: [
    41.52197,
    -87.685463
  ], 
  rank: "75",
  name: "OLYMPIA FIELDS C.C. (North)",
  yards: "7190",
  par: "70",
  points: "61.6376",
  city_state: "Olympia Fields Ill.",
  architect: "Willie Park Jr.",
  year_built: "(1922)",
  restoration_architect: "Mark Mungeam",
  year_restored: "(2014)"
    },
{
  location: [
    42.609401,
    -70.858082
  ], 
  rank: "76",
  name: "MYOPIA HUNT CLUB",
  yards: "6539",
  par: "72",
  points: "61.5754",
  city_state: "South Hamilton Mass.",
  architect: "H.C. Leeds",
  year_built: "(1898)",
  restoration_architect: "Gil Hanse",
  year_restored: "(2013)"
    },
{
  location: [
    33.624565000000004,
    -116.274267
  ], 
  rank: "77",
  name: "THE QUARRY AT LA QUINTA",
  yards: "7083",
  par: "72",
  points: "61.5487",
  city_state: "La Quinta Calif.",
  architect: "Tom Fazio",
  year_built: "(1994)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    41.677727000000004,
    -70.717343
  ], 
  rank: "78",
  name: "KITTANSETT CLUB",
  yards: "6811",
  par: "71",
  points: "61.5483",
  city_state: "Marion Mass.",
  architect: "William Flynn & Frederic Hood",
  year_built: "(1922)",
  restoration_architect: "Gil Hanse",
  year_restored: "(2012)"
    },
{
  location: [
    36.601777,
    -121.94833500000001
  ], 
  rank: "79",
  name: "MONTEREY PENINSULA C.C. (Dunes)",
  yards: "7090",
  par: "72",
  points: "61.5296",
  city_state: "Seth Raynor",
  architect: "(1924)",
  year_built: "Tom Fazio",
  restoration_architect: "Tim Jackson & David Kahn",
  year_restored: "(2015)"
    },
{
  location: [
    38.996438,
    -77.176478
  ], 
  rank: "80",
  name: "CONGRESSIONAL C.C. (Blue)",
  yards: "7570",
  par: "72",
  points: "61.5115",
  city_state: "Bethesda Md.",
  architect: "Robert Trent Jones",
  year_built: "(1962)",
  restoration_architect: "Rees Jones",
  year_restored: "(2010)"
    },
{
  location: [
    41.220223,
    -73.900734
  ], 
  rank: "81",
  name: "HUDSON NATIONAL G.C.",
  yards: "7151",
  par: "70",
  points: "61.4845",
  city_state: "Croton-on-Hudson N.Y.",
  architect: "Tom Fazio",
  year_built: "(1996)",
  restoration_architect: "Tom Fazio",
  year_restored: "(2015)"
    },
{
  location: [
    40.594661,
    -74.389916
  ], 
  rank: "82",
  name: "PLAINFIELD C.C.",
  yards: "7091",
  par: "72",
  points: "61.4727",
  city_state: "Edison N.J.",
  architect: "Donald Ross",
  year_built: "(1921)",
  restoration_architect: "Gil Hanse",
  year_restored: "(2010)"
    },
{
  location: [
    26.258963,
    -81.671666
  ], 
  rank: "83",
  name: "CALUSA PINES G.C.",
  yards: "7203",
  par: "72",
  points: "61.4559",
  city_state: "Naples Fla.",
  architect: "Michael Hurdzan & Dana Fry",
  year_built: "(2001)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    38.242849,
    -85.472042
  ], 
  rank: "84",
  name: "VALHALLA G.C.",
  yards: "7540",
  par: "72",
  points: "61.3786",
  city_state: "Louisville",
  architect: "Jack Nicklaus",
  year_built: "(1987)",
  restoration_architect: "Jack Nicklaus",
  year_restored: "(2012)"
    },
{
  location: [
    40.011815999999996,
    -75.409086
  ], 
  rank: "85",
  name: "ARONIMINK G.C.",
  yards: "7267",
  par: "70",
  points: "61.3607",
  city_state: "Newtown Square Pa.",
  architect: "Donald Ross",
  year_built: "(1928)",
  restoration_architect: "Gil Hanse",
  year_restored: "(2017)"
    },
{
  location: [
    34.43327,
    -119.61531799999999
  ], 
  rank: "86",
  name: "THE VALLEY CLUB OF MONTECITO",
  yards: "6610",
  par: "72",
  points: "61.3551",
  city_state: "Montecito Calif.",
  architect: "Alister MacKenzie & Robert Hunter",
  year_built: "(1929)",
  restoration_architect: "Tom Doak",
  year_restored: "(2018)"
    },
{
  location: [
    42.193373,
    -70.89778000000001
  ], 
  rank: "87",
  name: "BOSTON G.C.",
  yards: "7062",
  par: "71",
  points: "61.3515",
  city_state: "Hingham Mass.",
  architect: "Gil Hanse",
  year_built: "(2004)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    41.742691,
    -83.643563
  ], 
  rank: "88",
  name: "INVERNESS CLUB",
  yards: "7323",
  par: "71",
  points: "61.332",
  city_state: "0Toledo Ohio",
  architect: "Donald Ross",
  year_built: "(1919)",
  restoration_architect: "Andrew Green",
  year_restored: "(2018)"
    },
{
  location: [
    41.124194,
    -73.861501
  ], 
  rank: "89",
  name: "SLEEPY HOLLOW C.C",
  yards: "6902",
  par: "70",
  points: "61.3308",
  city_state: "C.B. Macdonald",
  architect: "A.W. Tillinghast",
  year_built: "(1915)",
  restoration_architect: "Gil Hanse",
  year_restored: "(2017)"
    },
{
  location: [
    36.15275,
    -81.835581
  ], 
  rank: "90",
  name: "DIAMOND CREEK G.C.",
  yards: "7175",
  par: "70",
  points: "61.207",
  city_state: "5Banner Elk N.C.",
  architect: "Tom Fazio",
  year_built: "(2003)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    47.511562,
    -116.87041
  ], 
  rank: "91",
  name: "THE G.C. AT BLACK ROCK",
  yards: "7130",
  par: "72",
  points: "61.2020",
  city_state: "Coeur d’Alene Idaho",
  architect: "Jim Engh",
  year_built: "(2003)",
  restoration_architect: "",
  year_restored: ""
    },
{
  location: [
    40.24345,
    -82.949656
  ], 
  rank: "92",
  name: "DOUBLE EAGLE CLUB",
  yards: "7175",
  par: "72",
  points: "61.1950",
  city_state: "Galena Ohio",
  architect: "Jay Morrish & Tom Weiskopf",
  year_built: "(1992)",
  restoration_architect: "",
  year_restored: ""
    },
  {
  location: [44.9972, -93.540912], 
  rank: "93",
  name: "SPRING HILL G.C.",
  yards: "7035",
  par: "72",
  points: "61.1569",
  city_state: "Wayzata Minn.",
  architect: "Tom Fazio",
  year_built: "(1999)",
  restoration_architect: "NA",
  year_restored: "NA"
    },
  {
  location: [ 41.753862, -88.486464], 
  rank: "94",
  name: "RICH HARVEST LINKS",
  yards: "7704",
  par: "72",
  points: "61.1128",
  city_state: "Sugar Grove Ill.",
  architect: "Jerry Rich & Greg Martin",
  year_built: "(1999)",
  restoration_architect: "Jerry Rich",
  year_restored: "2012"
    },
{
  location: [ 32.926513, -79.977907], 
  rank: "95",
  name: "YEAMANS HALL CLUB",
  yards: "6808",
  par: "70",
  points: "61.0890",
  city_state: "Charleston S.C.",
  architect: "Seth Raynor & Charles Banks",
  year_built: "(1926)",
  restoration_architect: "Jim Urbina ",
  year_restored: "(2016)"
    },
{
  location: [
    36.534669,
    -121.86853899999998
  ], 
  rank: "96",
  name: "THE PRESERVE G.C.",
  yards: "7138",
  par: "72",
  points: "61.0619",
  city_state: "Carmel Calif.",
  architect: "Tom Fazio & J. Michael Poellot & Sandy Tatum",
  year_built: "(2000)",
  restoration_architect: "Tom Fazio",
  year_restored: "(2015)"
    },
{
  location: [
    43.727082,
    -87.77591600000001
  ], 
  rank: "97",
  name: "BLACKWOLF RUN (River)",
  yards: "7404",
  par: "72",
  points: "61.0451",
  city_state: "Kohler Wis.",
  architect: "Pete Dye",
  year_built: "(1990)",
  restoration_architect: "Pete Dye",
  year_restored: "(2010)"
    },
{
  location: [
    36.124646999999996,
    -80.271688
  ], 
  rank: "98",
  name: "OLD TOWN CLUB",
  yards: "7038",
  par: "70",
  points: "61.0033",
  city_state: "Winston-Salem N.C.",
  architect: "Perry Maxwell",
  year_built: "(1939)",
  restoration_architect: "Bill Coore & Ben Crenshaw",
  year_restored: "(2013)"
    },
{
  location: [ 39.946528, -86.19302900000001],
  rank: "99",
  name: "CROOKED STICK G.C.",
  yards: "7516",
  par: "7",
  points: "260.9908",
  city_state: "Carmel Ind.",
  architect: "Pete Dye",
  year_built: "(1967)",
  restoration_architect: "Pete Dye",
  year_restored: "(2008)"
    },
{
  location: [
    38.528184,
    -122.733709
  ],
  rank: "100",
  name: "MAYACAMA G.C.",
  yards: "6761",
  par: "71",
  points: "60.9746",
  city_state: "Santa Rosa Calif.",
  architect: "Jack Nicklaus",
  year_built: "(2001)",
  restoration_architect: "NA",
  year_restored: "NA"
}
];


// Loop through the cities array and create one marker for each city object
for (var i = 0; i < cities.length; i++) {

  // Conditionals for cities points
  var color = "";
  if (cities[i].rank > 80) {
    color = "purple";
  }
  else if (cities[i].rank > 60) {
    color = "red";
  }
  else if (cities[i].rank > 40) {
    color = "blue";
  }
  else if (cities[i].rank > 20) {
    color = "green";
  }
  else {
    color = "yellow";
  }

  // Add circles to map
  L.circle(cities[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust radius
    radius: (cities[i].rank * (-1)+101)*1000
    }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Rank " + cities[i].rank + "</h3><hr> <h3>Par " + cities[i].par + "</h3><hr> <h3>Location " + cities[i].city_state + "</h3><hr> <h3>Architect " + cities[i].architect + "</h3><hr> <h3>Year Built " + cities[i].year_built + "</h3>")
    .addTo(myMap)
  }