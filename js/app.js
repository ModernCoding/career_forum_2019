function clock() {
  myClock = document.getElementById('my-clock');
  var today = new Date();
  myClock.innerText = ("0" + today.getHours()).slice(-2) + " : " + ("0" + today.getMinutes()).slice(-2) + " : " + ("0" + today.getSeconds()).slice(-2);
}

setInterval(clock, 1000);