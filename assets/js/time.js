// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

window.onload = displayClock();
function displayClock() {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var d = new Date();
  var offset = 60 * 60 * 1000 * (CONFIG.utc);
  var offsetDate = new Date(d.getTime() + offset);

  var mm = monthNames[offsetDate.getMonth()];
  var dd = offsetDate.getDate();
  var day = weekday[offsetDate.getDay()];

  var min = (mins = ("0" + offsetDate.getMinutes()).slice(-2));
  var hh = offsetDate.getHours();
  var ampm = "";

  document.getElementById("hour").innerText = hh;
  document.getElementById("separator").innerHTML = " : ";
  document.getElementById("minutes").innerText = min + ampm;

  document.getElementById("month").innerText = day + ", " + mm;
  document.getElementById("day").innerText = dd;

  setTimeout(displayClock, 1000);
}
