//função de esculta
Reveal.addEventListener( 'ready', function( event ) {
    console.log("----------------------------------------")
    var hs = event.indexh;
    var vs = event.indexv;
    var cs = event.currentSlide;
    console.log("O estudante está no slide de indice "+ (hs+1) +"."+ (vs+1) +"\nId: "+ cs.id +"\nTítulo: "+ cs.children["istitle"].innerHTML.trim());
} );
Reveal.addEventListener( 'slidechanged', function( event ) {
    console.log("----------------------------------------")
    var hs = event.indexh;
    var vs = event.indexv;
    var cs = event.currentSlide;
    console.log("O estudante está no slide de indice "+ (hs+1) +"."+ (vs+1) +"\nId: "+ cs.id +"\nTítulo: "+ cs.children["istitle"].innerHTML.trim());
} );
//função de mudança do cotrole do slide
var ctr = false
document.getElementById("home_01_bt02").onclick = function(){
    ctr = !ctr;
    Reveal.configure({ 
        controls: ctr,
        //keyboard: ctr,
     });

    if (ctr) {
        document.getElementById("home_01_bt02").innerHTML = "<div class=\"buttonipcback\">Na verdade, quero os controles desativados</div>"
    }else{
        document.getElementById("home_01_bt02").innerHTML = "<div class=\"buttonipcback\">Já vi essa aula antes, quero os controles ativados</div>"
    }
    
}

//Código do Exemplo A - Meia Entrada
var stdtyped = "O estudade digitou o seguinte código para a resolução";
var exeA = "do Exemplo da Meia Entrada"

document.getElementById("tpc01_12_bt01").onclick = function(){
    var inputcode = editAreaLoader.getValue("tpc01_12_ta01");
    var outputcode = "#seu código\n";    
    outputcode = outputcode + inputcode;
    editAreaLoader.setValue("tpc01_12_01_ta01",outputcode);

    console.log(stdtyped+" "+exeA);
    console.log(inputcode);
    
}

//Código do Exemplo B - Equação do Segundo Grau
var exeB = "do Exemplo da Equação do Segundo Grau"

document.getElementById("tpc01_13_bt01").onclick = function(){
    var inputcode = editAreaLoader.getValue("tpc01_13_ta01");
    var outputcode = "#seu código\n";
    outputcode = outputcode + inputcode;
    editAreaLoader.setValue("tpc01_13_01_ta01",outputcode);

    console.log(stdtyped+" "+exeAB);
    console.log(inputcode);
}

//Atividade sobre Operadores de Comparação vs Aritméticos
var stdblv = "O estudade acredita que";
var rarit = "o resultado de uma operação ARITMÉTICA entre dois números";
var rcont = "o resultado de uma operação CONDICIONAL entre dois números";
var rnum = "resulta em um NÚMERO";
var rtorf = "resulta em um VERDADEIRO OU FALSO";

document.getElementById("tpc02_06_bt01").onclick = function(){
    document.getElementById("tpc02_06_bt01").style.color = "black";
    document.getElementById("tpc02_06_bt02").style.color = "white";
    document.getElementById("tpc02_07_bt01").style.color = "black";
    document.getElementById("tpc02_07_bt02").style.color = "white";

    console.log(stdblv+" "+rarit+" "+rnum);
}
document.getElementById("tpc02_06_bt02").onclick = function(){
    document.getElementById("tpc02_06_bt02").style.color = "black";
    document.getElementById("tpc02_06_bt01").style.color = "white";
    document.getElementById("tpc02_07_bt02").style.color = "black";
    document.getElementById("tpc02_07_bt01").style.color = "white";

    console.log(stdblv+" "+rarit+" "+rtorf);
}
document.getElementById("tpc02_06_bt03").onclick = function(){
    document.getElementById("tpc02_06_bt03").style.color = "black";
    document.getElementById("tpc02_06_bt04").style.color = "white";
    document.getElementById("tpc02_07_bt03").style.color = "black";
    document.getElementById("tpc02_07_bt04").style.color = "white";

    console.log(stdblv+" "+rcont+" "+rnum);
}
document.getElementById("tpc02_06_bt04").onclick = function(){
    document.getElementById("tpc02_06_bt04").style.color = "black";
    document.getElementById("tpc02_06_bt03").style.color = "white";
    document.getElementById("tpc02_07_bt04").style.color = "black";
    document.getElementById("tpc02_07_bt03").style.color = "white";

    console.log(stdblv+" "+rcont+" "+rtorf);
}

//Atividade sobre Exercitando avaliação de condições

