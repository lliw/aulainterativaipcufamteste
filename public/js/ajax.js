//import { writeFile } from 'fs';

function loadDoc() {
  //var teste = "null";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log("Pronto");
    if (this.readyState == 4 && this.status == 200) {
     console.log(this.responseText); 
     document.getElementById("demo").innerHTML = this.responseText + "Pronto";
     xhttp.open("GET", "public/js/ajax_info.txt", true);
     xhttp.send("ave= roxinol");

     
     //teste = this.responseText + "123 Teste";

  
      /*fs.writeFile("ajax_info.txt", teste, function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
      });*/


    }
  };
  xhttp.open("GET", "public/js/ajax_info.txt", true);
  xhttp.send("ave= roxinol");
}