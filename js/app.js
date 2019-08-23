function clock() {
  myClock = document.getElementById('my-clock');
  var today = new Date();
  myClock.innerText = ("0" + today.getHours()).slice(-2) + " : " + ("0" + today.getMinutes()).slice(-2) + " : " + ("0" + today.getSeconds()).slice(-2);
}

clock();
setInterval(clock, 1000);

for (element of document.getElementsByTagName('body')) {

  element.addEventListener('keyup', function(e){

    switch (e.keyCode) {

      case 49:

        if (document.getElementsByClassName('my-guest-1').length > 0) {
          document.getElementsByClassName('my-guest-1')[0].click();
        }

        break;

        
      case 50:
        
        if (document.getElementsByClassName('my-guest-2').length > 0) {
          document.getElementsByClassName('my-guest-2')[0].click();
        }
        
        break;
        

      case 51:

        if (document.getElementsByClassName('my-guest-3').length > 0) {
          document.getElementsByClassName('my-guest-3')[0].click();
        }
      
        break;
      

      case 52:

        if (document.getElementsByClassName('my-guest-4').length > 0) {
          document.getElementsByClassName('my-guest-4')[0].click();
        }
      
        break;
      

      default:

        if (document.getElementsByClassName('my-index').length > 0) {
          document.getElementsByClassName('my-index')[0].click();
        }

        break;

    }

  });

}