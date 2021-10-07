(function () {

let log = "Registro do Percurso do estudante\n";

function esteSlide(hs,vs,cs){
    let thislog =   "----------------------------------------\n" + 
                    Date() +"\n"+
                    "O estudante está no slide de indice "+ (hs+1) +"."+ (vs+1) +
                    "\nId: "+ cs.id +"\nTítulo: "+ cs.children["istitle"].innerText.trim()+"\n";
    console.log(thislog);
    log = log + thislog
}

Reveal.addEventListener( 'ready', function( event ) {
    esteSlide(event.indexh, event.indexv, event.currentSlide);        
});
Reveal.addEventListener( 'slidechanged', function( event ) {
    esteSlide(event.indexh, event.indexv, event.currentSlide);                 
});

window.mensagem = function(elemento,mensagem) {
   //alert(mensagem);
   console.log(mensagem);
}

})();
