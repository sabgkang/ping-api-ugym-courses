var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if (request.readyState === 4) {
        console.log("A:",request.responseText);
        console.log("B:",request.status);
    }
};
        
paramToSend = "?API=00" + "&UserId=U1234"
var i =0;
request.open('GET', 'https://api-ugym-courses.herokuapp.com/'+paramToSend, true);
dt = new Date();
console.log("Send a request:", i++, " ", dt.getHours()+":"+dt.getMinutes());
request.send();

var hour, minute;
setInterval(function() {
  dt = new Date(); 
  hour = dt.getHours(); minute = dt.getMinutes(); 
  if ( (hour>5) && (hour<24) ) {
    request.open('GET', 'https://api-ugym-courses.herokuapp.com/'+paramToSend, true);
    console.log("Send a request:", i++, " ", hour +":"+minute);
    request.send();
  } else {
    console.log("From midnight to 6pm, stop sending requests: ", hour +":"+minute);
  }
}, 1800000);

