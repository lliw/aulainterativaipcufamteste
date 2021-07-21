//import { writeFile } from 'fs';

function loadDoc() {
  var xhr = new XMLHttpRequest(),
  path = "public/js/ajax_path.php";
  txt,
  xhr.open("GET", path, true);
  xhr.onreadystatechange = function()
  {
    if(xhr.readyState == 4 && xhr.status == 200)
    {
        txt = this.responseText;
        document.getElementById("demo").innerHTML = txt + "Pronto";
        xhr.open("POST", path, true);
        xhr.send("texto="+txt+"a");
        // but on this place you have to have a server for write updated JSON to the file
    }
  };
  xhr.send(null);


}





  /*
  //var teste = "null";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log("Pronto");
    if (this.readyState == 4 && this.status == 200) {
     console.log(this.responseText); 
     document.getElementById("demo").innerHTML = this.responseText + "Pronto";
     
     xhttp.open("POST", "public/js/ajax_info.txt", true);
     xhttp.send("ave= roxinol");

     
     //teste = this.responseText + "123 Teste";

  
      /*fs.writeFile("ajax_info.txt", teste, function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
      });/


    }
  };
  xhttp.open("GET", "public/js/ajax_info.txt", true);
  xhttp.send("ave= roxinol");
  */
