/*
API key: 33765ca5db55155419754b2e9b44f487
Weather URL: https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
Geocode URL: http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key} ;
http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}
*/

location = ''

//Geocode API
fetch('http://api.openweathermap.org/geo/1.0/direct?q=Los+Angeles&limit=5&appid=33765ca5db55155419754b2e9b44f487')
    .then(response => response.json())
    .then(function (data) {
        var lon = data[0].lon
        var lat = data[0].lat
        console.log(lat,lon)
        callWeatherApi(lat,lon)
    });

//Weather API
function callWeather(lat,lon) {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=33765ca5db55155419754b2e9b44f487') 
        .then(response => response.json())
        .then(function (data) {
            console.log(data)
            var temp = data.current.temp
            var hum = data.current.humidity
            var winspd = data.current.wind_speed
            var uvi = data.current.uvi
            var main = data.current.weather.main
            let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=&appid=${key}`
            let key = '33765ca5db55155419754b2e9b44f487'
        })
    };



html = 
                    <div class="card">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">Day1</h5>
                        <p class="card-text">temp</p>
                        <p class="card-text">humidity</p>
                        <p class="card-text">windspd</p>
                        <p class="card-text">UV</p>
                        <p class="card-text">date</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