op1 = "x + y > 6";	
op2 = "x - 1 + y == 4";	
op3 = "x ** y == x * y";	
op4 = "y - 5 = z - 9";	
op5 = "1 - z =! 4";
op6 = "x + 8 % z >= y * 6 - 15";

rtrue = "resulta em FALSO";
rfalse = "resulta em VERDADEIRO";
rmfor = "é mal formada"

document.getElementById("tpc02_09_bt01_01").onclick = function(){
    document.getElementById("tpc02_09_bt01_01").innerHTML = " x ";
    document.getElementById("tpc02_09_bt01_02").innerHTML= " - ";
    document.getElementById("tpc02_09_bt01_03").innerHTML = " - ";

    document.getElementById("tpc02_10_bt01_01").innerHTML = " x ";
    document.getElementById("tpc02_10_bt01_02").innerHTML= " - ";
    document.getElementById("tpc02_10_bt01_03").innerHTML = " - ";

    console.log(stdblv+" "+op1+" "+rtrue);
}
document.getElementById("tpc02_09_bt01_02").onclick = function(){
    document.getElementById("tpc02_09_bt01_01").innerHTML = " - ";
    document.getElementById("tpc02_09_bt01_02").innerHTML= " x ";
    document.getElementById("tpc02_09_bt01_03").innerHTML = " - ";

    document.getElementById("tpc02_10_bt01_01").innerHTML = " - ";
    document.getElementById("tpc02_10_bt01_02").innerHTML= " x ";
    document.getElementById("tpc02_10_bt01_03").innerHTML = " - ";

    console.log(stdblv+" "+op1+" "+rfalse);
}
document.getElementById("tpc02_09_bt01_03").onclick = function(){
    document.getElementById("tpc02_09_bt01_01").innerHTML = " - ";
    document.getElementById("tpc02_09_bt01_02").innerHTML= " - ";
    document.getElementById("tpc02_09_bt01_03").innerHTML = " x ";

    document.getElementById("tpc02_10_bt01_01").innerHTML = " - ";
    document.getElementById("tpc02_10_bt01_02").innerHTML= " - ";
    document.getElementById("tpc02_10_bt01_03").innerHTML = " x ";

    console.log(stdblv+" "+op1+" "+rmfor);
}
document.getElementById("tpc02_09_bt02_01").onclick = function(){
    document.getElementById("tpc02_09_bt02_01").innerHTML = " x ";
    document.getElementById("tpc02_09_bt02_02").innerHTML= " - ";
    document.getElementById("tpc02_09_bt02_03").innerHTML = " - ";

    document.getElementById("tpc02_10_bt02_01").innerHTML = " x ";
    document.getElementById("tpc02_10_bt02_02").innerHTML= " - ";
    document.getElementById("tpc02_10_bt02_03").innerHTML = " - ";

    console.log(stdblv+" "+op2+" "+rtrue);
}
document.getElementById("tpc02_09_bt02_02").onclick = function(){
    document.getElementById("tpc02_09_bt02_01").innerHTML = " - ";
    document.getElementById("tpc02_09_bt02_02").innerHTML= " x ";
    document.getElementById("tpc02_09_bt02_03").innerHTML = " - ";

    document.getElementById("tpc02_10_bt02_01").innerHTML = " - ";
    document.getElementById("tpc02_10_bt02_02").innerHTML= " x ";
    document.getElementById("tpc02_10_bt02_03").innerHTML = " - ";

    console.log(stdblv+" "+op2+" "+rfalse);
}
document.getElementById("tpc02_09_bt02_03").onclick = function(){
    document.getElementById("tpc02_09_bt02_01").innerHTML = " - ";
    document.getElementById("tpc02_09_bt02_02").innerHTML= " - ";
    document.getElementById("tpc02_09_bt02_03").innerHTML = " x ";

    document.getElementById("tpc02_10_bt02_01").innerHTML = " - ";
    document.getElementById("tpc02_10_bt02_02").innerHTML= " - ";
    document.getElementById("tpc02_10_bt02_03").innerHTML = " x ";

    console.log(stdblv+" "+op2+" "+rmfor);
}

