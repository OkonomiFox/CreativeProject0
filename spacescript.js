//Astronomy Extension!
document.getElementById("astronomySubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const lat = document.getElementById("latInput").value;
  const lng = document.getElementById("lngInput").value;
  //const lat = 58.7984;
  //const lng = 17.8081;
  const numberOfDays = 1;
  //https://api.stormglass.io/astronomy?lat=${58.7984}&lng=${17.8081}&numberOfDays=${7}&APPID=702bcaf4-30bb-11e9-991c-0242ac130004-702bcc02-30bb-11e9-991c-0242ac130004'
  const url3 = "https://api.stormglass.io/astronomy?lat=" + lat + "&lng=" + lng + "&numberOfDAys=$" + numberOfDays;
  fetch(url3, {
      headers: {
        'Authorization': '702bcaf4-30bb-11e9-991c-0242ac130004-702bcc02-30bb-11e9-991c-0242ac130004'
      }
    })
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += "<h2>Information for your chosen location:</h2>";
      for (let i = 0; i < json.days.length; i++) {
        results += "<p> Current phase of the moon: " + json.days[i].moonPhase.current.text + "</p>";
        results += "<p> Time of Sunrise: " + json.days[i].sunrise + "</p>";
        results += "<p> Time of Sunset: " + json.days[i].sunset + "</p>";
        //results +=
      }

      document.getElementById("astronomyResults").innerHTML = results;
    });
});
