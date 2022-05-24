console.log("Hello world!");

const element = document.getElementById("geolink");
element.addEventListener("click", geoPlacering);

function geoPlacering() {
  window.open("https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FSchneider%2BElectric%2BDenmark%2BA%2B%252F%2BS%2F%4055.7503932%2C12.1805757%2C11.19z%2Fdata%3D!4m5!3m4!1s0x46525076f6471c93%3A0xb0c3c85da4b4c6d7!8m2!3d55.7330593!4d12.391457%3Ffbclid%3DIwAR2YUg_fNu3h2sUgUuMvdjFNyVquRxYP3NMt1E4DmOJ_X8_t_mXtXUgcFtQ&h=AT0rzllqRLutUZvF2C-f14Ug6uhjy7UQ0QP591KcoN8CfWedXaCYq_cV_DqdD0-mPAJIf8x0r5m3N7ksl-b6MCQbR7kgGN5Nu7Ojol0RlNytWlXWVVpGeBIQFrEghCyFsQn0GQ");
}
