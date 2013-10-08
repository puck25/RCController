if (window.DeviceOrientationEvent) {
  console.log("DeviceOrientation is supported");
  window.addEventListener('deviceorientation', function(eventData) {
        var LR = eventData.gamma;
        var FB = eventData.beta;
        var DIR = eventData.alpha;
        deviceOrientationHandler(LR, FB, DIR);
        }, false);
} else {
        alert("Not supported on your device or browser.  Sorry.");
}
 
function deviceOrientationHandler(LR, FB, DIR) {
   //for webkit browser
   document.getElementById("ballControll").style.webkitTransform = "rotate("+ LR +"deg) rotate3d(1,0,0, "+ (FB*-1)+"deg)";
 
   //for HTML5 standard-compliance
   document.getElementById("ballControll").style.transform = "rotate("+ LR +"deg) rotate3d(1,0,0, "+ (FB*-1)+"deg)";
}