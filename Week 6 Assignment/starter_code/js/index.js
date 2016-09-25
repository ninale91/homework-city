// // pseudocode
//var cities = ["NYC", "SF", "LA", "ATX", "SYD"]
//
// When user changes form to city
// Get cityName
// Compare input to city name
// Change city image
//
// IF (cities= Sydney){
//   Change Background Image to Sydney Image
// }
// ELSE IF (EnteredText= NewYork){
//   Change Backround Image to New York Image}
// }

$(document).ready(start);

var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

function start() {
  $("#city-type").change(runPicApp);
  $(cities).each(populateForm);
}

function runPicApp(e){
  e.preventDefault();
  var city= getCityName();
  compareCity(city);
}

function populateForm(index, element){
  var addCity= "<option>" + element + "</option>";
  $("#city-type").append(addCity);
  }

function getCityName() {
  var city = $("#city-type").val();
  return city;
}

 function compareCity(city) {
  newYorkCompare(city);
  sanFranCompare(city);
  LACompare(city);
  austinCompare(city);
  sydneyCompare(city);
  }

  function newYorkCompare(city) {
   if (city == "NYC") {
       $("body").attr("class", "nyc");
   }
  }

  function sanFranCompare(city) {
   if (city == "SF") {
     $("body").attr("class", "sf");
   }
  }

  function LACompare(city) {
   if (city == "LA") {
     $("body").attr("class", "la");
   }
  }

  function austinCompare(city) {
   if (city == "ATX") {
     $("body").attr("class", "austin");
   }
  }

  function sydneyCompare(city) {
   if (city == "SYD") {
     $("body").attr("class", "syd");
   }
  }
