function somatorio() {

  var x = parseInt(document.getElementById("numero").value);
  var result = 0;

  document.getElementById("numero").value = "";

  for (var i = 1; i < x; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result = result + i;
    }
  }

  document.getElementById("resultado").textContent = result;
}