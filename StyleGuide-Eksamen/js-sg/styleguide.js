console.log("hey jeg virker");

function hvadSynesDu() {
  let number = document.getElementById("areyouready").value;

  if (number > 6) {
    alert("Fantastisk!");
  }

  else if (number > 4) {
    alert("Det er okay")
  }
  else {
    alert("Der er noget at arbejde på");
  }
  document.getElementById("areyouready").innerHTML = text;
}