document.getElementById("tpc02_09_bt03_01").onclick = function(){
    document.getElementById("tpc02_09_bt03_01").innerHTML = " x ";
    document.getElementById("tpc02_09_bt03_02").innerHTML= " - ";
    document.getElementById("tpc02_09_bt03_03").innerHTML = " - ";

    document.getElementById("tpc02_10_bt03_01").innerHTML = " x ";
    document.getElementById("tpc02_10_bt03_02").innerHTML= " - ";
    document.getElementById("tpc02_10_bt03_03").innerHTML = " - ";

    console.log(stdblv+" "+op3+" "+rtrue);
}
document.getElementById("tpc02_09_bt03_02").onclick = function(){
    document.getElementById("tpc02_09_bt03_01").innerHTML = " - ";
    document.getElementById("tpc02_09_bt03_02").innerHTML= " x ";
    document.getElementById("tpc02_09_bt03_03").innerHTML = " - ";

    document.getElementById("tpc02_10_bt03_01").innerHTML = " - ";
    document.getElementById("tpc02_10_bt03_02").innerHTML= " x ";
    document.getElementById("tpc02_10_bt03_03").innerHTML = " - ";

    console.log(stdblv+" "+op3+" "+rfalse);
}
document.getElementById("tpc02_09_bt03_03").onclick = function(){
    document.getElementById("tpc02_09_bt03_01").innerHTML = " - ";
    document.getElementById("tpc02_09_bt03_02").innerHTML= " - ";
    document.getElementById("tpc02_09_bt03_03").innerHTML = " x ";

    document.getElementById("tpc02_10_bt03_01").innerHTML = " - ";
    document.getElementById("tpc02_10_bt03_02").innerHTML= " - ";
    document.getElementById("tpc02_10_bt03_03").innerHTML = " x ";

    console.log(stdblv+" "+op3+" "+rmfor);
}

document.getElementById("tpc02_09_bt04_01").onclick = function(){
    document.getElementById("tpc02_09_bt04_01").innerHTML = " x ";
    document.getElementById("tpc02_09_bt04_02").innerHTML= " - ";
    document.getElementById("tpc02_09_bt04_03").innerHTML = " - ";

    document.getElementById("tpc02_10_bt04_01").innerHTML = " x ";
    document.getElementById("tpc02_10_bt04_02").innerHTML= " - ";
    document.getElementById("tpc02_10_bt04_03").innerHTML = " - ";

    console.log(stdblv+" "+op4+" "+rtrue);
}
document.getElementById("tpc02_09_bt04_02").onclick = function(){
    document.getElementById("tpc02_09_bt04_01").innerHTML = " - ";
    document.getElementById("tpc02_09_bt04_02").innerHTML= " x ";
    document.getElementById("tpc02_09_bt04_03").innerHTML = " - ";

    document.getElementById("tpc02_10_bt04_01").innerHTML = " - ";
    document.getElementById("tpc02_10_bt04_02").innerHTML= " x ";
    document.getElementById("tpc02_10_bt04_03").innerHTML = " - ";

    console.log(stdblv+" "+op4+" "+rfalse);
}
document.getElementById("tpc02_09_bt04_03").onclick = function(){
    document.getElementById("tpc02_09_bt04_01").innerHTML = " - ";
    document.getElementById("tpc02_09_bt04_02").innerHTML= " - ";
    document.getElementById("tpc02_09_bt04_03").innerHTML = " x ";

    document.getElementById("tpc02_10_bt04_01").innerHTML = " - ";
    document.getElementById("tpc02_10_bt04_02").innerHTML= " - ";
    document.getElementById("tpc02_10_bt04_03").innerHTML = " x ";

    console.log(stdblv+" "+op4+" "+rmfor);
}

document.getElementById("tpc02_09_bt05_01").onclick = function(){
    document.getElementById("tpc02_09_bt05_01").innerHTML = " x ";
    document.getElementById("tpc02_09_bt05_02").innerHTML= " - ";
    document.getElementById("tpc02_09_bt05_03").innerHTML = " - ";

    document.getElementById("tpc02_10_bt05_01").innerHTML = " x ";
    document.getElementById("tpc02_10_bt05_02").innerHTML= " - ";
    document.getElementById("tpc02_10_bt05_03").innerHTML = " - ";

    console.log(stdblv+" "+op5+" "+rtrue);
}
document.getElementById("tpc02_09_bt05_02").onclick = function(){
    document.getElementById("tpc02_09_bt05_01").innerHTML = " - ";
    document.getElementById("tpc02_09_bt05_02").innerHTML= " x ";
    document.getElementById("tpc02_09_bt05_03").innerHTML = " - ";

    document.getElementById("tpc02_10_bt05_01").innerHTML = " - ";
    document.getElementById("tpc02_10_bt05_02").innerHTML= " x ";
    document.getElementById("tpc02_10_bt05_03").innerHTML = " - ";

    console.log(stdblv+" "+op5+" "+rfalse);
}
document.getElementById("tpc02_09_bt05_03").onclick = function(){
    document.getElementById("tpc02_09_bt05_01").innerHTML = " - ";
    document.getElementById("tpc02_09_bt05_02").innerHTML= " - ";
    document.getElementById("tpc02_09_bt05_03").innerHTML = " x ";

    document.getElementById("tpc02_10_bt05_01").innerHTML = " - ";
    document.getElementById("tpc02_10_bt05_02").innerHTML= " - ";
    document.getElementById("tpc02_10_bt05_03").innerHTML = " x ";

    console.log(stdblv+" "+op5+" "+rmfor);
}

