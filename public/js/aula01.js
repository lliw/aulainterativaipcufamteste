//função de esculta 
//Informa ao log o Slide em que o estudante se encontra caso a página seja iniciada ou reiniciada  
Reveal.addEventListener( 'ready', function( event ) {
    console.log("----------------------------------------")
    let hs = event.indexh;
    let vs = event.indexv;
    let cs = event.currentSlide;
    console.log("O estudante está no slide de indice "+ (hs+1) +"."+ (vs+1) +"\nId: "+ cs.id +"\nTítulo: "+ cs.children["istitle"].innerHTML.trim());
} );
//Informa ao log o Slide em que o estudante se encontra caso ele mude de Slide
Reveal.addEventListener( 'slidechanged', function( event ) {
    console.log("----------------------------------------")
    let hs = event.indexh;
    let vs = event.indexv;
    let cs = event.currentSlide;
    console.log("O estudante está no slide de indice "+ (hs+1) +"."+ (vs+1) +"\nId: "+ cs.id +"\nTítulo: "+ cs.children["istitle"].innerHTML.trim());
} );

//função de mudança do cotrole do slide, caso o estudante deseje ativar ou desativar os controles de navegação da Apresentação
let ctr = false
document.getElementById("home_01_bt02").onclick = function(){
    ctr = !ctr;
    Reveal.configure({ 
        controls: ctr,
        //keyboard: ctr,
     });

    if (ctr) {
        document.getElementById("home_01_bt02").innerHTML = "<div class=\"buttonipcback\">Na verdade, quero os controles desativados</div>";
        console.log("O estudante ativou os controles de navegação");
    }else{
        document.getElementById("home_01_bt02").innerHTML = "<div class=\"buttonipcback\">Já vi essa aula antes, quero os controles ativados</div>";
        console.log("O estudante desativou os controles de navegação");
    }
    
}

//função para abrir um pop-up com uma imagem ou url
function abrir(URL) {
    window.open(URL, 'janela', 'width=795, height=590, top=100, left=699, scrollbars=no, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no')
}

/* Atividade interativa do slide 9 - Variáveis da Memória do Computador (tpc_05_07)
/  Ao clicar no botão de "Verificar o Resultado" o fundo da area de texto muda para
/  verde se correto, ou vermelho se errado.
*/
document.getElementById("tpc01_05_07_btn01").onclick = function(){
    let divida3 = parseInt(document.getElementById("tpc01_05_07_ipt01_01").value.trim());
    let compra3 = parseInt(document.getElementById("tpc01_05_07_ipt01_02").value.trim());
    let divida4 = parseInt(document.getElementById("tpc01_05_07_ipt02_01").value.trim());
    let compra4 = parseInt(document.getElementById("tpc01_05_07_ipt02_02").value.trim());
    let divida5 = parseInt(document.getElementById("tpc01_05_07_ipt03_01").value.trim());
    let compra5 = parseInt(document.getElementById("tpc01_05_07_ipt03_02").value.trim());
    let divida6 = parseInt(document.getElementById("tpc01_05_07_ipt04_01").value.trim());
    let compra6 = parseInt(document.getElementById("tpc01_05_07_ipt04_02").value.trim());
    let divida7 = parseInt(document.getElementById("tpc01_05_07_ipt05_01").value.trim());
    let compra7 = parseInt(document.getElementById("tpc01_05_07_ipt05_02").value.trim());
    let divida8 = parseInt(document.getElementById("tpc01_05_07_ipt06_01").value.trim());
    let compra8 = parseInt(document.getElementById("tpc01_05_07_ipt06_02").value.trim());
    
    console.log("Ao verificar o resultado, os seguintes valores foram inforamdos")
    console.log("Para a linha",3+":","divida:",divida3,"compra:",compra3);
    console.log("Para a linha",4+":","divida:",divida4,"compra:",compra4);
    console.log("Para a linha",5+":","divida:",divida5,"compra:",compra5);
    console.log("Para a linha",6+":","divida:",divida6,"compra:",compra6);
    console.log("Para a linha",7+":","divida:",divida7,"compra:",compra7);
    console.log("Para a linha",8+":","divida:",divida8,"compra:",compra8);

    if(divida3 == 100){
        document.getElementById("tpc01_05_07_ipt01_01").style.backgroundColor = "yellowgreen";
    }else{
        document.getElementById("tpc01_05_07_ipt01_01").style.backgroundColor = "tomato";
    }
    if(compra3 == 100){
        document.getElementById("tpc01_05_07_ipt01_02").style.backgroundColor = "yellowgreen";
    }else{
        document.getElementById("tpc01_05_07_ipt01_02").style.backgroundColor = "tomato";
    }

    if(divida4 == 100){
        document.getElementById("tpc01_05_07_ipt02_01").style.backgroundColor = "yellowgreen";
    }else{
        document.getElementById("tpc01_05_07_ipt02_01").style.backgroundColor = "tomato";
    }
    if(compra4 == 200){
        document.getElementById("tpc01_05_07_ipt02_02").style.backgroundColor = "yellowgreen";
    }else{
        document.getElementById("tpc01_05_07_ipt02_02").style.backgroundColor = "tomato";
    }

    if(divida5 == 300){
        document.getElementById("tpc01_05_07_ipt03_01").style.backgroundColor = "yellowgreen";
    }else{
        document.getElementById("tpc01_05_07_ipt03_01").style.backgroundColor = "tomato";
    }
    if(compra5 == 200){
        document.getElementById("tpc01_05_07_ipt03_02").style.backgroundColor = "yellowgreen";
    }else{
        document.getElementById("tpc01_05_07_ipt03_02").style.backgroundColor = "tomato";
    }

    if(divida6 == 300){
        document.getElementById("tpc01_05_07_ipt04_01").style.backgroundColor = "yellowgreen";
    }else{
        document.getElementById("tpc01_05_07_ipt04_01").style.backgroundColor = "tomato";
    }
    if(compra6 == 300){
        document.getElementById("tpc01_05_07_ipt04_02").style.backgroundColor = "yellowgreen";
    }else{
        document.getElementById("tpc01_05_07_ipt04_02").style.backgroundColor = "tomato";
    }

    if(divida7 == 600){
        document.getElementById("tpc01_05_07_ipt05_01").style.backgroundColor = "yellowgreen";
    }else{
        document.getElementById("tpc01_05_07_ipt05_01").style.backgroundColor = "tomato";
    }
    if(compra7 == 300){
        document.getElementById("tpc01_05_07_ipt05_02").style.backgroundColor = "yellowgreen";
    }else{
        document.getElementById("tpc01_05_07_ipt05_02").style.backgroundColor = "tomato";
    }

    if(divida8 == 600){
        document.getElementById("tpc01_05_07_ipt06_01").style.backgroundColor = "yellowgreen";
    }else{
        document.getElementById("tpc01_05_07_ipt06_01").style.backgroundColor = "tomato";
    }
    if(compra8 == 0){
        document.getElementById("tpc01_05_07_ipt06_02").style.backgroundColor = "yellowgreen";
    }else{
        document.getElementById("tpc01_05_07_ipt06_02").style.backgroundColor = "tomato";
    }

}

