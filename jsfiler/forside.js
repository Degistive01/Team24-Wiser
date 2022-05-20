console.log("js to forside is running");

const insigterfunktion = ["- Glemsomhed", "- Kage", "- Overmod"];

let text = "";
for (let i = 0; i < insigterfunktion.length; i++) {
  text += insigterfunktion[i] + "<br>";
}

document.getElementById("indsigter").innerHTML = text;
