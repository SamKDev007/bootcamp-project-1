var APIKey = "0914fabf53b30d427bc7c8e54333c667";
var city = "Perth"; 
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)
    .then(response => response.json())
    .then(data => {
        
        var temperatureKelvin = data.main.temp;
        var temperatureCelsius = Math.round(temperatureKelvin - 273.15);
        var icon = data.weather[0].icon;
        // JavaScript code to set the src attribute dynamically
        var baseURL = "https://openweathermap.org/img/wn/";
        var imageSize = "@2x.png";
        var fullURL = baseURL + icon + imageSize;

        // Set the src attribute of the img tag using JavaScript
        document.getElementById("weather-icon").src = fullURL;
        
        
        var weatherInfoDiv = document.createElement("div");
        weatherInfoDiv.innerHTML = temperatureCelsius + "°C";
        
        var weatherContainer = document.getElementById("weather-info");
        weatherContainer.appendChild(weatherInfoDiv);
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
    });