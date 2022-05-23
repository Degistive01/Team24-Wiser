console.log("js to forside is running");

const insigterfunktion = ["- Glemsomhed", "- Kage", "- Overmod"];

let text = "";
for (let i = 0; i < insigterfunktion.length; i++) {
  text += insigterfunktion[i] + "<br>";
}

document.getElementById("indsigter").innerHTML = text;

let itproblemer = "aktiv";

if (itproblemer == "aktiv") {
  document.getElementById("midlertidigtekstitproblemer").innerHTML = "Da hjemmesiden bliver opdateret i øjeblikket, kan nogle brugere opleve tekniske problemer";
} else {
  document.getElementById("midlertidigtekstitproblemer").style.display = "none";
}
