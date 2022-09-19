var countDownDate = new Date("Nov 27, 2022 09:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("jam").innerHTML = days + " hari " + hours + " jam "
  + minutes + " minit " + seconds + " saat ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("jam").innerHTML = "0 hari 0 jam 0 minit 0 saat";
  }
}, 1000);