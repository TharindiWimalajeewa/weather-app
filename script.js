// Object to manage weather-related functionality
let weather = {
    apiKey:"Enter ur API here",
    fetchWeather: function (city) {
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            city 
            +"&units=metric&appid=" 
            + this.apiKey
        )
        .then((Response)=>Response.json())
        .then((data)=>this.displayWeather(data));
    },

    // Function to display weather data on the page
    displayWeather:function(data){
        const{name}=data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);

        // Update DOM elements with weather data
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
     // Function to initiate a weather search based on input value
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
      },
    };

    // Event listener for the search button
    document
    .querySelector(".search button").addEventListener("click", function () {
        weather.search();
      });

    // Event listener for the search bar to handle "Enter" key press
    document.querySelector(".search-bar").addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          weather.search();
        }
      });

// Initial call to fetch and display weather data for a default city
weather.fetchWeather("Colombo");
