(function () {

    function ajax(log){
        var data = new FormData();
        data.append("data" , log);

        var xhr = new XMLHttpRequest();
        xhr.open( 'post', 'public/upload/ajax.php', true );
        xhr.send(data);
    }
    
    function esteSlide(hs,vs,cs){
        let thislog =   "----------------------------------------\n" + 
                        Date() +"\n"+
                        "O estudante está no slide de indice "+ (hs+1) +"."+ (vs+1) +
                        "\nId: "+ cs.id +"\nTítulo: "+ cs.children["istitle"].innerText.trim()+"\n";
        console.log(thislog);
        ajax(thislog);
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
       ajax(`${mensagem}\n`);

        //TOPICO 1 SUBTOPICO 3 Variáveis da Memória do Computador - Atividade
        if(elemento.id == "bt_topico_1_3"){
           let vida_4 = parseInt(document.getElementById("vida_4").value.trim());
           let vida_5 = parseInt(document.getElementById("vida_5").value.trim());
           let vida_6 = parseInt(document.getElementById("vida_6").value.trim());
           let vida_7 = parseInt(document.getElementById("vida_7").value.trim());
           
           let dano_4 = parseInt(document.getElementById("dano_4").value.trim());
           let dano_5 = parseInt(document.getElementById("dano_5").value.trim());
           let dano_6 = parseInt(document.getElementById("dano_6").value.trim());
           let dano_7 = parseInt(document.getElementById("dano_7").value.trim());

           if(vida_4 == 100){
            document.getElementById("vida_4").style.backgroundColor = "green";
           }else{
            document.getElementById("vida_4").style.backgroundColor = "red";
           }

           if(vida_5 == 80){
            document.getElementById("vida_5").style.backgroundColor = "green";
           }else{
            document.getElementById("vida_5").style.backgroundColor = "red";
           }

           if(vida_6 == 80){
            document.getElementById("vida_6").style.backgroundColor = "green";
           }else{
            document.getElementById("vida_6").style.backgroundColor = "red";
           }

           if(vida_7 == 50){
            document.getElementById("vida_7").style.backgroundColor = "green";
           }else{
            document.getElementById("vida_7").style.backgroundColor = "red";
           }

           if(dano_4 == 20){
            document.getElementById("dano_4").style.backgroundColor = "green";
           }else{
            document.getElementById("dano_4").style.backgroundColor = "red";
           }

           if(dano_5 == 20){
            document.getElementById("dano_5").style.backgroundColor = "green";
           }else{
            document.getElementById("dano_5").style.backgroundColor = "red";
           }

           if(dano_6 == 30){
            document.getElementById("dano_6").style.backgroundColor = "green";
           }else{
            document.getElementById("dano_6").style.backgroundColor = "red";
           }

           if(dano_7 == 30){
            document.getElementById("dano_7").style.backgroundColor = "green";
           }else{
            document.getElementById("dano_7").style.backgroundColor = "red";
           }

           console.log("Linha 4 | vida:"+vida_4+"| dano:"+dano_4+"\n"+
           "Linha 5 | vida:"+vida_5+"| dano:"+dano_5+"\n"+
           "Linha 6 | vida:"+vida_6+"| dano:"+dano_6+"\n"+
           "Linha 7 | vida:"+vida_7+"| dano:"+dano_7+"\n");
           ajax(`Linha 4 | vida: ${vida_4}| dano: ${dano_4}\n
           Linha 5 | vida: ${vida_5}| dano: ${dano_5}\n
           Linha 6 | vida: ${vida_6}| dano: ${dano_6}\n
           Linha 7 | vida: ${vida_7}| dano: ${dano_7}\n`
            );
        }

        //TOPICO 1 SUBTOPICO 4 Regras para criar um identificador - Atividade 1
        if(elemento.id == "bt_topico_1_4_b"){
           let i_q = document.getElementById("identificador_q").value.trim();
           let resultado, cor;

           if(  i_q == "and" || i_q == "as" || i_q == "assert" ||
                i_q == "break" ||i_q == "class" || i_q == "continue" ||
                i_q == "def" || i_q == "del" || i_q == "elif" ||
                i_q == "else" || i_q == "except" || i_q == "False" || 
                i_q == "finally" || i_q == "for" || i_q == "from" || 
                i_q == "globa" || i_q == "if" || i_q == "import" ||
                i_q == "in" || i_q == "is" || i_q == "lambda" ||  
                i_q == "None" || i_q == "nonlocal" || i_q == "not" ||
                i_q == "or" || i_q == "pass" || i_q == "raise" ||  
                i_q == "return" || i_q == "True" || i_q == "try" ||
                i_q == "while" || i_q == "with" || i_q == "yield"){

                resultado = "O identificador tem o mesmo nome que uma palavra reservada";
                cor = "red";
            
            }else if(   i_q.charAt(0) == "_" || 
                        i_q.charAt(0) == "a" || i_q.charAt(0) == "A" ||
                        i_q.charAt(0) == "b" || i_q.charAt(0) == "B" ||
                        i_q.charAt(0) == "c" || i_q.charAt(0) == "C" ||
                        i_q.charAt(0) == "d" || i_q.charAt(0) == "D" ||
                        i_q.charAt(0) == "e" || i_q.charAt(0) == "E" ||
                        i_q.charAt(0) == "f" || i_q.charAt(0) == "F" ||
                        i_q.charAt(0) == "g" || i_q.charAt(0) == "G" ||
                        i_q.charAt(0) == "h" || i_q.charAt(0) == "H" ||
                        i_q.charAt(0) == "i" || i_q.charAt(0) == "I" ||
                        i_q.charAt(0) == "j" || i_q.charAt(0) == "J" ||
                        i_q.charAt(0) == "k" || i_q.charAt(0) == "K" ||
                        i_q.charAt(0) == "l" || i_q.charAt(0) == "L" ||
                        i_q.charAt(0) == "m" || i_q.charAt(0) == "M" ||
                        i_q.charAt(0) == "n" || i_q.charAt(0) == "N" ||
                        i_q.charAt(0) == "o" || i_q.charAt(0) == "O" ||
                        i_q.charAt(0) == "p" || i_q.charAt(0) == "P" ||
                        i_q.charAt(0) == "q" || i_q.charAt(0) == "Q" ||
                        i_q.charAt(0) == "r" || i_q.charAt(0) == "R" ||
                        i_q.charAt(0) == "s" || i_q.charAt(0) == "S" ||
                        i_q.charAt(0) == "t" || i_q.charAt(0) == "T" ||
                        i_q.charAt(0) == "u" || i_q.charAt(0) == "U" ||
                        i_q.charAt(0) == "v" || i_q.charAt(0) == "V" ||
                        i_q.charAt(0) == "x" || i_q.charAt(0) == "X" ||
                        i_q.charAt(0) == "w" || i_q.charAt(0) == "W" ||
                        i_q.charAt(0) == "y" || i_q.charAt(0) == "Y" ||
                        i_q.charAt(0) == "z" || i_q.charAt(0) == "Z" ){

                    resultado = "O identificador está conforme as regras";
                    cor = "green";

                    for(i = 1; i < i_q.length-1; i++){
                        if (i_q.charAt(i) != "_" && 
                            i_q.charAt(i) != "a" && i_q.charAt(i) != "A" &&
                            i_q.charAt(i) != "b" && i_q.charAt(i) != "B" &&
                            i_q.charAt(i) != "c" && i_q.charAt(i) != "C" &&
                            i_q.charAt(i) != "d" && i_q.charAt(i) != "D" &&
                            i_q.charAt(i) != "e" && i_q.charAt(i) != "E" &&
                            i_q.charAt(i) != "f" && i_q.charAt(i) != "F" &&
                            i_q.charAt(i) != "g" && i_q.charAt(i) != "G" &&
                            i_q.charAt(i) != "h" && i_q.charAt(i) != "H" &&
                            i_q.charAt(i) != "i" && i_q.charAt(i) != "I" &&
                            i_q.charAt(i) != "j" && i_q.charAt(i) != "J" &&
                            i_q.charAt(i) != "k" && i_q.charAt(i) != "K" &&
                            i_q.charAt(i) != "l" && i_q.charAt(i) != "L" &&
                            i_q.charAt(i) != "m" && i_q.charAt(i) != "M" &&
                            i_q.charAt(i) != "n" && i_q.charAt(i) != "N" &&
                            i_q.charAt(i) != "o" && i_q.charAt(i) != "O" &&
                            i_q.charAt(i) != "p" && i_q.charAt(i) != "P" &&
                            i_q.charAt(i) != "q" && i_q.charAt(i) != "Q" &&
                            i_q.charAt(i) != "r" && i_q.charAt(i) != "R" &&
                            i_q.charAt(i) != "s" && i_q.charAt(i) != "S" &&
                            i_q.charAt(i) != "t" && i_q.charAt(i) != "T" &&
                            i_q.charAt(i) != "u" && i_q.charAt(i) != "U" &&
                            i_q.charAt(i) != "v" && i_q.charAt(i) != "V" &&
                            i_q.charAt(i) != "x" && i_q.charAt(i) != "X" &&
                            i_q.charAt(i) != "w" && i_q.charAt(i) != "W" &&
                            i_q.charAt(i) != "y" && i_q.charAt(i) != "Y" &&
                            i_q.charAt(i) != "z" && i_q.charAt(i) != "Z" &&
                            i_q.charAt(i) != "1" && i_q.charAt(i) != "6" &&
                            i_q.charAt(i) != "2" && i_q.charAt(i) != "7" &&
                            i_q.charAt(i) != "3" && i_q.charAt(i) != "8" &&
                            i_q.charAt(i) != "4" && i_q.charAt(i) != "9" &&
                            i_q.charAt(i) != "5" && i_q.charAt(i) != "0" ){

                                resultado = "O "+(i+1)+"o caracter do identificador apresenta algum erro";
                                cor = "red";
                                i = i_q.length-1;
                        }

                    }
            }
            else if(i_q.length > 0){ 
                resultado = "O inicio identificador apresenta algum erro";
                cor = "red";
            }else{
                resultado = "Preencha o campo acima com um nome de identificador qualquer";
                cor = "red";
            }

            document.getElementById("identificador_r").innerHTML = resultado;
            document.getElementById("identificador_q").style.backgroundColor = cor;

        }

        //TOPICO 1 SUBTOPICO 4 Regras para criar um identificador - Atividade 1
        if(elemento.id == "identificador_1_v_q"){
           elemento.style.borderColor = "black";
           document.getElementById("identificador_1_f_q").style.borderColor = "orangered"

           document.getElementById("identificador_1_v_r").style.borderColor = "black"
           document.getElementById("identificador_1_f_r").style.borderColor = "orangered"
        }
        if(elemento.id == "identificador_2_v_q"){
            elemento.style.borderColor = "black";
            document.getElementById("identificador_2_f_q").style.borderColor = "orangered"

            document.getElementById("identificador_2_v_r").style.borderColor = "black"
            document.getElementById("identificador_2_f_r").style.borderColor = "orangered"
        }
        if(elemento.id == "identificador_3_v_q"){
            elemento.style.borderColor = "black";
            document.getElementById("identificador_3_f_q").style.borderColor = "orangered"

            document.getElementById("identificador_3_v_r").style.borderColor = "black"
            document.getElementById("identificador_3_f_r").style.borderColor = "orangered"
        }
        if(elemento.id == "identificador_4_v_q"){
            elemento.style.borderColor = "black";
            document.getElementById("identificador_4_f_q").style.borderColor = "orangered"
    
            document.getElementById("identificador_4_v_r").style.borderColor = "black"
            document.getElementById("identificador_4_f_r").style.borderColor = "orangered"
        }
        if(elemento.id == "identificador_5_v_q"){
            elemento.style.borderColor = "black";
            document.getElementById("identificador_5_f_q").style.borderColor = "orangered"
    
            document.getElementById("identificador_5_v_r").style.borderColor = "black"
            document.getElementById("identificador_5_f_r").style.borderColor = "orangered"
        }        
        if(elemento.id == "identificador_6_v_q"){
            elemento.style.borderColor = "black";
            document.getElementById("identificador_6_f_q").style.borderColor = "orangered"

            document.getElementById("identificador_6_v_r").style.borderColor = "black"
            document.getElementById("identificador_6_f_r").style.borderColor = "orangered"
        }
        if(elemento.id == "identificador_7_v_q"){
            elemento.style.borderColor = "black";
            document.getElementById("identificador_7_f_q").style.borderColor = "orangered"

            document.getElementById("identificador_7_v_r").style.borderColor = "black"
            document.getElementById("identificador_7_f_r").style.borderColor = "orangered"
        }
        if(elemento.id == "identificador_1_f_q"){
            elemento.style.borderColor = "black";
            document.getElementById("identificador_1_v_q").style.borderColor = "orangered"

            document.getElementById("identificador_1_f_r").style.borderColor = "black"
            document.getElementById("identificador_1_v_r").style.borderColor = "orangered"
        }
        if(elemento.id == "identificador_2_f_q"){
            elemento.style.borderColor = "black";
            document.getElementById("identificador_2_v_q").style.borderColor = "orangered"

            document.getElementById("identificador_2_f_r").style.borderColor = "black"
            document.getElementById("identificador_2_v_r").style.borderColor = "orangered"
        }
        if(elemento.id == "identificador_3_f_q"){
            elemento.style.borderColor = "black";
            document.getElementById("identificador_3_v_q").style.borderColor = "orangered"

            document.getElementById("identificador_3_f_r").style.borderColor = "black"
            document.getElementById("identificador_3_v_r").style.borderColor = "orangered"
        }
        if(elemento.id == "identificador_4_f_q"){
            elemento.style.borderColor = "black";
            document.getElementById("identificador_4_v_q").style.borderColor = "orangered"

            document.getElementById("identificador_4_f_r").style.borderColor = "black"
            document.getElementById("identificador_4_v_r").style.borderColor = "orangered"
        }
        if(elemento.id == "identificador_5_f_q"){
            elemento.style.borderColor = "black";
            document.getElementById("identificador_5_v_q").style.borderColor = "orangered"

            document.getElementById("identificador_5_f_r").style.borderColor = "black"
            document.getElementById("identificador_5_v_r").style.borderColor = "orangered"
        }
        if(elemento.id == "identificador_6_f_q"){
            elemento.style.borderColor = "black";
            document.getElementById("identificador_6_v_q").style.borderColor = "orangered"

            document.getElementById("identificador_6_f_r").style.borderColor = "black"
            document.getElementById("identificador_6_v_r").style.borderColor = "orangered"
        }
        if(elemento.id == "identificador_7_f_q"){
            elemento.style.borderColor = "black";
            document.getElementById("identificador_7_v_q").style.borderColor = "orangered"

            document.getElementById("identificador_7_f_r").style.borderColor = "black"
            document.getElementById("identificador_7_v_r").style.borderColor = "orangered"
        }

        //
        if(elemento.id == "num_1_v_q"){
           elemento.style.borderColor = "black";
           document.getElementById("num_1_f_q").style.borderColor = "orangered"

           document.getElementById("num_1_v_r").style.borderColor = "black"
           document.getElementById("num_1_f_r").style.borderColor = "orangered"
        }

        if(elemento.id == "num_2_v_q"){
            elemento.style.borderColor = "black";
            document.getElementById("num_2_f_q").style.borderColor = "orangered"

            document.getElementById("num_2_v_r").style.borderColor = "black"
            document.getElementById("num_2_f_r").style.borderColor = "orangered"
        }

        if(elemento.id == "num_3_v_q"){
            elemento.style.borderColor = "black";
            document.getElementById("num_3_f_q").style.borderColor = "orangered"

            document.getElementById("num_3_v_r").style.borderColor = "black"
            document.getElementById("num_3_f_r").style.borderColor = "orangered"
        }

        if(elemento.id == "num_4_v_q"){
            elemento.style.borderColor = "black";
            document.getElementById("num_4_f_q").style.borderColor = "orangered"
    
            document.getElementById("num_4_v_r").style.borderColor = "black"
            document.getElementById("num_4_f_r").style.borderColor = "orangered"
        }

        if(elemento.id == "num_5_v_q"){
            elemento.style.borderColor = "black";
            document.getElementById("num_5_f_q").style.borderColor = "orangered"
    
            document.getElementById("num_5_v_r").style.borderColor = "black"
            document.getElementById("num_5_f_r").style.borderColor = "orangered"
        }
        
        if(elemento.id == "num_6_v_q"){
            elemento.style.borderColor = "black";
            document.getElementById("num_6_f_q").style.borderColor = "orangered"

            document.getElementById("num_6_v_r").style.borderColor = "black"
            document.getElementById("num_6_f_r").style.borderColor = "orangered"
        }

        if(elemento.id == "num_7_v_q"){
            elemento.style.borderColor = "black";
            document.getElementById("num_7_f_q").style.borderColor = "orangered"

            document.getElementById("num_7_v_r").style.borderColor = "black"
            document.getElementById("num_7_f_r").style.borderColor = "orangered"
        }

        if(elemento.id == "num_1_f_q"){
            elemento.style.borderColor = "black";
            document.getElementById("num_1_v_q").style.borderColor = "orangered"

            document.getElementById("num_1_f_r").style.borderColor = "black"
            document.getElementById("num_1_v_r").style.borderColor = "orangered"
        }

        if(elemento.id == "num_2_f_q"){
            elemento.style.borderColor = "black";
            document.getElementById("num_2_v_q").style.borderColor = "orangered"

            document.getElementById("num_2_f_r").style.borderColor = "black"
            document.getElementById("num_2_v_r").style.borderColor = "orangered"
        }

        if(elemento.id == "num_3_f_q"){
            elemento.style.borderColor = "black";
            document.getElementById("num_3_v_q").style.borderColor = "orangered"

            document.getElementById("num_3_f_r").style.borderColor = "black"
            document.getElementById("num_3_v_r").style.borderColor = "orangered"
        }

        if(elemento.id == "num_4_f_q"){
            elemento.style.borderColor = "black";
            document.getElementById("num_4_v_q").style.borderColor = "orangered"

            document.getElementById("num_4_f_r").style.borderColor = "black"
            document.getElementById("num_4_v_r").style.borderColor = "orangered"
        }

        if(elemento.id == "num_5_f_q"){
            elemento.style.borderColor = "black";
            document.getElementById("num_5_v_q").style.borderColor = "orangered"

            document.getElementById("num_5_f_r").style.borderColor = "black"
            document.getElementById("num_5_v_r").style.borderColor = "orangered"
        }

        if(elemento.id == "num_6_f_q"){
            elemento.style.borderColor = "black";
            document.getElementById("num_6_v_q").style.borderColor = "orangered"

            document.getElementById("num_6_f_r").style.borderColor = "black"
            document.getElementById("num_6_v_r").style.borderColor = "orangered"
        }

        //

        if(elemento.id == "bt_topico_2_2_b"){
            let entrada = document.getElementById("entrada_q").value;
            console.log("O estudante digitou o seguinte código: ", entrada, "\n");
            ajax(`O estudante digitou: \n${entrada}\n`);
            document.getElementById("saida_r_1").innerHTML = entrada;
            document.getElementById("saida_r_2").innerHTML = entrada;
        }

        //

        if(elemento.id == "problema_1_q"){

            if ( document.getElementById("problema_1_q").style.borderColor == "black" ){
                document.getElementById("problema_1_q").style.borderColor = "orangered";
                document.getElementById("problema_1_r").style.borderColor = "orangered";
            }else{
                document.getElementById("problema_1_q").style.borderColor = "black";
                document.getElementById("problema_1_r").style.borderColor = "black";
            }

        }

        if(elemento.id == "problema_2_q"){

            if ( document.getElementById("problema_2_q").style.borderColor == "black" ){
                document.getElementById("problema_2_q").style.borderColor = "orangered";
                document.getElementById("problema_2_r").style.borderColor = "orangered";
            }else{
                document.getElementById("problema_2_q").style.borderColor = "black";
                document.getElementById("problema_2_r").style.borderColor = "black";
            }
            
        }

        if(elemento.id == "problema_3_q"){

            if ( document.getElementById("problema_3_q").style.borderColor == "black" ){
                document.getElementById("problema_3_q").style.borderColor = "orangered";
                document.getElementById("problema_3_r").style.borderColor = "orangered";
            }else{
                document.getElementById("problema_3_q").style.borderColor = "black";
                document.getElementById("problema_3_r").style.borderColor = "black";
            }
            
        }

        if(elemento.id == "problema_4_q"){

            if ( document.getElementById("problema_4_q").style.borderColor == "black" ){
                document.getElementById("problema_4_q").style.borderColor = "orangered";
                document.getElementById("problema_4_r").style.borderColor = "orangered";
            }else{
                document.getElementById("problema_4_q").style.borderColor = "black";
                document.getElementById("problema_4_r").style.borderColor = "black";
            }
            
        }

        if(elemento.id == "problema_5_q"){

            if ( document.getElementById("problema_5_q").style.borderColor == "black" ){
                document.getElementById("problema_5_q").style.borderColor = "orangered";
                document.getElementById("problema_5_r").style.borderColor = "orangered";
            }else{
                document.getElementById("problema_5_q").style.borderColor = "black";
                document.getElementById("problema_5_r").style.borderColor = "black";
            }
            
        }

        //

        if(elemento.id == "problema_1_e_q"){

           document.getElementById("problema_1_e_q").style.borderColor = "black";
           document.getElementById("problema_1_s_q").style.borderColor = "orangered";
           document.getElementById("problema_1_n_q").style.borderColor = "orangered";
           
           document.getElementById("problema_1_e_r").style.borderColor = "black";
           document.getElementById("problema_1_s_r").style.borderColor = "orangered";
           document.getElementById("problema_1_n_r").style.borderColor = "orangered";
           
        }
        if(elemento.id == "problema_1_s_q"){

            document.getElementById("problema_1_s_q").style.borderColor = "black";
            document.getElementById("problema_1_e_q").style.borderColor = "orangered";
            document.getElementById("problema_1_n_q").style.borderColor = "orangered";
            
            document.getElementById("problema_1_s_r").style.borderColor = "black";
            document.getElementById("problema_1_e_r").style.borderColor = "orangered";
            document.getElementById("problema_1_n_r").style.borderColor = "orangered";
            
        }
        if(elemento.id == "problema_1_n_q"){

            document.getElementById("problema_1_n_q").style.borderColor = "black";
            document.getElementById("problema_1_s_q").style.borderColor = "orangered";
            document.getElementById("problema_1_e_q").style.borderColor = "orangered";
            
            document.getElementById("problema_1_n_r").style.borderColor = "black";
            document.getElementById("problema_1_s_r").style.borderColor = "orangered";
            document.getElementById("problema_1_e_r").style.borderColor = "orangered";
            
        }

        if(elemento.id == "problema_2_e_q"){

            document.getElementById("problema_2_e_q").style.borderColor = "black";
            document.getElementById("problema_2_s_q").style.borderColor = "orangered";
            document.getElementById("problema_2_n_q").style.borderColor = "orangered";
            
            document.getElementById("problema_2_e_r").style.borderColor = "black";
            document.getElementById("problema_2_s_r").style.borderColor = "orangered";
            document.getElementById("problema_2_n_r").style.borderColor = "orangered";
            
        }
        if(elemento.id == "problema_2_s_q"){
 
             document.getElementById("problema_2_s_q").style.borderColor = "black";
             document.getElementById("problema_2_e_q").style.borderColor = "orangered";
             document.getElementById("problema_2_n_q").style.borderColor = "orangered";
             
             document.getElementById("problema_2_s_r").style.borderColor = "black";
             document.getElementById("problema_2_e_r").style.borderColor = "orangered";
             document.getElementById("problema_2_n_r").style.borderColor = "orangered";
             
        }
        if(elemento.id == "problema_2_n_q"){
 
             document.getElementById("problema_2_n_q").style.borderColor = "black";
             document.getElementById("problema_2_s_q").style.borderColor = "orangered";
             document.getElementById("problema_2_e_q").style.borderColor = "orangered";
             
             document.getElementById("problema_2_n_r").style.borderColor = "black";
             document.getElementById("problema_2_s_r").style.borderColor = "orangered";
             document.getElementById("problema_2_e_r").style.borderColor = "orangered";
             
        }

        if(elemento.id == "problema_3_e_q"){

            document.getElementById("problema_3_e_q").style.borderColor = "black";
            document.getElementById("problema_3_s_q").style.borderColor = "orangered";
            document.getElementById("problema_3_n_q").style.borderColor = "orangered";
            
            document.getElementById("problema_3_e_r").style.borderColor = "black";
            document.getElementById("problema_3_s_r").style.borderColor = "orangered";
            document.getElementById("problema_3_n_r").style.borderColor = "orangered";
            
        }
        if(elemento.id == "problema_3_s_q"){
 
             document.getElementById("problema_3_s_q").style.borderColor = "black";
             document.getElementById("problema_3_e_q").style.borderColor = "orangered";
             document.getElementById("problema_3_n_q").style.borderColor = "orangered";
             
             document.getElementById("problema_3_s_r").style.borderColor = "black";
             document.getElementById("problema_3_e_r").style.borderColor = "orangered";
             document.getElementById("problema_3_n_r").style.borderColor = "orangered";
             
        }
        if(elemento.id == "problema_3_n_q"){
 
             document.getElementById("problema_3_n_q").style.borderColor = "black";
             document.getElementById("problema_3_s_q").style.borderColor = "orangered";
             document.getElementById("problema_3_e_q").style.borderColor = "orangered";
             
             document.getElementById("problema_3_n_r").style.borderColor = "black";
             document.getElementById("problema_3_s_r").style.borderColor = "orangered";
             document.getElementById("problema_3_e_r").style.borderColor = "orangered";
             
        }

        if(elemento.id == "problema_4_e_q"){

            document.getElementById("problema_4_e_q").style.borderColor = "black";
            document.getElementById("problema_4_s_q").style.borderColor = "orangered";
            document.getElementById("problema_4_n_q").style.borderColor = "orangered";
            
            document.getElementById("problema_4_e_r").style.borderColor = "black";
            document.getElementById("problema_4_s_r").style.borderColor = "orangered";
            document.getElementById("problema_4_n_r").style.borderColor = "orangered";
            
        }
        if(elemento.id == "problema_4_s_q"){
 
             document.getElementById("problema_4_s_q").style.borderColor = "black";
             document.getElementById("problema_4_e_q").style.borderColor = "orangered";
             document.getElementById("problema_4_n_q").style.borderColor = "orangered";
             
             document.getElementById("problema_4_s_r").style.borderColor = "black";
             document.getElementById("problema_4_e_r").style.borderColor = "orangered";
             document.getElementById("problema_4_n_r").style.borderColor = "orangered";
             
        }
        if(elemento.id == "problema_4_n_q"){
 
             document.getElementById("problema_4_n_q").style.borderColor = "black";
             document.getElementById("problema_4_s_q").style.borderColor = "orangered";
             document.getElementById("problema_4_e_q").style.borderColor = "orangered";
             
             document.getElementById("problema_4_n_r").style.borderColor = "black";
             document.getElementById("problema_4_s_r").style.borderColor = "orangered";
             document.getElementById("problema_4_e_r").style.borderColor = "orangered";
             
        }

        if(elemento.id == "problema_5_e_q"){

            document.getElementById("problema_5_e_q").style.borderColor = "black";
            document.getElementById("problema_5_s_q").style.borderColor = "orangered";
            document.getElementById("problema_5_n_q").style.borderColor = "orangered";
            
            document.getElementById("problema_5_e_r").style.borderColor = "black";
            document.getElementById("problema_5_s_r").style.borderColor = "orangered";
            document.getElementById("problema_5_n_r").style.borderColor = "orangered";
            
        }
        if(elemento.id == "problema_5_s_q"){
 
             document.getElementById("problema_5_s_q").style.borderColor = "black";
             document.getElementById("problema_5_e_q").style.borderColor = "orangered";
             document.getElementById("problema_5_n_q").style.borderColor = "orangered";
             
             document.getElementById("problema_5_s_r").style.borderColor = "black";
             document.getElementById("problema_5_e_r").style.borderColor = "orangered";
             document.getElementById("problema_5_n_r").style.borderColor = "orangered";
             
        }
        if(elemento.id == "problema_5_n_q"){
 
             document.getElementById("problema_5_n_q").style.borderColor = "black";
             document.getElementById("problema_5_s_q").style.borderColor = "orangered";
             document.getElementById("problema_5_e_q").style.borderColor = "orangered";
             
             document.getElementById("problema_5_n_r").style.borderColor = "black";
             document.getElementById("problema_5_s_r").style.borderColor = "orangered";
             document.getElementById("problema_5_e_r").style.borderColor = "orangered";
             
        }

        //

        if(elemento.id == "bt_topico_3_3_e"){
            let code = "#Código digitado \n"+editAreaLoader.getValue("problema_codigo");
            editAreaLoader.setValue("problema_codigo_estudante",code);
            console.log("O estudante digitou o seguinte código: ", code, "\n");
            ajax(`O estudante digitou o seguinte código: \n${code}\n`);
        }

        //

        if(elemento.id == "linha_1_q"){
            document.getElementById("linha_1_q").style.borderColor = "black";
            document.getElementById("linha_1_r").style.borderColor = "black";

            document.getElementById("linha_2_q").style.borderColor = "orangered";
            document.getElementById("linha_2_r").style.borderColor = "orangered";            
        }
        if(elemento.id == "linha_2_q"){
            document.getElementById("linha_2_q").style.borderColor = "black";
            document.getElementById("linha_2_r").style.borderColor = "black";

            document.getElementById("linha_1_q").style.borderColor = "orangered";
            document.getElementById("linha_1_r").style.borderColor = "orangered";            
        }

        if(elemento.id == "natureza_1_q"){
            document.getElementById("natureza_1_q").style.borderColor = "black";
            document.getElementById("natureza_1_r").style.borderColor = "black";

            document.getElementById("natureza_2_q").style.borderColor = "orangered";
            document.getElementById("natureza_2_r").style.borderColor = "orangered";
            
            document.getElementById("natureza_3_q").style.borderColor = "orangered";
            document.getElementById("natureza_3_r").style.borderColor = "orangered";
        }
        if(elemento.id == "natureza_2_q"){
            document.getElementById("natureza_2_q").style.borderColor = "black";
            document.getElementById("natureza_2_r").style.borderColor = "black";

            document.getElementById("natureza_1_q").style.borderColor = "orangered";
            document.getElementById("natureza_1_r").style.borderColor = "orangered";
            
            document.getElementById("natureza_3_q").style.borderColor = "orangered";
            document.getElementById("natureza_3_r").style.borderColor = "orangered";
        }
        if(elemento.id == "natureza_3_q"){
            document.getElementById("natureza_3_q").style.borderColor = "black";
            document.getElementById("natureza_3_r").style.borderColor = "black";

            document.getElementById("natureza_2_q").style.borderColor = "orangered";
            document.getElementById("natureza_2_r").style.borderColor = "orangered";
            
            document.getElementById("natureza_1_q").style.borderColor = "orangered";
            document.getElementById("natureza_1_r").style.borderColor = "orangered";
        }
        
        //

        if(elemento.id == "op_1_a_q"){
            document.getElementById("op_1_a_q").style.borderColor = "black";
            document.getElementById("op_1_a_r").style.borderColor = "black";

            document.getElementById("op_2_a_q").style.borderColor = "orangered";
            document.getElementById("op_2_a_r").style.borderColor = "orangered";
        }
        if(elemento.id == "op_2_a_q"){
            document.getElementById("op_2_a_q").style.borderColor = "black";
            document.getElementById("op_2_a_r").style.borderColor = "black";

            document.getElementById("op_1_a_q").style.borderColor = "orangered";
            document.getElementById("op_1_a_r").style.borderColor = "orangered";
        }
        if(elemento.id == "op_1_b_q"){
            document.getElementById("op_1_b_q").style.borderColor = "black";
            document.getElementById("op_1_b_r").style.borderColor = "black";

            document.getElementById("op_2_b_q").style.borderColor = "orangered";
            document.getElementById("op_2_b_r").style.borderColor = "orangered";
        }
        if(elemento.id == "op_2_b_q"){
            document.getElementById("op_2_b_q").style.borderColor = "black";
            document.getElementById("op_2_b_r").style.borderColor = "black";

            document.getElementById("op_1_b_q").style.borderColor = "orangered";
            document.getElementById("op_1_b_r").style.borderColor = "orangered";
        }
        if(elemento.id == "op_1_c_q"){
            document.getElementById("op_1_c_q").style.borderColor = "black";
            document.getElementById("op_1_c_r").style.borderColor = "black";

            document.getElementById("op_2_c_q").style.borderColor = "orangered";
            document.getElementById("op_2_c_r").style.borderColor = "orangered";
        }
        if(elemento.id == "op_2_c_q"){
            document.getElementById("op_2_c_q").style.borderColor = "black";
            document.getElementById("op_2_c_r").style.borderColor = "black";

            document.getElementById("op_1_c_q").style.borderColor = "orangered";
            document.getElementById("op_1_c_r").style.borderColor = "orangered";
        }
       

        //

        if(elemento.id == "bt_topico_5_4"){
            let opa = Number(document.getElementById("op_a").value.trim());
            let opb = Number(document.getElementById("op_b").value.trim());
            let opc = Number(document.getElementById("op_c").value.trim());
            let opd = Number(document.getElementById("op_d").value.trim());
            let color = "";
            console.log(opa, opb, opc, opd);
            ajax(`O estudante digitou: \n${opa}, ${opb}, ${opc}, ${opd}\n`);

            if(opa == 36){
                color = "green";
            }else{
                color = "red";
            }
            document.getElementById("op_a").style.backgroundColor = color;

            if(opb == 144){
                color = "green";
            }else{
                color == "red";
            }

            document.getElementById("op_b").style.backgroundColor = color;
            if(opc == 2){
                color = "green";
            }else{
                color = "red";
            }
            
            document.getElementById("op_c").style.backgroundColor = color;
            if(opd == 8){
                color = "green";
            }else{
                color = "red";
            }
            document.getElementById("op_d").style.backgroundColor = color;
        }

        //

        if(elemento.id == "cod_1_q"){
            document.getElementById("cod_1_q").style.border = "3px solid black";
            document.getElementById("cod_1_r").style.border = "3px solid black";

            document.getElementById("cod_2_q").style.border = "none";
            document.getElementById("cod_2_r").style.border = "none";
        }
        if(elemento.id == "cod_2_q"){
            document.getElementById("cod_2_q").style.border = "3px solid black";
            document.getElementById("cod_2_r").style.border = "3px solid black";

            document.getElementById("cod_1_q").style.border = "none";
            document.getElementById("cod_1_r").style.border = "none";
        }

        //

        if(elemento.id == "iden_1_q"){
            document.getElementById("iden_1_q").style.border = "3px solid black";
            document.getElementById("iden_1_r").style.border = "3px solid black";

            document.getElementById("iden_2_q").style.border = "none";
            document.getElementById("iden_2_r").style.border = "none";
        }
        if(elemento.id == "iden_2_q"){
            document.getElementById("iden_2_q").style.border = "3px solid black";
            document.getElementById("iden_2_r").style.border = "3px solid black";

            document.getElementById("iden_1_q").style.border = "none";
            document.getElementById("iden_1_r").style.border = "none";
        }

        //

        if(elemento.id == "exp_1_q"){
            document.getElementById("exp_1_q").style.border = "3px solid black";
            document.getElementById("exp_1_r").style.border = "3px solid black";

            document.getElementById("exp_2_q").style.border = "none";
            document.getElementById("exp_2_r").style.border = "none";
        }
        if(elemento.id == "exp_2_q"){
            document.getElementById("exp_2_q").style.border = "3px solid black";
            document.getElementById("exp_2_r").style.border = "3px solid black";

            document.getElementById("exp_1_q").style.border = "none";
            document.getElementById("exp_1_r").style.border = "none";
        }

    }
    
    })();
    