document.getElementById("tpc02_09_bt06_01").onclick = function(){
    document.getElementById("tpc02_09_bt06_01").innerHTML = " x ";
    document.getElementById("tpc02_09_bt06_02").innerHTML= " - ";
    document.getElementById("tpc02_09_bt06_03").innerHTML = " - ";

    document.getElementById("tpc02_10_bt06_01").innerHTML = " x ";
    document.getElementById("tpc02_10_bt06_02").innerHTML= " - ";
    document.getElementById("tpc02_10_bt06_03").innerHTML = " - ";

    console.log(stdblv+" "+op6+" "+rtrue);
}
document.getElementById("tpc02_09_bt06_02").onclick = function(){
    document.getElementById("tpc02_09_bt06_01").innerHTML = " - ";
    document.getElementById("tpc02_09_bt06_02").innerHTML= " x ";
    document.getElementById("tpc02_09_bt06_03").innerHTML = " - ";

    document.getElementById("tpc02_10_bt06_01").innerHTML = " - ";
    document.getElementById("tpc02_10_bt06_02").innerHTML= " x ";
    document.getElementById("tpc02_10_bt06_03").innerHTML = " - ";

    console.log(stdblv+" "+op6+" "+rfalse);
}
document.getElementById("tpc02_09_bt06_03").onclick = function(){
    document.getElementById("tpc02_09_bt06_01").innerHTML = " - ";
    document.getElementById("tpc02_09_bt06_02").innerHTML= " - ";
    document.getElementById("tpc02_09_bt06_03").innerHTML = " x ";

    document.getElementById("tpc02_10_bt06_01").innerHTML = " - ";
    document.getElementById("tpc02_10_bt06_02").innerHTML= " - ";
    document.getElementById("tpc02_10_bt06_03").innerHTML = " x ";

    console.log(stdblv+" "+op6+" "+rmfor);
}

//Código do Problema 1 - Multa de Transito
var p1 = "do Problema da Multa de Transito"

document.getElementById("tpc03_01_01_bt01").onclick = function(){
    var inputcode = editAreaLoader.getValue("tpc03_01_01_ta01");
    var outputcode = "#seu código\n";
    outputcode = outputcode + inputcode;
    editAreaLoader.setValue("tpc03_01_02_ta01",outputcode)

    console.log(stdtyped+" "+p1);
    console.log(inputcode);
}

//Código do Problema 2 - Ataque do Monstro Esqueleto
var p2 = "do Problema do Ataque do Monstro Esqueleto"

document.getElementById("tpc03_02_01_bt01").onclick = function(){
    var inputcode = editAreaLoader.getValue("tpc03_02_01_ta01");
    var outputcode = "#seu código\n";
    outputcode = outputcode + inputcode;
    editAreaLoader.setValue("tpc03_02_02_ta01",outputcode)

    console.log(stdtyped+" "+p2);
    console.log(inputcode);
}

//Código do Problema 3 - Preço do Leite
var p3 = "do Problema do Preço do Leite"

document.getElementById("tpc03_03_01_bt01").onclick = function(){
    var inputcode = editAreaLoader.getValue("tpc03_03_01_ta01");
    var outputcode = "#seu código\n";
    outputcode = outputcode + inputcode;
    editAreaLoader.setValue("tpc03_03_02_ta01",outputcode)

    console.log(stdtyped+" "+p3);
    console.log(inputcode);
}

//Código do Problema 4 - A Senha Secreta
var p4 = "do Problema da Senha Secreta"

document.getElementById("tpc03_04_01_bt01").onclick = function(){
    var inputcode = editAreaLoader.getValue("tpc03_04_01_ta01");
    var outputcode = "#seu código\n";
    outputcode = outputcode + inputcode;
    editAreaLoader.setValue("tpc03_04_02_ta01",outputcode)

    console.log(stdtyped+" "+p4);
    console.log(inputcode)
}

//Código do Problema 5 - Quanto Tempo Durou?
var p5 = "do Problema de Quanto Tempo Durou"

document.getElementById("tpc03_05_01_bt01").onclick = function(){
    var inputcode = editAreaLoader.getValue("tpc03_05_01_ta01");
    var outputcode = "#seu código\n";
    outputcode = outputcode + inputcode;
    editAreaLoader.setValue("tpc03_05_02_ta01",outputcode)

    console.log(stdtyped+" "+p4);
    console.log(inputcode)
}