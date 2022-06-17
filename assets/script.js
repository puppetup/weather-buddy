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
            showWeather(data)   
        })
    };

function showWeather(resp) {
    console.log(resp)
    let oneDay = document.querySelector('#one-day')
    let fiveDay = document.querySelector('.card-group')
    oneDay.innerHTML =  `<div class="card bg-dark text-white">
                            <img src="http://openweathermap.org/img/wn/${resp.current.weather[0].icon}@2x.png" class="card-img" alt="...">
                            <div class="card-img-overlay">
                            <h5 class="card-title"></h5>
                            <p class="card-text">Temperature: ${resp.current.temp}</p>
                            <p class="card-text">Humidity: ${resp.current.humidity}</p>
                            <p class="card-text">Wind Speed: ${resp.current.wind_speed}</p>
                            <p class="card-text">UV Index: ${resp.current.uvi}</p>
                            <p class="card-text">Date: ${resp.current.dt}</p>
                            </div>
                        </div>`
    fiveDay.innerHTML = resp.daily.map((day, idx) => {
        if (idx < 5) {
           return ` <div class="card">
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Day1</h5>
                    <p class="card-text">temp${day.temp.day}</p>
                    <p class="card-text">humidity${day.humidity}</p>
                    <p class="card-text">windspd${day.wind_speed}</p>
                    <p class="card-text">UV${day.uvi}</p>
                    <p class="card-text">date</p>
                </div>
            </div>`
        }
    }).join('');
}

searchButton.addEventListener('click', getInput)

