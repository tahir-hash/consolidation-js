var eventTime= new Date (2023,0,1,00,00,00);
var currentTime = new Date();

var diffTime = eventTime - currentTime;
var duration = moment.duration(diffTime, 'milliseconds');
var interval = 1000;

setInterval(function(){
  duration = moment.duration(duration-interval , 'milliseconds');
  var  d = moment(eventTime).diff(moment(currentTime),'days');
  var  h = duration._data.hours;
  var  m = duration._data.minutes;
  var  s = duration._data.seconds;

  document.querySelector("#days").textContent = d;
  document.querySelector("#hours").textContent = h;
  document.querySelector("#minutes").textContent = m;
  document.querySelector("#seconds").textContent = s;
}, interval);
