window.onload = function() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    document.querySelector(".nav a:hover").style.backgroundColor = "#0d171a";
  }
  if (/android/i.test(userAgent)) {
    document.querySelector(".nav a:hover").style.backgroundColor = "#0d171a";
  }
  if (/windows phone/i.test(userAgent)) {
    document.querySelector(".nav a:hover").style.backgroundColor = "#0d171a";
  }
};
