//import ids from html and assign them to a const variable
const condition = document.getElementById("description");
const temp = document.getElementById("temp");
const buttonWeather = document.getElementById("submit");

document.addEventListener("DOMContentLoaded", function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(2);
        const long = position.coords.longitude.toFixed(2);
        console.log("Latitude: ", lat);
        console.log("Longitude: ", long);
        fetch(
          "https://api.openweathermap.org/data/2.5/onecall?lat=" +
            lat +
            "&lon=" +
            long +
            "&units=metric&exclude=minutely,hourly,alerts&appid=851c447363aefd30ca3673f25c0318a0"
        )
          .then((response) => response.json())
          .then((data) => {
            //grabs objects from data and assigns them to a variable
            console.log(data);
            let condition = data.current.weather[0].description;
            let tempValue = Math.round(data.current.temp);

            //edits html values to data from api
            description.innerHTML =
              "It is currently " + tempValue + "°C" + " with " + condition;
          });
      },
      (error) => {
        alert("Need access to get location.");
      }
    );
  }
});
