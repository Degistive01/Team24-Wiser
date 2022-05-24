console.log("footer js is running");

const element = document.getElementById("geolink");
element.addEventListener("click", geoPlacering);

function geoPlacering() {
  window.open("https://www.google.com/maps/place/Schneider+Electric+Denmark+A+%2F+S/@55.7000371,11.7408112,9.09z/data=!4m9!1m2!2m1!1sSchneider+Electric!3m5!1s0x46525076f6471c93:0xb0c3c85da4b4c6d7!8m2!3d55.7330593!4d12.391457!15sChJTY2huZWlkZXIgRWxlY3RyaWMiA4gBAZIBHmVuZXJneV9lcXVpcG1lbnRfYW5kX3NvbHV0aW9ucw");
}
