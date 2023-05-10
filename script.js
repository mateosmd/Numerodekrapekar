function calcKaprekar() {
  var num = document.getElementById("numInput").value;
  var steps = "";

  // Verificar si el número ingresado tiene exactamente cuatro cifras
  if (num.length !== 4) {
    alert("El número ingresado debe tener exactamente cuatro cifras.");
    document.getElementById("numInput").value = "";
    return;
  }

  while (num != 6174) {
    var ascNum = num.toString().split('').sort().join('');
    var descNum = ascNum.split('').reverse().join('');
    num = descNum - ascNum;
    steps += descNum + " - " + ascNum + " = " + num + "<br>";
  }

  steps += "¡Número de Kaprekar encontrado!";
  document.getElementById("result").innerHTML = steps;
}
