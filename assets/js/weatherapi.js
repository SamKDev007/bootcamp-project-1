var APIKey = "0914fabf53b30d427bc7c8e54333c667";
var city = "Perth"; 
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)
    .then(response => response.json())
    .then(data => {
        
        var temperatureKelvin = data.main.temp;
        var temperatureCelsius = Math.round(temperatureKelvin - 273.15);
        var description = data.weather[0].description;

        
        var weatherInfoDiv = document.createElement("div");
        weatherInfoDiv.innerHTML = "Temperature: " + temperatureCelsius + "°C<br>Description: " + description;
        
        var weatherContainer = document.getElementById("weather-info");
        weatherContainer.appendChild(weatherInfoDiv);
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
    });