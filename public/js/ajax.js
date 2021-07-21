//import { writeFile } from 'fs';

function loadDoc() {
  //var teste = "null";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     //document.getElementById("demo").innerHTML = this.responseText;
     //teste = this.responseText + "123 Teste";

  
      /*fs.writeFile("ajax_info.txt", teste, function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
      });*/


    }
  };
  xhttp.open("GET", "public/js/ajax_info.txt", true);
  xhttp.send("teste2= teste3");
}