/* Atividade interativa do slide 11 - Palavra-Chave Reservada (tpc_05_07)
/  Ao clicar no botão de "Verificar o Resultado" o fundo da area de texto muda para
/  verde se correto, vermelho se errado ou branco se vazio. Ele também informa uma
/  mensagem.
*/
document.getElementById("tpc01_07_btn01").onclick = function(){
    let inputid = document.getElementById("tpc01_07_ipt01").value;
    let outputid = "ERROR";
    let outputidcolor = "white";
    inputid = inputid.trim();
    console.log(inputid);

    if (inputid == "and" || inputid == "as" || inputid == "assert" ||
        inputid == "break" ||inputid == "class" || inputid == "continue" ||
        inputid == "def" || inputid == "del" || inputid == "elif" ||
        inputid == "else" || inputid == "except" || inputid == "False" || 
        inputid == "finally" || inputid == "for" || inputid == "from" || 
        inputid == "globa" || inputid == "if" || inputid == "import" ||
        inputid == "in" || inputid == "is" || inputid == "lambda" ||  
        inputid == "None" || inputid == "nonlocal" || inputid == "not" ||
        inputid == "or" || inputid == "pass" || inputid == "raise" ||  
        inputid == "return" || inputid == "True" || inputid == "try" ||
        inputid == "while" || inputid == "with" || inputid == "yield"){

        outputid = "O identificador tem o mesmo nome que uma palavra reservada";
        outputidcolor = "tomato";
    
    }else if(   inputid.charAt(0) == "_" || 
                inputid.charAt(0) == "a" || inputid.charAt(0) == "A" ||
                inputid.charAt(0) == "b" || inputid.charAt(0) == "B" ||
                inputid.charAt(0) == "c" || inputid.charAt(0) == "C" ||
                inputid.charAt(0) == "d" || inputid.charAt(0) == "D" ||
                inputid.charAt(0) == "e" || inputid.charAt(0) == "E" ||
                inputid.charAt(0) == "f" || inputid.charAt(0) == "F" ||
                inputid.charAt(0) == "g" || inputid.charAt(0) == "G" ||
                inputid.charAt(0) == "h" || inputid.charAt(0) == "H" ||
                inputid.charAt(0) == "i" || inputid.charAt(0) == "I" ||
                inputid.charAt(0) == "j" || inputid.charAt(0) == "J" ||
                inputid.charAt(0) == "k" || inputid.charAt(0) == "K" ||
                inputid.charAt(0) == "l" || inputid.charAt(0) == "L" ||
                inputid.charAt(0) == "m" || inputid.charAt(0) == "M" ||
                inputid.charAt(0) == "n" || inputid.charAt(0) == "N" ||
                inputid.charAt(0) == "o" || inputid.charAt(0) == "O" ||
                inputid.charAt(0) == "p" || inputid.charAt(0) == "P" ||
                inputid.charAt(0) == "q" || inputid.charAt(0) == "Q" ||
                inputid.charAt(0) == "r" || inputid.charAt(0) == "R" ||
                inputid.charAt(0) == "s" || inputid.charAt(0) == "S" ||
                inputid.charAt(0) == "t" || inputid.charAt(0) == "T" ||
                inputid.charAt(0) == "u" || inputid.charAt(0) == "U" ||
                inputid.charAt(0) == "v" || inputid.charAt(0) == "V" ||
                inputid.charAt(0) == "x" || inputid.charAt(0) == "X" ||
                inputid.charAt(0) == "w" || inputid.charAt(0) == "W" ||
                inputid.charAt(0) == "y" || inputid.charAt(0) == "Y" ||
                inputid.charAt(0) == "z" || inputid.charAt(0) == "Z" ){

            outputid = "O identificador está conforme as regras";
            outputidcolor = "yellowgreen";

            for(i = 1; i < inputid.length-1; i++){
                if (inputid.charAt(i) != "_" && 
                    inputid.charAt(i) != "a" && inputid.charAt(i) != "A" &&
                    inputid.charAt(i) != "b" && inputid.charAt(i) != "B" &&
                    inputid.charAt(i) != "c" && inputid.charAt(i) != "C" &&
                    inputid.charAt(i) != "d" && inputid.charAt(i) != "D" &&
                    inputid.charAt(i) != "e" && inputid.charAt(i) != "E" &&
                    inputid.charAt(i) != "f" && inputid.charAt(i) != "F" &&
                    inputid.charAt(i) != "g" && inputid.charAt(i) != "G" &&
                    inputid.charAt(i) != "h" && inputid.charAt(i) != "H" &&
                    inputid.charAt(i) != "i" && inputid.charAt(i) != "I" &&
                    inputid.charAt(i) != "j" && inputid.charAt(i) != "J" &&
                    inputid.charAt(i) != "k" && inputid.charAt(i) != "K" &&
                    inputid.charAt(i) != "l" && inputid.charAt(i) != "L" &&
                    inputid.charAt(i) != "m" && inputid.charAt(i) != "M" &&
                    inputid.charAt(i) != "n" && inputid.charAt(i) != "N" &&
                    inputid.charAt(i) != "o" && inputid.charAt(i) != "O" &&
                    inputid.charAt(i) != "p" && inputid.charAt(i) != "P" &&
                    inputid.charAt(i) != "q" && inputid.charAt(i) != "Q" &&
                    inputid.charAt(i) != "r" && inputid.charAt(i) != "R" &&
                    inputid.charAt(i) != "s" && inputid.charAt(i) != "S" &&
                    inputid.charAt(i) != "t" && inputid.charAt(i) != "T" &&
                    inputid.charAt(i) != "u" && inputid.charAt(i) != "U" &&
                    inputid.charAt(i) != "v" && inputid.charAt(i) != "V" &&
                    inputid.charAt(i) != "x" && inputid.charAt(i) != "X" &&
                    inputid.charAt(i) != "w" && inputid.charAt(i) != "W" &&
                    inputid.charAt(i) != "y" && inputid.charAt(i) != "Y" &&
                    inputid.charAt(i) != "z" && inputid.charAt(i) != "Z" &&
                    inputid.charAt(i) != "1" && inputid.charAt(i) != "6" &&
                    inputid.charAt(i) != "2" && inputid.charAt(i) != "7" &&
                    inputid.charAt(i) != "3" && inputid.charAt(i) != "8" &&
                    inputid.charAt(i) != "4" && inputid.charAt(i) != "9" &&
                    inputid.charAt(i) != "5" && inputid.charAt(i) != "0" ){

                        outputid = "O "+(i+1)+"o caracter do identificador apresenta algum erro";
                        outputidcolor = "tomato";
                        i = inputid.length-1;
                }

            }
    }
    else if(inputid.length > 0){ 
        outputid = "O inicio identificador apresenta algum erro";
        outputidcolor = "tomato";
    }else{
        outputid = "Digite um indentificador para a variável";
        outputidcolor = "white";
    }

    document.getElementById("tpc01_07_ipt02").value = outputid;
    document.getElementById("tpc01_07_ipt02").style.backgroundColor = outputidcolor;

    console.log("Ao verificar o resultado, o seguinte identificador foi inforamdo:",inputid);
    console.log("A seguinte mensagem foi retornada:",outputid);
    
}

/* Atividade interativa do slide 12 - Identifique os Identificadores Válidos (tpc_01_08)
/  Ao clicar nas células da tabela, a célula em questão recebe um "x" e as outras 
/  células da mesma linha ficam com um "-". Isso também altera da mesma forma a tebela do
/  slide 13 - Identifique os Identificadores Válidos (tpc_01_09). Nesta última tabela, os
/  identificadores válidos possuim um fundo verde, e os não válidos, um fundo vermelho.
/  Se o "x" estiver em uma célula verde, então está correto. Caso o contrário, está errado.  
*/
let atv_slide12a = ["-","-","-","-","-","-","-"];
let atv_slide12q = ["dia1","diaDaSemana","dia da semana","dia_da_semana","dia#3","3o_dia","_dia"];
function toLogQuiz( a, q, i ){
    for (j = 0; j < i; j++){
        console.log(q[j],"é",a[j]);
    }
}

