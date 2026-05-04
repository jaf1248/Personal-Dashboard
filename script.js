const todayLine = document.getElementById("todayLine");

const now = new Date();
todayLine.textContent = now.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric"
});
async function loadWeather() {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=43.0481&longitude=-76.1474&current=temperature_2m,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph";

  const response = await fetch(url);
  const data = await response.json();

  const temp = Math.round(data.current.temperature_2m);
  const wind = Math.round(data.current.wind_speed_10m);

  document.getElementById("weather").innerHTML = `
    <div class="big-number">${temp}°</div>
    <p class="subtle">Syracuse · Wind ${wind} mph</p>
  `;
}

loadWeather();

// This is intentionally simple placeholder data.
// Later, you can replace static sections with live feeds:
// - Microsoft Graph for calendar
// - RSS feeds for tech headlines
// - Weather API for Syracuse
// - Google Maps/Waze/Apple Maps style traffic source
