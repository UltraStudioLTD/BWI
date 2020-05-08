// Script

function search() {
  var city_name = document.getElementById("city_name").value;
  var data_url = $.ajax({
    type: 'GET',
    dataType: "json",
    url: "https:\\openweathermap.org/data/2.5/weather?q=" + city_name + "&appid=439d4b804bc8187953eb36d2a8c26a02",
  });
  var data = data_url.then(function(result) {
    var object = result;
    console.log(result);
    var lon = object.coord.lon;
    var lat = object.coord.lat;
    var weather_main = object.weather[0].main;
    var weather_des = object.weather[0].description;
    var temp = object.main.temp;
    var feels = object.main.feels_like;
    var min = object.main.temp_min;
    var max = object.main.temp_max;
    var pressure = object.main.pressure;
    var humidity = object.main.humidity;
    document.getElementById('city').innerHTML = "City: " + city_name;
    document.getElementById('longitude').innerHTML = "Longitude: " + lon;
    document.getElementById('latitude').innerHTML = "Latitude: " + lat;
    document.getElementById('weather').innerHTML = "Weather: " + weather_main + ' [ ' + weather_des + ' ]';
    document.getElementById('temp').innerHTML = "Temperature: " + temp + "℃";
    document.getElementById('feel_temp').innerHTML = "Feels Like: " + feels + "℃";
    document.getElementById('temp_min').innerHTML = "Minimal Temperature: " + min + "℃";
    document.getElementById('temp_max').innerHTML = "Maximal Temperature: " + max + "℃";
    document.getElementById('pressure').innerHTML = "Pressure: " + pressure;
    document.getElementById('humidity').innerHTML = "Humidity: " + humidity;
  });
  
}
