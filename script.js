//Original code
var lat;
var lon;

var testLocation = "London"

var weatherQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=5d388c274c7d1e9166f372df494a3b83"

$.ajax({
    url: weatherQueryURL,
    method: "GET"
  }).then(function(data){
    console.log(data)
    lat = data.coord.lat
    lon = data.coord.lon
    console.log(lat + ", " + lon)

    var UVQueryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=5d388c274c7d1e9166f372df494a3b83"

    $.ajax({
        url: UVQueryURL,
        method: "GET"
    }).then(function(data){
        console.log(data)
    });
  });
//Optimized version of the above. Note the inclusion of functions


function getWeatherData(location){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=5d388c274c7d1e9166f372df494a3b83",
        method: "GET"
      }).then(function(data){
        console.log(data)

        //Use UVIndex function here while you still have access to data,
        //else it is erased for being out of scope
        getUVIndex(data.coord.lat, data.coord.lon)
    })

    
}

function getUVIndex(lat, lon){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=5d388c274c7d1e9166f372df494a3b83",
        method: "GET"
    }).then(function(data){
        console.log(data.value);
    });
}

getWeatherData(testLocation);
renderStoredSearches();
