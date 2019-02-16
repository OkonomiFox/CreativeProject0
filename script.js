document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=7bb558ec4ec70da2235ccd643bd691d8";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += '<h2>Current Weather for ' + json.name + "</h2>";

      for (let i = 0; i < json.weather.length; i++) {
        results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<h2>' + json.main.temp + " &deg;F</h2>"
      results += "<p>"
      for (let i = 0; i < json.weather.length; i++) {
        results += json.weather[i].description
        if (i !== json.weather.length - 1)
          results += ", "
      }
      for (let i = 0; i < json.main.length; i++) {
        results += "Humidity: " + json.main.humidity + "%"
      }
      results += "</p>";
      document.getElementById("weatherResults").innerHTML = results;
    });

  const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=7bb558ec4ec70da2235ccd643bd691d8";
  fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let forecast = "";
      for (let i = 0; i < json.list.length; i++) {
        forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
        forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
        forecast += "<p>Humidity: " + json.list[i].main.humidity + "%     Air Pressure: " + json.list[i].main.pressure + " hpa</p>";
        forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
      }
      document.getElementById("forecastResults").innerHTML = forecast;
    });
  /*
    //Add Temperature map?
    const url3 = "https://tile.openweathermap.org/map/{temp_new}/{100}/{x}/{y}.png?appid={7bb558ec4ec70da2235ccd643bd691d8}"
    fetch(url3)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let temp = "";
        temp += "<h2>" +
        document.getElementById("tempMap").innerHTML = temp;
      });

      //add to index.html
        <div id="tempMap"">
       </div>
  */
});










// ARTISTICPAINTING
// Import classes:
//import com.cloudmersive.client.invoker.ApiClient;
//import com.cloudmersive.client.invoker.ApiException;
//import com.cloudmersive.client.invoker.Configuration;
//import com.cloudmersive.client.invoker.auth.*;
//import com.cloudmersive.client.ArtisticApi;

//ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: Apikey
//ApiKeyAuth Apikey = (ApiKeyAuth) defaultClient.getAuthentication("Apikey");
//Apikey.setApiKey("dc23098d-3767-4fcd-8554-a288fbd371fd");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.setApiKeyPrefix("Token");

//ArtisticApi apiInstance = new ArtisticApi();
//String style = "la_muse"; // String | The style of the painting to apply.  To start, try \"udnie\" a painting style.  Possible values are: \"udnie\", \"wave\", \"la_muse\", \"rain_princess\".
//File imageFile = new File("/skywhales.jpg"); // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
//try {
//    byte[] result = apiInstance.artisticPainting(style, imageFile);
//    System.out.println(result);
//} catch (ApiException e) {
//    System.err.println("Exception when calling ArtisticApi#artisticPainting");
//    e.printStackTrace();
//}
