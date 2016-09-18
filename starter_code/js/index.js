// // pseudocode
// Sydney = "Syd" "Sydney"
// NewYork= "NYC" "New York"
//
// When user insert text form and presses submit:
// Get cityName
// Compare input to city name
// Change city image
// Clear value input
//
// IF (city = Sydney or LA or NYC ect.){
//   Change Background Image to Sydney Image
// }
// ELSE IF (EnteredText= NewYork){
//   Change Backround Image to New York Image}
// }

$(document).ready(start);

function start() {
  $('#submit-btn').click(runPicApp);
}

function runPicApp(e) {
  e.preventDefault();
  getCityName();
  var city = getCityName();
  compareCity(city);
  clearValueInput(city);
}

function getCityName() {
  var cityRaw = $('#city-type').val();
  return cityRaw;
}

function compareCity(city) {
 newYorkCompare(city);
 sanFranCompare(city);
 LACompare(city);
 austinCompare(city);
 sydneyCompare(city);
 nonValidValue(city);
}

function newYorkCompare(city) {
  if (city == 'New York' || city == 'New York City' || city == 'NYC') {
      $('body').css('background-image', 'url(images/nyc.jpg)');
  }
}

function sanFranCompare(city) {
  if (city == 'San Francisco' || city == 'SF' || city == 'Bay Area') {
    $('body').css('background-image', 'url(images/sf.jpg)');
  }
}

function LACompare(city) {
  if (city == 'Los Angeles' || city == 'LA' || city == 'LAX') {
    $('body').css('background-image', 'url(images/la.jpg)');
  }
}

function austinCompare(city) {
  if (city == 'Austin' || city == 'ATX') {
    $('body').css('background-image', 'url(images/austin.jpg)');
  }
}

function sydneyCompare(city) {
  if (city == 'Sydney' || city == 'SYD') {
    $('body').css('background-image', 'url(images/sydney.jpg)');
  }
}

function clearValueInput(city){
  $('#city-type').val('');
}
