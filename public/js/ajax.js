function loadDoc() {
  var teste = "null";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
     teste = this.responseText + "123 Teste";
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
  xhttp.open("POST", "ajax_info.txt", true);
  xhttp.send(teste);
}