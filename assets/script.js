/*
API key: 33765ca5db55155419754b2e9b44f487
Weather URL: https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
Geocode URL: http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key} ;
http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}
*/

const searchButton = document.getElementById('submit')
let key = '33765ca5db55155419754b2e9b44f487'

getInput = function(event) {
    event.preventDefault()
    const userInput = document.getElementById('location').value
    console.log(userInput)
    getLocation(userInput)
}


getLocation = function(userInput) {
    let geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=5&appid=${key}`
    
    //Geocode API
    fetch(geoUrl)
        .then(response => response.json())
        .then(function (data) {
            var lon = data[0].lon
            var lat = data[0].lat
            console.log(lat,lon)
            callWeather(lat,lon)
        });
    }

    //Weather API
function callWeather(lat,lon) {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`
    fetch(url) 
        .then(response => response.json())
        .then(function (data) {
            console.log(data)
            
            
        })
    };

searchButton.addEventListener('click', getInput)

// html = 
//                     <div class="card">
//                       <img src="..." class="card-img-top" alt="...">
//                       <div class="card-body">
//                         <h5 class="card-title">Day1</h5>
//                         <p class="card-text">temp</p>
//                         <p class="card-text">humidity</p>
//                         <p class="card-text">windspd</p>
//                         <p class="card-text">UV</p>
//                         <p class="card-text">date</p>
//                         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                       </div>
//                     </div>

// var temp = data.current.temp
//                 var hum = data.current.humidity
//                 var winspd = data.current.wind_speed
//                 var uvi = data.current.uvi
//                 var main = data.current.weather.main

