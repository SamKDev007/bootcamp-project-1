var APIKey = "0914fabf53b30d427bc7c8e54333c667";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var city = "Perth";

// fetch(queryURL)
//             .then(response => response.json())
//             .then(data => {
//                 // Extract relevant weather information from the data object
//                 var temperature = data.main.temp;
//                 var description = data.weather[0].description;

//                 // Display the weather information in the "weather-info" div
//                 var weatherInfoDiv = document.getElementById("weather-info");
//                 weatherInfoDiv.innerHTML = "Temperature: " + temperature + " K<br>Description: " + description;
//             })
//             .catch(error => {
//                 console.error("Error fetching weather data:", error);
//             });