document.getElementById("tpc01_08_bt01_01").onclick = function(){
    document.getElementById("tpc01_08_bt01_01").innerHTML ="x"
    document.getElementById("tpc01_08_bt01_02").innerHTML ="-"

    document.getElementById("tpc01_09_bt01_01").innerHTML ="x"
    document.getElementById("tpc01_09_bt01_02").innerHTML ="-"

    atv_slide12a[0] = "válido"
    console.log("Sobre a validade dos Identificadores dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide12a,atv_slide12q,7)
}

document.getElementById("tpc01_08_bt01_02").onclick = function(){
    document.getElementById("tpc01_08_bt01_02").innerHTML ="x"
    document.getElementById("tpc01_08_bt01_01").innerHTML ="-"

    document.getElementById("tpc01_09_bt01_02").innerHTML ="x"
    document.getElementById("tpc01_09_bt01_01").innerHTML ="-"

    atv_slide12a[0] = "inválido"
    console.log("Sobre a validade dos Identificadores dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide12a,atv_slide12q,7)
}

document.getElementById("tpc01_08_bt02_01").onclick = function(){
    document.getElementById("tpc01_08_bt02_01").innerHTML ="x"
    document.getElementById("tpc01_08_bt02_02").innerHTML ="-"

    document.getElementById("tpc01_09_bt02_01").innerHTML ="x"
    document.getElementById("tpc01_09_bt02_02").innerHTML ="-"

    atv_slide12a[1] = "válido"
    console.log("Sobre a validade dos Identificadores dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide12a,atv_slide12q,7)
}

document.getElementById("tpc01_08_bt02_02").onclick = function(){
    document.getElementById("tpc01_08_bt02_02").innerHTML ="x"
    document.getElementById("tpc01_08_bt02_01").innerHTML ="-"

    document.getElementById("tpc01_09_bt02_02").innerHTML ="x"
    document.getElementById("tpc01_09_bt02_01").innerHTML ="-"

    atv_slide12a[1] = "inválido"
    console.log("Sobre a validade dos Identificadores dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide12a,atv_slide12q,7)
}

document.getElementById("tpc01_08_bt03_01").onclick = function(){
    document.getElementById("tpc01_08_bt03_01").innerHTML ="x"
    document.getElementById("tpc01_08_bt03_02").innerHTML ="-"

    document.getElementById("tpc01_09_bt03_01").innerHTML ="x"
    document.getElementById("tpc01_09_bt03_02").innerHTML ="-"

    atv_slide12a[2] = "válido"
    console.log("Sobre a validade dos Identificadores dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide12a,atv_slide12q,7)
}

document.getElementById("tpc01_08_bt03_02").onclick = function(){
    document.getElementById("tpc01_08_bt03_02").innerHTML ="x"
    document.getElementById("tpc01_08_bt03_01").innerHTML ="-"

    document.getElementById("tpc01_09_bt03_02").innerHTML ="x"
    document.getElementById("tpc01_09_bt03_01").innerHTML ="-"

    atv_slide12a[2] = "inválido"
    console.log("Sobre a validade dos Identificadores dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide12a,atv_slide12q,7)
}

document.getElementById("tpc01_08_bt04_01").onclick = function(){
    document.getElementById("tpc01_08_bt04_01").innerHTML ="x"
    document.getElementById("tpc01_08_bt04_02").innerHTML ="-"

    document.getElementById("tpc01_09_bt04_01").innerHTML ="x"
    document.getElementById("tpc01_09_bt04_02").innerHTML ="-"

    atv_slide12a[3] = "válido"
    console.log("Sobre a validade dos Identificadores dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide12a,atv_slide12q,7)
}

document.getElementById("tpc01_08_bt04_02").onclick = function(){
    document.getElementById("tpc01_08_bt04_02").innerHTML ="x"
    document.getElementById("tpc01_08_bt04_01").innerHTML ="-"

    document.getElementById("tpc01_09_bt04_02").innerHTML ="x"
    document.getElementById("tpc01_09_bt04_01").innerHTML ="-"

    atv_slide12a[3] = "inválido"
    console.log("Sobre a validade dos Identificadores dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide12a,atv_slide12q,7)
}

document.getElementById("tpc01_08_bt05_01").onclick = function(){
    document.getElementById("tpc01_08_bt05_01").innerHTML ="x"
    document.getElementById("tpc01_08_bt05_02").innerHTML ="-"

    document.getElementById("tpc01_09_bt05_01").innerHTML ="x"
    document.getElementById("tpc01_09_bt05_02").innerHTML ="-"

    atv_slide12a[4]= "válido"
    console.log("Sobre a validade dos Identificadores dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide12a,atv_slide12q,7)
}

document.getElementById("tpc01_08_bt05_02").onclick = function(){
    document.getElementById("tpc01_08_bt05_02").innerHTML ="x"
    document.getElementById("tpc01_08_bt05_01").innerHTML ="-"

    document.getElementById("tpc01_09_bt05_02").innerHTML ="x"
    document.getElementById("tpc01_09_bt05_01").innerHTML ="-"

    atv_slide12a[4] = "inválido"
    console.log("Sobre a validade dos Identificadores dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide12a,atv_slide12q,7)
}

document.getElementById("tpc01_08_bt06_01").onclick = function(){
    document.getElementById("tpc01_08_bt06_01").innerHTML ="x"
    document.getElementById("tpc01_08_bt06_02").innerHTML ="-"

    document.getElementById("tpc01_09_bt06_01").innerHTML ="x"
    document.getElementById("tpc01_09_bt06_02").innerHTML ="-"

    atv_slide12a[5] = "válido"
    console.log("Sobre a validade dos Identificadores dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide12a,atv_slide12q,7)
}

document.getElementById("tpc01_08_bt06_02").onclick = function(){
    document.getElementById("tpc01_08_bt06_02").innerHTML ="x"
    document.getElementById("tpc01_08_bt06_01").innerHTML ="-"

    document.getElementById("tpc01_09_bt06_02").innerHTML ="x"
    document.getElementById("tpc01_09_bt06_01").innerHTML ="-"

    atv_slide12a[5] = "inválido"
    console.log("Sobre a validade dos Identificadores dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide12a,atv_slide12q,7)
}

document.getElementById("tpc01_08_bt07_01").onclick = function(){
    document.getElementById("tpc01_08_bt07_01").innerHTML ="x"
    document.getElementById("tpc01_08_bt07_02").innerHTML ="-"

    document.getElementById("tpc01_09_bt07_01").innerHTML ="x"
    document.getElementById("tpc01_09_bt07_02").innerHTML ="-"

    atv_slide12a[6] = "válido"
    console.log("Sobre a validade dos Identificadores dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide12a,atv_slide12q,7)
}

document.getElementById("tpc01_08_bt07_02").onclick = function(){
    document.getElementById("tpc01_08_bt07_02").innerHTML ="x"
    document.getElementById("tpc01_08_bt07_01").innerHTML ="-"

    document.getElementById("tpc01_09_bt07_02").innerHTML ="x"
    document.getElementById("tpc01_09_bt07_01").innerHTML ="-"

    atv_slide12a[6] = "inválido"
    console.log("Sobre a validade dos Identificadores dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide12a,atv_slide12q,7)
}

document.getElementById("tpc01_08_bt08").onclick = function(){
   console.log("O estudante acredita que")

   for(i = 0; i < 7; i ++){
       console.log( atv_slide12q[i],"é",atv_slide12a[i]);
       if ( ((i == 0 || i == 1 || i == 3 || i == 6) && atv_slide12a[i] == "válido") ||
            ((i == 2 || i == 4 || i == 5) && atv_slide12a[i] == "inválido")){
                console.log("E está correto");
        }
        else if (atv_slide12a[i] == "-"){
            console.log("E não há o que se afirmar");
        }
        else{
            console.log("E está errado");
        }

   }

}

/* Atividade interativa do slide 16 - Identifique os Tipos Numéricos (tpc_01_12)
/  Ao clicar nas células da tabela, a célula em questão recebe um "x" e as outras 
/  células da mesma linha ficam com um "-". Isso também altera da mesma forma a tebela do
/  slide 13 - Identifique os Tipos Numéricos (tpc_01_13). Nesta última tabela, os
/  tipos válidos possuim um fundo verde, e os não válidos, um fundo vermelho.
/  Se o "x" estiver em uma célula verde, então está correto. Caso o contrário, está errado.  
*/
let atv_slide16a = ["-","-","-","-","-","-"];
let atv_slide16q = ["5","5.0","4.3","-2","100","1.333"];

document.getElementById("tpc01_12_bt01_01").onclick = function(){
    document.getElementById("tpc01_12_bt01_01").innerHTML ="x"
    document.getElementById("tpc01_12_bt01_02").innerHTML ="-"

    document.getElementById("tpc01_13_bt01_01").innerHTML ="x"
    document.getElementById("tpc01_13_bt01_02").innerHTML ="-"

    atv_slide16a[0] = "inteiro"
    console.log("Sobre o tipo dos números dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide16a,atv_slide16q,6)
}

document.getElementById("tpc01_12_bt01_02").onclick = function(){
    document.getElementById("tpc01_12_bt01_02").innerHTML ="x"
    document.getElementById("tpc01_12_bt01_01").innerHTML ="-"

    document.getElementById("tpc01_13_bt01_02").innerHTML ="x"
    document.getElementById("tpc01_13_bt01_01").innerHTML ="-"

    atv_slide16a[0] = "real"
    console.log("Sobre o tipo dos números dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide16a,atv_slide16q,6)
}

document.getElementById("tpc01_12_bt02_01").onclick = function(){
    document.getElementById("tpc01_12_bt02_01").innerHTML ="x"
    document.getElementById("tpc01_12_bt02_02").innerHTML ="-"

    document.getElementById("tpc01_13_bt02_01").innerHTML ="x"
    document.getElementById("tpc01_13_bt02_02").innerHTML ="-"

    atv_slide16a[1] = "inteiro"
    console.log("Sobre o tipo dos números dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide16a,atv_slide16q,6)
}

document.getElementById("tpc01_12_bt02_02").onclick = function(){
    document.getElementById("tpc01_12_bt02_02").innerHTML ="x"
    document.getElementById("tpc01_12_bt02_01").innerHTML ="-"

    document.getElementById("tpc01_13_bt02_02").innerHTML ="x"
    document.getElementById("tpc01_13_bt02_01").innerHTML ="-"

    atv_slide16a[1] = "real"
    console.log("Sobre o tipo dos números dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide16a,atv_slide16q,6)
}

document.getElementById("tpc01_12_bt03_01").onclick = function(){
    document.getElementById("tpc01_12_bt03_01").innerHTML ="x"
    document.getElementById("tpc01_12_bt03_02").innerHTML ="-"

    document.getElementById("tpc01_13_bt03_01").innerHTML ="x"
    document.getElementById("tpc01_13_bt03_02").innerHTML ="-"

    atv_slide16a[2] = "inteiro"
    console.log("Sobre o tipo dos números dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide16a,atv_slide16q,6)
}

document.getElementById("tpc01_12_bt03_02").onclick = function(){
    document.getElementById("tpc01_12_bt03_02").innerHTML ="x"
    document.getElementById("tpc01_12_bt03_01").innerHTML ="-"

    document.getElementById("tpc01_13_bt03_02").innerHTML ="x"
    document.getElementById("tpc01_13_bt03_01").innerHTML ="-"

    atv_slide16a[2] = "real"
    console.log("Sobre o tipo dos números dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide16a,atv_slide16q,6)
}

document.getElementById("tpc01_12_bt04_01").onclick = function(){
    document.getElementById("tpc01_12_bt04_01").innerHTML ="x"
    document.getElementById("tpc01_12_bt04_02").innerHTML ="-"

    document.getElementById("tpc01_13_bt04_01").innerHTML ="x"
    document.getElementById("tpc01_13_bt04_02").innerHTML ="-"

    atv_slide16a[3] = "inteiro"
    console.log("Sobre o tipo dos números dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide16a,atv_slide16q,6)
}

document.getElementById("tpc01_12_bt04_02").onclick = function(){
    document.getElementById("tpc01_12_bt04_02").innerHTML ="x"
    document.getElementById("tpc01_12_bt04_01").innerHTML ="-"

    document.getElementById("tpc01_13_bt04_02").innerHTML ="x"
    document.getElementById("tpc01_13_bt04_01").innerHTML ="-"

    atv_slide16a[3] = "real"
    console.log("Sobre o tipo dos números dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide16a,atv_slide16q,6)
}

document.getElementById("tpc01_12_bt05_01").onclick = function(){
    document.getElementById("tpc01_12_bt05_01").innerHTML ="x"
    document.getElementById("tpc01_12_bt05_02").innerHTML ="-"

    document.getElementById("tpc01_13_bt05_01").innerHTML ="x"
    document.getElementById("tpc01_13_bt05_02").innerHTML ="-"

    atv_slide16a[4] = "inteiro"
    console.log("Sobre o tipo dos números dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide16a,atv_slide16q,6)
}

document.getElementById("tpc01_12_bt05_02").onclick = function(){
    document.getElementById("tpc01_12_bt05_02").innerHTML ="x"
    document.getElementById("tpc01_12_bt05_01").innerHTML ="-"

    document.getElementById("tpc01_13_bt05_02").innerHTML ="x"
    document.getElementById("tpc01_13_bt05_01").innerHTML ="-"

    atv_slide16a[4] = "real"
    console.log("Sobre o tipo dos números dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide16a,atv_slide16q,6)
}

document.getElementById("tpc01_12_bt06_01").onclick = function(){
    document.getElementById("tpc01_12_bt06_01").innerHTML ="x"
    document.getElementById("tpc01_12_bt06_02").innerHTML ="-"

    document.getElementById("tpc01_13_bt06_01").innerHTML ="x"
    document.getElementById("tpc01_13_bt06_02").innerHTML ="-"

    atv_slide16a[5] = "inteiro"
    console.log("Sobre o tipo dos números dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide16a,atv_slide16q,6)
}

document.getElementById("tpc01_12_bt06_02").onclick = function(){
    document.getElementById("tpc01_12_bt06_02").innerHTML ="x"
    document.getElementById("tpc01_12_bt06_01").innerHTML ="-"

    document.getElementById("tpc01_13_bt06_02").innerHTML ="x"
    document.getElementById("tpc01_13_bt06_01").innerHTML ="-"

    atv_slide16a[5] = "real"
    console.log("Sobre o tipo dos números dessa atividade, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide16a,atv_slide16q,6)
}

document.getElementById("tpc01_12_bt07").onclick = function(){
    console.log("O estudante acredita que")
 
    for(i = 0; i < 6; i ++){
        console.log( atv_slide16q[i],"é",atv_slide16a[i]);
        if ( ((i == 0 || i == 3 || i == 4) && atv_slide16a[i] == "inteiro") ||
             ((i == 1 || i == 2 || i == 5) && atv_slide16a[i] == "real")){
                 console.log("E está correto");
         }
         else if (atv_slide16a[i] == "-"){
             console.log("E não há o que se afirmar");
         }
         else{
             console.log("E está errado");
         }
 
    }
 
}

/* Atividade interativa do slide 27 - Entrada de Dados (tpc_02_03)
/  Ao informar o valor da variável ela se repete nos passos seguintes
/  do exemplo  
*/
document.getElementById("tpc02_03_03_btn01").onclick = function(){
    var inputvar = document.getElementById("tpc02_03_03_ipt03").value;
    inputvar = inputvar.trim();
    console.log("O estudande digitou:",inputvar);
    document.getElementById("tpc02_03_04_spn01").innerHTML = inputvar;
    document.getElementById("tpc02_03_05_spn01").innerHTML = inputvar;
    document.getElementById("tpc02_03_05_spn02").innerHTML = inputvar;
    document.getElementById("tpc02_03_06_spn01").innerHTML = inputvar;
    document.getElementById("tpc02_03_06_spn02").innerHTML = inputvar;
}



/* Atividade interativa do slide 34 - Problema 01 - Entendendo o 
/  Problema e Identificando Entradas e Saídas (tpc_03_05)
/  Ao clicar nas células da tabela, a célula correspondente tem 
/  seu texto mudado para a cor preta. O mesmo acontece no slide 
/  seguinte onde estão as repostas indicadas com o fundo verde 
/  para as células corretas e vermelho para as erradas
*/
function changeColor(id){
    var cor = document.getElementById(id).style.color;
    if (cor == "black"){
        cor = "white";
    }
    else{
        cor = "black";
    }
    document.getElementById(id).style.color = cor;
}
let atv_slide34Aa = ["não relacionado com o problema","não relacionado com o problema","não relacionado com o problema","não relacionado com o problema","não relacionado com o problema"];
let atv_slide34Aq = ["número de tickets vendidos","valor do ticket","área do estádio","times","renda"];

document.getElementById("tpc03_05_btn01_a").onclick = function(){
    changeColor("tpc03_05_btn01_a");
    changeColor("tpc03_06_btn01_a"); 
    if ( atv_slide34Aa[0] == "relacionado com o problema"){
        atv_slide34Aa[0] = "não relacionado com o problema"
    }
    else{
        atv_slide34Aa[0] = "relacionado com o problema"
    }
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Aa,atv_slide34Aq,5)
}
document.getElementById("tpc03_05_btn01_b").onclick = function(){
    changeColor("tpc03_05_btn01_b");
    changeColor("tpc03_06_btn01_b");   
    if ( atv_slide34Aa[1] == "relacionado com o problema"){
        atv_slide34Aa[1] = "não relacionado com o problema"
    }
    else{
        atv_slide34Aa[1] = "relacionado com o problema"
    }
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Aa,atv_slide34Aq,5)
}
document.getElementById("tpc03_05_btn01_c").onclick = function(){
    changeColor("tpc03_05_btn01_c");
    changeColor("tpc03_06_btn01_c");   
    if ( atv_slide34Aa[2] == "relacionado com o problema"){
        atv_slide34Aa[2] = "não relacionado com o problema"
    }
    else{
        atv_slide34Aa[2] = "relacionado com o problema"
    }
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Aa,atv_slide34Aq,5)
}
document.getElementById("tpc03_05_btn01_d").onclick = function(){
    changeColor("tpc03_05_btn01_d");
    changeColor("tpc03_06_btn01_d");   
    if ( atv_slide34Aa[3] == "relacionado com o problema"){
        atv_slide34Aa[3] = "não relacionado com o problema"
    }
    else{
        atv_slide34Aa[3] = "relacionado com o problema"
    }
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Aa,atv_slide34Aq,5)
}
document.getElementById("tpc03_05_btn01_e").onclick = function(){
    changeColor("tpc03_05_btn01_e");
    changeColor("tpc03_06_btn01_e");   
    if ( atv_slide34Aa[4] == "relacionado com o problema"){
        atv_slide34Aa[4] = "não relacionado com o problema"
    }
    else{
        atv_slide34Aa[4] = "relacionado com o problema"
    }
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Aa,atv_slide34Aq,5)
}

let atv_slide34Ba = ["-","-","-","-","-"];
let atv_slide34Bq = ["número de bilhetes A","número de bilhetes B","número de bilhetes C","nome do Estádio","Renda"];

document.getElementById("tpc03_05_btn02_a1").onclick = function(){
    document.getElementById("tpc03_05_btn02_a1").style.color = "black";
    document.getElementById("tpc03_05_btn02_b1").style.color = "white";
    document.getElementById("tpc03_05_btn02_c1").style.color = "white";
    
    document.getElementById("tpc03_06_btn02_a1").style.color = "black";
    document.getElementById("tpc03_06_btn02_b1").style.color = "white";
    document.getElementById("tpc03_06_btn02_c1").style.color = "white";

    atv_slide34Ba[0] = "entrada"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Ba,atv_slide34Bq,5)
}
document.getElementById("tpc03_05_btn02_b1").onclick = function(){
    document.getElementById("tpc03_05_btn02_a1").style.color = "white";
    document.getElementById("tpc03_05_btn02_b1").style.color = "black";
    document.getElementById("tpc03_05_btn02_c1").style.color = "white";

    document.getElementById("tpc03_06_btn02_a1").style.color = "white";
    document.getElementById("tpc03_06_btn02_b1").style.color = "black";
    document.getElementById("tpc03_06_btn02_c1").style.color = "white";

    atv_slide34Ba[0] = "saída"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Ba,atv_slide34Bq,5)
    
}
document.getElementById("tpc03_05_btn02_c1").onclick = function(){
    document.getElementById("tpc03_05_btn02_a1").style.color = "white";
    document.getElementById("tpc03_05_btn02_b1").style.color = "white";
    document.getElementById("tpc03_05_btn02_c1").style.color = "black";
    
    document.getElementById("tpc03_06_btn02_a1").style.color = "white";
    document.getElementById("tpc03_06_btn02_b1").style.color = "white";
    document.getElementById("tpc03_06_btn02_c1").style.color = "black";

    atv_slide34Ba[0] = "NSA"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Ba,atv_slide34Bq,5)
}

document.getElementById("tpc03_05_btn02_a2").onclick = function(){
    document.getElementById("tpc03_05_btn02_a2").style.color = "black";
    document.getElementById("tpc03_05_btn02_b2").style.color = "white";
    document.getElementById("tpc03_05_btn02_c2").style.color = "white";
    
    document.getElementById("tpc03_06_btn02_a2").style.color = "black";
    document.getElementById("tpc03_06_btn02_b2").style.color = "white";
    document.getElementById("tpc03_06_btn02_c2").style.color = "white";

    atv_slide34Ba[1] = "entrada"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Ba,atv_slide34Bq,5)
}
document.getElementById("tpc03_05_btn02_b2").onclick = function(){
    document.getElementById("tpc03_05_btn02_a2").style.color = "white";
    document.getElementById("tpc03_05_btn02_b2").style.color = "black";
    document.getElementById("tpc03_05_btn02_c2").style.color = "white";

    document.getElementById("tpc03_06_btn02_a2").style.color = "white";
    document.getElementById("tpc03_06_btn02_b2").style.color = "black";
    document.getElementById("tpc03_06_btn02_c2").style.color = "white";

    atv_slide34Ba[1] = "saída"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Ba,atv_slide34Bq,5)
}
document.getElementById("tpc03_05_btn02_c2").onclick = function(){
    document.getElementById("tpc03_05_btn02_a2").style.color = "white";
    document.getElementById("tpc03_05_btn02_b2").style.color = "white";
    document.getElementById("tpc03_05_btn02_c2").style.color = "black";
    
    document.getElementById("tpc03_06_btn02_a2").style.color = "white";
    document.getElementById("tpc03_06_btn02_b2").style.color = "white";
    document.getElementById("tpc03_06_btn02_c2").style.color = "black";

    atv_slide34Ba[1] = "NSA"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Ba,atv_slide34Bq,5)
}

document.getElementById("tpc03_05_btn02_a3").onclick = function(){
    document.getElementById("tpc03_05_btn02_a3").style.color = "black";
    document.getElementById("tpc03_05_btn02_b3").style.color = "white";
    document.getElementById("tpc03_05_btn02_c3").style.color = "white";
    
    document.getElementById("tpc03_06_btn02_a3").style.color = "black";
    document.getElementById("tpc03_06_btn02_b3").style.color = "white";
    document.getElementById("tpc03_06_btn02_c3").style.color = "white";

    atv_slide34Ba[2] = "entrada"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Ba,atv_slide34Bq,5)
}
document.getElementById("tpc03_05_btn02_b3").onclick = function(){
    document.getElementById("tpc03_05_btn02_a3").style.color = "white";
    document.getElementById("tpc03_05_btn02_b3").style.color = "black";
    document.getElementById("tpc03_05_btn02_c3").style.color = "white";

    document.getElementById("tpc03_06_btn02_a3").style.color = "white";
    document.getElementById("tpc03_06_btn02_b3").style.color = "black";
    document.getElementById("tpc03_06_btn02_c3").style.color = "white";

    atv_slide34Ba[2] = "saída"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Ba,atv_slide34Bq,5)
}
document.getElementById("tpc03_05_btn02_c3").onclick = function(){
    document.getElementById("tpc03_05_btn02_a3").style.color = "white";
    document.getElementById("tpc03_05_btn02_b3").style.color = "white";
    document.getElementById("tpc03_05_btn02_c3").style.color = "black";
    
    document.getElementById("tpc03_06_btn02_a3").style.color = "white";
    document.getElementById("tpc03_06_btn02_b3").style.color = "white";
    document.getElementById("tpc03_06_btn02_c3").style.color = "black";

    atv_slide34Ba[2] = "NSA"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Ba,atv_slide34Bq,5)
}

document.getElementById("tpc03_05_btn02_a4").onclick = function(){
    document.getElementById("tpc03_05_btn02_a4").style.color = "black";
    document.getElementById("tpc03_05_btn02_b4").style.color = "white";
    document.getElementById("tpc03_05_btn02_c4").style.color = "white";
    
    document.getElementById("tpc03_06_btn02_a4").style.color = "black";
    document.getElementById("tpc03_06_btn02_b4").style.color = "white";
    document.getElementById("tpc03_06_btn02_c4").style.color = "white";

    atv_slide34Ba[3] = "entrada"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Ba,atv_slide34Bq,5)
}
document.getElementById("tpc03_05_btn02_b4").onclick = function(){
    document.getElementById("tpc03_05_btn02_a4").style.color = "white";
    document.getElementById("tpc03_05_btn02_b4").style.color = "black";
    document.getElementById("tpc03_05_btn02_c4").style.color = "white";

    document.getElementById("tpc03_06_btn02_a4").style.color = "white";
    document.getElementById("tpc03_06_btn02_b4").style.color = "black";
    document.getElementById("tpc03_06_btn02_c4").style.color = "white";

    atv_slide34Ba[3] = "saída"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Ba,atv_slide34Bq,5)
}
document.getElementById("tpc03_05_btn02_c4").onclick = function(){
    document.getElementById("tpc03_05_btn02_a4").style.color = "white";
    document.getElementById("tpc03_05_btn02_b4").style.color = "white";
    document.getElementById("tpc03_05_btn02_c4").style.color = "black";
    
    document.getElementById("tpc03_06_btn02_a4").style.color = "white";
    document.getElementById("tpc03_06_btn02_b4").style.color = "white";
    document.getElementById("tpc03_06_btn02_c4").style.color = "black";

    atv_slide34Ba[3] = "NSA"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Ba,atv_slide34Bq,5)
}

document.getElementById("tpc03_05_btn02_a5").onclick = function(){
    document.getElementById("tpc03_05_btn02_a5").style.color = "black";
    document.getElementById("tpc03_05_btn02_b5").style.color = "white";
    document.getElementById("tpc03_05_btn02_c5").style.color = "white";
    
    document.getElementById("tpc03_06_btn02_a5").style.color = "black";
    document.getElementById("tpc03_06_btn02_b5").style.color = "white";
    document.getElementById("tpc03_06_btn02_c5").style.color = "white";

    atv_slide34Ba[4] = "entrada"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Ba,atv_slide34Bq,5)
}
document.getElementById("tpc03_05_btn02_b5").onclick = function(){
    document.getElementById("tpc03_05_btn02_a5").style.color = "white";
    document.getElementById("tpc03_05_btn02_b5").style.color = "black";
    document.getElementById("tpc03_05_btn02_c5").style.color = "white";

    document.getElementById("tpc03_06_btn02_a5").style.color = "white";
    document.getElementById("tpc03_06_btn02_b5").style.color = "black";
    document.getElementById("tpc03_06_btn02_c5").style.color = "white";

    atv_slide34Ba[4] = "saída"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Ba,atv_slide34Bq,5)
}
document.getElementById("tpc03_05_btn02_c5").onclick = function(){
    document.getElementById("tpc03_05_btn02_a5").style.color = "white";
    document.getElementById("tpc03_05_btn02_b5").style.color = "white";
    document.getElementById("tpc03_05_btn02_c5").style.color = "black";
    
    document.getElementById("tpc03_06_btn02_a5").style.color = "white";
    document.getElementById("tpc03_06_btn02_b5").style.color = "white";
    document.getElementById("tpc03_06_btn02_c5").style.color = "black";

    atv_slide34Ba[4] = "NSA"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide34Ba,atv_slide34Bq,5)
}

document.getElementById("tpc03_05_btn03").onclick = function(){
    console.log("O estudante acredita que")
 
    for(i = 0; i < 5; i ++){
        console.log( atv_slide34Aq[i],"é",atv_slide34Aa[i]);
        if ( ((i == 0 || i == 1 || i == 4) && atv_slide34Aa[i] == "relacionado com o problema") ||
             ((i == 2 || i == 3) && atv_slide34Aa[i] == "não relacionado com o problema")){
                 console.log("E está correto");
         }
         else if (atv_slide34Aa[i] == "-"){
             console.log("E não há o que se afirmar");
         }
         else{
             console.log("E está errado");
         }
 
    }

    for(i = 0; i < 5; i ++){
        console.log( atv_slide34Bq[i],"é",atv_slide34Ba[i]);
        if ( ((i == 0 || i == 1 || i == 2) && atv_slide34Ba[i] == "entrada") ||
             ((i == 3) && atv_slide34Aa[i] == "NSA" ) || 
             ((i == 4) && atv_slide34Aa[i] == "saída")){
                 console.log("E está correto");
         }
         else if (atv_slide34Aa[i] == "-"){
             console.log("E não há o que se afirmar");
         }
         else{
             console.log("E está errado");
         }
 
    }

 
}

/* Atividade interativa do slide 37 - Problema 01 - Codificando
/  em Python (tpc_03_08). O aluno deve inserir o código 
/  correspondente capaz de splucionar o problema
*/
document.getElementById("tpc03_08_bt01").onclick = function(){
    var inputcode = editAreaLoader.getValue("tpc03_08_ta01");
    editAreaLoader.setValue("tpc03_09_ta01",inputcode)
    console.log("O seguinte código foi digitado:");
    console.log(inputcode);
}

/* Atividade interativa do slide 48 - Mensagens de Erro (tpc04_06_12)
/  O aluno deve indicar qual a linha e a natureza do erro expostas no 
/  exemplo do slide
*/
let slide48a = "-"
let slide48b = "-"
document.getElementById("tpc04_06_12_btn01_01").onclick = function(){
    document.getElementById("tpc04_06_12_btn01_03").style.color = "white";
    document.getElementById("tpc04_06_12_btn01_02").style.color = "white";
    document.getElementById("tpc04_06_12_btn01_01").style.color = "black";
    
    document.getElementById("tpc04_06_13_btn01_03").style.color = "white";
    document.getElementById("tpc04_06_13_btn01_02").style.color = "white";
    document.getElementById("tpc04_06_13_btn01_01").style.color = "black";

    slide48a = "linha 1"
    console.log("Agora o estudante acredita que o erro está na",slide48a)
}

document.getElementById("tpc04_06_12_btn01_02").onclick = function(){
    document.getElementById("tpc04_06_12_btn01_03").style.color = "white";
    document.getElementById("tpc04_06_12_btn01_01").style.color = "white";
    document.getElementById("tpc04_06_12_btn01_02").style.color = "black";

    document.getElementById("tpc04_06_13_btn01_03").style.color = "white";
    document.getElementById("tpc04_06_13_btn01_01").style.color = "white";
    document.getElementById("tpc04_06_13_btn01_02").style.color = "black";

    slide48a = "linha 2"
    console.log("Agora o estudante acredita que o erro está na",slide48a)
}

document.getElementById("tpc04_06_12_btn01_03").onclick = function(){
    document.getElementById("tpc04_06_12_btn01_01").style.color = "white";
    document.getElementById("tpc04_06_12_btn01_02").style.color = "white";
    document.getElementById("tpc04_06_12_btn01_03").style.color = "black";
    
    document.getElementById("tpc04_06_13_btn01_01").style.color = "white";
    document.getElementById("tpc04_06_13_btn01_02").style.color = "white";
    document.getElementById("tpc04_06_13_btn01_03").style.color = "black";

    slide48a = "linha 3"
    console.log("Agora o estudante acredita que o erro está na",slide48a)
}

document.getElementById("tpc04_06_12_btn02_01").onclick = function(){
    document.getElementById("tpc04_06_12_btn02_03").style.color = "white";
    document.getElementById("tpc04_06_12_btn02_02").style.color = "white";
    document.getElementById("tpc04_06_12_btn02_01").style.color = "black";

    document.getElementById("tpc04_06_13_btn02_03").style.color = "white";
    document.getElementById("tpc04_06_13_btn02_02").style.color = "white";
    document.getElementById("tpc04_06_13_btn02_01").style.color = "black";

    slide48b = "nome"
    console.log("Agora o estudante acredita que a natureza do  erro é de",slide48b)
}

document.getElementById("tpc04_06_12_btn02_02").onclick = function(){
    document.getElementById("tpc04_06_12_btn02_03").style.color = "white";
    document.getElementById("tpc04_06_12_btn02_01").style.color = "white";
    document.getElementById("tpc04_06_12_btn02_02").style.color = "black";
    
    document.getElementById("tpc04_06_13_btn02_03").style.color = "white";
    document.getElementById("tpc04_06_13_btn02_01").style.color = "white";
    document.getElementById("tpc04_06_13_btn02_02").style.color = "black";

    slide48b = "dado"
    console.log("Agora o estudante acredita que a natureza do  erro é de",slide48b)
}

document.getElementById("tpc04_06_12_btn02_03").onclick = function(){
    document.getElementById("tpc04_06_12_btn02_02").style.color = "white";
    document.getElementById("tpc04_06_12_btn02_01").style.color = "white";
    document.getElementById("tpc04_06_12_btn02_03").style.color = "black";

    document.getElementById("tpc04_06_13_btn02_02").style.color = "white";
    document.getElementById("tpc04_06_13_btn02_01").style.color = "white";
    document.getElementById("tpc04_06_13_btn02_03").style.color = "black";

    slide48b = "sintaxe"
    console.log("Agora o estudante acredita que a natureza do  erro é de",slide48b)
}

document.getElementById("tpc03_06_12_btn03").onclick = function(){
    console.log("O estudante acredita que: ")

    console.log("O erro está na", slide48a)
    if ( slide48a == "linha 2") console.log("E está correto");
    else if (slide48a == "-") console.log("E não há o que se afirmar");
    else console.log("E está errado");

    console.log("A naturexa do erro é de", slide48b)
    if ( slide48b == "nome") console.log("E está correto");
    else if (slide48b == "-") console.log("E não há o que se afirmar");
    else console.log("E está errado");
}

/* Atividade interativa do slide 52 - Formato dos Operadores 
/  Aratiméticos (tpc_05_03). Ao clicar nas células da tabela, 
/  a célula correspondente tem seu texto mudado para a cor preta. 
/  O mesmo acontece no slide seguinte onde estão as repostas indicadas 
/  com o fundo verde para as células corretas e vermelho para as erradas
*/
let atv_slide52a = ["-","-","-"];
let atv_slide52q = ["duas vezes a","a elevado ao cubo","raiz quadrada de 5"];
document.getElementById("tpc05_03_btn01_a").onclick = function(){
    document.getElementById("tpc05_03_btn01_a").style.color = "black";
    document.getElementById("tpc05_03_btn01_b").style.color = "white";

    document.getElementById("tpc05_04_btn01_a").style.color = "black";
    document.getElementById("tpc05_04_btn01_b").style.color = "white";

    atv_slide52a[0] = "2a"
    console.log("Sobre o problema, até o momento o estutante acredita que em Python:")
    toLogQuiz(atv_slide52a,atv_slide52q,3)    

}

document.getElementById("tpc05_03_btn01_b").onclick = function(){
    document.getElementById("tpc05_03_btn01_a").style.color = "white";
    document.getElementById("tpc05_03_btn01_b").style.color = "black";

    document.getElementById("tpc05_04_btn01_a").style.color = "white";
    document.getElementById("tpc05_04_btn01_b").style.color = "black";

    atv_slide52a[0] = "2 * a"
    console.log("Sobre o problema, até o momento o estutante acredita que em Python:")
    toLogQuiz(atv_slide52a,atv_slide52q,3)    

}

document.getElementById("tpc05_03_btn02_a").onclick = function(){
    document.getElementById("tpc05_03_btn02_a").style.color = "black";
    document.getElementById("tpc05_03_btn02_b").style.color = "white";

    document.getElementById("tpc05_04_btn02_a").style.color = "black";
    document.getElementById("tpc05_04_btn02_b").style.color = "white";

    atv_slide52a[1] = "a³"
    console.log("Sobre o problema, até o momento o estutante acredita que em Python:")
    toLogQuiz(atv_slide52a,atv_slide52q,3)    

}

document.getElementById("tpc05_03_btn02_b").onclick = function(){
    document.getElementById("tpc05_03_btn02_a").style.color = "white";
    document.getElementById("tpc05_03_btn02_b").style.color = "black";

    document.getElementById("tpc05_04_btn02_a").style.color = "white";
    document.getElementById("tpc05_04_btn02_b").style.color = "black";

    atv_slide52a[1] = "a ** 3"
    console.log("Sobre o problema, até o momento o estutante acredita que em Python:")
    toLogQuiz(atv_slide52a,atv_slide52q,3)    

}

document.getElementById("tpc05_03_btn03_a").onclick = function(){
    document.getElementById("tpc05_03_btn03_a").style.color = "black";
    document.getElementById("tpc05_03_btn03_b").style.color = "white";

    document.getElementById("tpc05_04_btn03_a").style.color = "black";
    document.getElementById("tpc05_04_btn03_b").style.color = "white";

    atv_slide52a[2] = "√5"
    console.log("Sobre o problema, até o momento o estutante acredita que em Python:")
    toLogQuiz(atv_slide52a,atv_slide52q,3)    

}

document.getElementById("tpc05_03_btn03_b").onclick = function(){
    document.getElementById("tpc05_03_btn03_a").style.color = "white";
    document.getElementById("tpc05_03_btn03_b").style.color = "black";

    document.getElementById("tpc05_04_btn03_a").style.color = "white";
    document.getElementById("tpc05_04_btn03_b").style.color = "black";

    atv_slide52a[2] = "5 ** 0.5"
    console.log("Sobre o problema, até o momento o estutante acredita que em Python:")
    toLogQuiz(atv_slide52a,atv_slide52q,3)    

}

document.getElementById("tpc05_03_btn04").onclick = function(){
    console.log("O estudante acredita que, em Python: ")
 
    for(i = 0; i < 3; i ++){
        console.log( atv_slide52q[i],"é",atv_slide52a[i]);
        if ( ((i == 0) && (atv_slide52a[i] == "2 * a"))   ||
             ((i == 1) && (atv_slide52a[i] == "a ** 3"))  ||
             ((i == 2) && (atv_slide52a[i] == "5 ** 0.5")) ){
                console.log("E está correto");
         }
         else if (atv_slide52a[i] == "-"){
             console.log("E não há o que se afirmar");
         }
         else{
             console.log("E está errado");
         }
 
    }
 
}

/* Atividade interativa do slide 54 - Precedência dos Operadores Aritméticos 
/  (tpc05_05). Ao clicar em verificar, uma mensagem aparece informando o aluno
/  sobre a precedencia da operação. 
*/
document.getElementById("tpc05_05_btn01").onclick = function(){
    var op1 = Number(document.getElementById("tpc05_05_ipt01").value.trim());
    var op2 = Number(document.getElementById("tpc05_05_ipt03").value.trim());
    var op3 = Number(document.getElementById("tpc05_05_ipt05").value.trim());
    var op4 = Number(document.getElementById("tpc05_05_ipt07").value.trim());

    console.log("O estudande acredita que:");

    console.log("O resultado da operação 4 * 3 ** 2 é",op1);
    if(op1 == 36){
        document.getElementById("tpc05_05_ipt01").style.backgroundColor = "yellowgreen";
        document.getElementById("tpc05_05_ipt02").innerHTML = "A potência tem maior precedência";
        console.log("E está correto");
    }else{
        document.getElementById("tpc05_05_ipt01").style.backgroundColor = "tomato";
        document.getElementById("tpc05_05_ipt02").innerHTML = "Observe a maior precedência";
        console.log("E não está correto");
    }

    console.log("O resultado da operação (4 * 3) ** 2 é",op2);
    if(op2 == 144){
        document.getElementById("tpc05_05_ipt03").style.backgroundColor = "yellowgreen";
        document.getElementById("tpc05_05_ipt04").innerHTML = "Os parênteses têm maior precedência";
        console.log("E está correto");
    }else{
        document.getElementById("tpc05_05_ipt03").style.backgroundColor = "tomato";
        document.getElementById("tpc05_05_ipt04").innerHTML = "Observe a maior precedência";
        console.log("E não está correto");
    }

    console.log("O resultado da operação 4 * 5 % 3 é",op3);
    if(op3 == 2){
        document.getElementById("tpc05_05_ipt05").style.backgroundColor = "yellowgreen";
        document.getElementById("tpc05_05_ipt06").innerHTML = "A multiplicação tem maior precedência";
        console.log("E está correto");
    }else{
        document.getElementById("tpc05_05_ipt05").style.backgroundColor = "tomato";
        document.getElementById("tpc05_05_ipt06").innerHTML = "Observe a maior precedência";
        console.log("E não está correto");
    }

    console.log("O resultado da operação 4 * (5 % 3) é",op4);
    if(op4 == 8){
        document.getElementById("tpc05_05_ipt07").style.backgroundColor = "yellowgreen";
        document.getElementById("tpc05_05_ipt08").innerHTML = "Os parênteses têm maior precedência";
        console.log("E está correto");
    }else{
        document.getElementById("tpc05_05_ipt07").style.backgroundColor = "tomato";
        document.getElementById("tpc05_05_ipt08").innerHTML = "Observe a maior precedência";
        console.log("E não está correto");
    }


}

/* Atividade interativa do slide 68 - Boas Práticas de Programação (tpc07_02).
/  Ao clicar em uma das caixas, sua borda fica preta. O mesmo acontece no slide 
/  seguinte onde a caixa com a resposta correta tem fundo verde e a errada tem 
/  fundo vermelho.
*/
let atv_slide68a = ["-"];
let atv_slide68q = ["melhor comentário"];
document.getElementById("tpc07_02_btn01").onclick = function(){
    document.getElementById("tpc07_02_btn01").style.borderColor = "black";
    document.getElementById("tpc07_02_btn02").style.borderColor = "orange";

    document.getElementById("tpc07_03_btn01").style.border = "black solid 3px";
    document.getElementById("tpc07_03_btn02").style.border = "none";
    atv_slide68a[0] = "# Multiplicação de b por h:"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide68a,atv_slide68q,1)    
}

document.getElementById("tpc07_02_btn02").onclick = function(){
    document.getElementById("tpc07_02_btn02").style.borderColor = "black";
    document.getElementById("tpc07_02_btn01").style.borderColor = "orange";

    document.getElementById("tpc07_03_btn02").style.border = "black solid 3px";
    document.getElementById("tpc07_03_btn01").style.border = "none";

    atv_slide68a[0] = "# Calculo da area do retangulo:"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide68a,atv_slide68q,1)
}

document.getElementById("tpc07_02_btn03").onclick = function(){
    console.log("O estudante acredita que, em Python: ")
    toLogQuiz(atv_slide68a,atv_slide68q,1) 
    if (atv_slide68a[0] == "# Calculo da area do retangulo:"){
        console.log("E está correto");
    }
    else if (atv_slide68a[0] == "-"){
        console.log("E não há o que se afirmar");
    }
    else{
        console.log("E está errado");
    }
 
}

/* Atividade interativa do slide 70 - Boas Práticas de Programação (tpc07_04).
/  Ao clicar em uma das caixas, sua borda fica preta. O mesmo acontece no slide 
/  seguinte onde a caixa com a resposta correta tem fundo verde e a errada tem 
/  fundo vermelho.
*/
let atv_slide70a = ["-"];
let atv_slide70q = ["melhor declaração de variáveis"];
document.getElementById("tpc07_04_btn01").onclick = function(){
    document.getElementById("tpc07_04_btn01").style.borderColor = "black";
    document.getElementById("tpc07_04_btn02").style.borderColor = "orange";

    document.getElementById("tpc07_05_btn01").style.border = "black solid 3px";
    document.getElementById("tpc07_05_btn02").style.border = "none";

    atv_slide70a[0] = "\nx = 1.3\n\nraio = 1.3\nRaio = 4.6\nRAIO = 7.9\nárea = 1.3\n"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide70a,atv_slide70q,1)
}

document.getElementById("tpc07_04_btn02").onclick = function(){
    document.getElementById("tpc07_04_btn02").style.borderColor = "black";
    document.getElementById("tpc07_04_btn01").style.borderColor = "orange";

    document.getElementById("tpc07_05_btn02").style.border = "black solid 3px";
    document.getElementById("tpc07_05_btn01").style.border = "none";

    atv_slide70a[0] = "\nraio = 1.3\n\nraio_interno = 1.3\nraio_meio = 4.6\nraio_externo = 7.9\narea = 1.3\n"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide70a,atv_slide70q,1)
}

document.getElementById("tpc07_04_btn03").onclick = function(){
    console.log("O estudante acredita que, em Python: ")
    toLogQuiz(atv_slide70a,atv_slide70q,1) 
    if (atv_slide70a[0] == "\nraio = 1.3\n\nraio_interno = 1.3\nraio_meio = 4.6\nraio_externo = 7.9\narea = 1.3\n"){
        console.log("E está correto");
    }
    else if (atv_slide70a[0] == "-"){
        console.log("E não há o que se afirmar");
    }
    else{
        console.log("E está errado");
    }
 
}

/* Atividade interativa do slide 72 - Boas Práticas de Programação com Expressões
/ (tpc07_06). Ao clicar em uma das caixas, sua borda fica preta. O mesmo acontece 
/  no slide seguinte onde a caixa com a resposta correta tem fundo verde e a errada
/  tem fundo vermelho.
*/
let atv_slide72a = ["-"];
let atv_slide72q = ["melhor expressão"];
document.getElementById("tpc07_06_btn01").onclick = function(){
    document.getElementById("tpc07_06_btn01").style.borderColor = "black";
    document.getElementById("tpc07_06_btn02").style.borderColor = "orange";

    document.getElementById("tpc07_07_btn01").style.border = "black solid 3px";
    document.getElementById("tpc07_07_btn02").style.border = "none";

    atv_slide72a[0] = "B=(A**2+B**2)**0.5"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide72a,atv_slide72q,1)
}

document.getElementById("tpc07_06_btn02").onclick = function(){
    document.getElementById("tpc07_06_btn02").style.borderColor = "black";
    document.getElementById("tpc07_06_btn01").style.borderColor = "orange";

    document.getElementById("tpc07_07_btn02").style.border = "black solid 3px";
    document.getElementById("tpc07_07_btn01").style.border = "none";

    atv_slide72a[0] = "B = ((A ** 2) + (B ** 2)) ** 0.5"
    console.log("Sobre o problema, até o momento o estutante acredita que:")
    toLogQuiz(atv_slide72a,atv_slide72q,1)

}

document.getElementById("tpc07_06_btn03").onclick = function(){
    console.log("O estudante acredita que, em Python: ")
    toLogQuiz(atv_slide72a,atv_slide72q,1) 
    if (atv_slide72a[0] == "B = ((A ** 2) + (B ** 2)) ** 0.5"){
        console.log("E está correto");
    }
    else if (atv_slide72a[0] == "-"){
        console.log("E não há o que se afirmar");
    }
    else{
        console.log("E está errado");
    }
 
}