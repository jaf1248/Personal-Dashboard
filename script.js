const todayLine = document.getElementById("todayLine");

const now = new Date();
todayLine.textContent = now.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric"
});

// This is intentionally simple placeholder data.
// Later, you can replace static sections with live feeds:
// - Microsoft Graph for calendar
// - RSS feeds for tech headlines
// - Weather API for Syracuse
// - Google Maps/Waze/Apple Maps style traffic source
