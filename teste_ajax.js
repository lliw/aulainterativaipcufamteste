(function () {
    console.log("Funciona");
    window.arquivo = function() {
        console.log("Teste AJAX");

        var data = new FormData();
        data.append("data" , "Testando");

        var xhr = new XMLHttpRequest();
        xhr.open( 'post', 'teste_ajax.php', true );
        xhr.send(data);
    }
    
})();


