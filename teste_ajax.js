(function () {
    console.log("Funciona");
    window.arquivo = function() {
        console.log("Teste AJAX");

        var data = new FormData();
        data.append("data" , "Testando");

        var xhr = new XMLHttpRequest();
        xhr.open( 'post', 'teste_ajax.php', true );
        xhr.onreadystatechange = function()
        {
          if(xhr.readyState == 4 && xhr.status == 200)
          {
            txt = this.responseText;
            document.getElementById("demo").innerHTML = txt + "Pronto ";
            console.log("IS READY");
            xhr.send(data);
          }
        };
    }
    
})();


