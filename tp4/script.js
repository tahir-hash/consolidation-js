window.onload = function (e) {
  //
  const eventDateProvided = "2023-01-01T00:00:00";
  const convert = moment.utc(eventDateProvided).format("DD-MM-YYYY HH:mm:ss");
  console.log(convert)
    eventTime = moment(convert, "DD-MM-YYYY HH:mm:ss");
    interval = 1000;
    const days = document.querySelector("#days");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const secondes = document.querySelector("#seconds");

  setInterval(function () {
    var currentTime = moment(),
      diffDays = eventTime.diff(currentTime, "days"),
      diffHours = eventTime.diff(currentTime, "hours"),
      diffMinutes = eventTime.diff(currentTime, "minutes"),
      diffSeconds = eventTime.diff(currentTime, "seconds");
console.log(eventTime);
    var  d = diffDays;
    var  h = diffHours - diffDays * 24;
    var  m = diffMinutes - diffHours * 60;
    var  s = diffSeconds - diffMinutes * 60;
//condition
    d = days.length === 1 ? "0" + d : d;
    h = hours.length === 1 ? "0" + h : h;
    m = minutes.length === 1 ? "0" + m : m;
    s = secondes.length === 1 ? "0" + s : s;

   //affichage
    days.textContent = d;
    hours.textContent = h;
    minutes.textContent = m;
    secondes.textContent = s;
  }, interval);
};

/* var eventTime= new Date (2023,0,1,00,00,00);
var currentTime = new Date();

var diffTime = eventTime - currentTime;
var duration = moment.duration(diffTime*1000, 'milliseconds');
var interval = 1000;

setInterval(function(){
  duration = moment.duration(duration - interval, 'milliseconds');
console.log(duration)
  
  var  d = moment(eventTime).diff(moment(currentTime),'days');
  var  h = moment.duration(duration).hours();
  var  m = moment.duration(duration).minutes();
  var  s = moment.duration(duration).seconds();

  document.querySelector("#days").textContent = d;
  document.querySelector("#hours").textContent = h;
  document.querySelector("#minutes").textContent = m;
  document.querySelector("#seconds").textContent = s;
}, interval);


 */