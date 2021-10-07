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

       //
       if(elemento.id == "seq_q"){
           document.getElementById("seq_q").style.border = "3px solid black";
           document.getElementById("cond_q").style.border = "none";
           document.getElementById("repet_q").style.border = "none";
           
           document.getElementById("seq_r").style.border = "3px solid black";
           document.getElementById("cond_r").style.border = "none";
           document.getElementById("repet_r").style.border = "none";
       }
       if(elemento.id == "cond_q"){
           document.getElementById("cond_q").style.border = "3px solid black";
           document.getElementById("seq_q").style.border = "none";
           document.getElementById("repet_q").style.border = "none";
           
           document.getElementById("cond_r").style.border = "3px solid black";
           document.getElementById("seq_r").style.border = "none";
           document.getElementById("repet_r").style.border = "none";
       }
       if(elemento.id == "repet_q"){
           document.getElementById("repet_q").style.border = "3px solid black";
           document.getElementById("cond_q").style.border = "none";
           document.getElementById("seq_q").style.border = "none";
           
           document.getElementById("repet_r").style.border = "3px solid black";
           document.getElementById("cond_r").style.border = "none";
           document.getElementById("seq_r").style.border = "none";
       }

        //
        if(elemento.id == "bt_topico_1_4_a"){
           let code = "#Código digitado \n"+editAreaLoader.getValue("exemplo_meia_entrada_input");
           editAreaLoader.setValue("exemplo_meia_entrada_output",code);
           console.log(code);
        }
        if(elemento.id == "bt_topico_1_4_b"){
           let code = "#Código digitado \n"+editAreaLoader.getValue("exemplo_segundo_grau_input");
           editAreaLoader.setValue("exemplo_segundo_grau_output",code);
           console.log(code);
        }

        //
        if(elemento.id == "iden_1_q"){
            document.getElementById("iden_1_q").style.border = "3px solid black";
            document.getElementById("iden_1_r").style.border = "3px solid black";

            document.getElementById("iden_2_q").style.border = "none";
            document.getElementById("iden_2_r").style.border = "none";

            document.getElementById("iden_3_q").style.border = "none";
            document.getElementById("iden_3_r").style.border = "none";
        }
        if(elemento.id == "iden_2_q"){
            document.getElementById("iden_2_q").style.border = "3px solid black";
            document.getElementById("iden_2_r").style.border = "3px solid black";

            document.getElementById("iden_1_q").style.border = "none";
            document.getElementById("iden_1_r").style.border = "none";

            document.getElementById("iden_3_q").style.border = "none";
            document.getElementById("iden_3_r").style.border = "none";
        }
        if(elemento.id == "iden_3_q"){
            document.getElementById("iden_3_q").style.border = "3px solid black";
            document.getElementById("iden_3_r").style.border = "3px solid black";

            document.getElementById("iden_1_q").style.border = "none";
            document.getElementById("iden_1_r").style.border = "none";

            document.getElementById("iden_2_q").style.border = "none";
            document.getElementById("iden_2_r").style.border = "none";
        }

        //
        if(elemento.id == "iden2_1_q"){
            document.getElementById("iden2_1_q").style.border = "3px solid black";
            document.getElementById("iden2_1_r").style.border = "3px solid black";

            document.getElementById("iden2_2_q").style.border = "none";
            document.getElementById("iden2_2_r").style.border = "none";
        }
        if(elemento.id == "iden2_2_q"){
            document.getElementById("iden2_2_q").style.border = "3px solid black";
            document.getElementById("iden2_2_r").style.border = "3px solid black";

            document.getElementById("iden2_1_q").style.border = "none";
            document.getElementById("iden2_1_r").style.border = "none";
        }

        //
        if(elemento.id == "atrib_1_q"){
            document.getElementById("atrib_1_q").style.borderColor = "black";
            document.getElementById("comp_1_q").style.borderColor = "orangered";

            document.getElementById("atrib_1_r").style.borderColor = "black";
            document.getElementById("comp_1_r").style.borderColor = "orangered";
        }
        if(elemento.id == "atrib_2_q"){
            document.getElementById("atrib_2_q").style.borderColor = "black";
            document.getElementById("comp_2_q").style.borderColor = "orangered";

            document.getElementById("atrib_2_r").style.borderColor = "black";
            document.getElementById("comp_2_r").style.borderColor = "orangered";
        }
        if(elemento.id == "comp_1_q"){
            document.getElementById("atrib_1_q").style.borderColor = "orangered";
            document.getElementById("comp_1_q").style.borderColor = "black";

            document.getElementById("atrib_1_r").style.borderColor = "orangered";
            document.getElementById("comp_1_r").style.borderColor = "black";
        }
        if(elemento.id == "comp_2_q"){
            document.getElementById("atrib_2_q").style.borderColor = "orangered";
            document.getElementById("comp_2_q").style.borderColor = "black";

            document.getElementById("atrib_2_r").style.borderColor = "orangered";
            document.getElementById("comp_2_r").style.borderColor = "black";
        }

        //
        if(elemento.id == "v_1_q"){
            document.getElementById("v_1_q").style.borderColor = "black";
            document.getElementById("f_1_q").style.borderColor = "orangered";
            document.getElementById("m_1_q").style.borderColor = "orangered";

            document.getElementById("v_1_r").style.borderColor = "black";
            document.getElementById("f_1_r").style.borderColor = "orangered";
            document.getElementById("m_1_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "f_1_q"){
            document.getElementById("f_1_q").style.borderColor = "black";
            document.getElementById("v_1_q").style.borderColor = "orangered";
            document.getElementById("m_1_q").style.borderColor = "orangered";

            document.getElementById("f_1_r").style.borderColor = "black";
            document.getElementById("v_1_r").style.borderColor = "orangered";
            document.getElementById("m_1_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "m_1_q"){
            document.getElementById("m_1_q").style.borderColor = "black";
            document.getElementById("f_1_q").style.borderColor = "orangered";
            document.getElementById("v_1_q").style.borderColor = "orangered";

            document.getElementById("m_1_r").style.borderColor = "black";
            document.getElementById("f_1_r").style.borderColor = "orangered";
            document.getElementById("v_1_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "v_2_q"){
            document.getElementById("v_2_q").style.borderColor = "black";
            document.getElementById("f_2_q").style.borderColor = "orangered";
            document.getElementById("m_2_q").style.borderColor = "orangered";

            document.getElementById("v_2_r").style.borderColor = "black";
            document.getElementById("f_2_r").style.borderColor = "orangered";
            document.getElementById("m_2_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "f_2_q"){
            document.getElementById("f_2_q").style.borderColor = "black";
            document.getElementById("v_2_q").style.borderColor = "orangered";
            document.getElementById("m_2_q").style.borderColor = "orangered";

            document.getElementById("f_2_r").style.borderColor = "black";
            document.getElementById("v_2_r").style.borderColor = "orangered";
            document.getElementById("m_2_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "m_2_q"){
            document.getElementById("m_2_q").style.borderColor = "black";
            document.getElementById("f_2_q").style.borderColor = "orangered";
            document.getElementById("v_2_q").style.borderColor = "orangered";

            document.getElementById("m_2_r").style.borderColor = "black";
            document.getElementById("f_2_r").style.borderColor = "orangered";
            document.getElementById("v_2_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "v_3_q"){
            document.getElementById("v_3_q").style.borderColor = "black";
            document.getElementById("f_3_q").style.borderColor = "orangered";
            document.getElementById("m_3_q").style.borderColor = "orangered";

            document.getElementById("v_3_r").style.borderColor = "black";
            document.getElementById("f_3_r").style.borderColor = "orangered";
            document.getElementById("m_3_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "f_3_q"){
            document.getElementById("f_3_q").style.borderColor = "black";
            document.getElementById("v_3_q").style.borderColor = "orangered";
            document.getElementById("m_3_q").style.borderColor = "orangered";

            document.getElementById("f_3_r").style.borderColor = "black";
            document.getElementById("v_3_r").style.borderColor = "orangered";
            document.getElementById("m_3_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "m_3_q"){
            document.getElementById("m_3_q").style.borderColor = "black";
            document.getElementById("f_3_q").style.borderColor = "orangered";
            document.getElementById("v_3_q").style.borderColor = "orangered";

            document.getElementById("m_3_r").style.borderColor = "black";
            document.getElementById("f_3_r").style.borderColor = "orangered";
            document.getElementById("v_3_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "v_4_q"){
            document.getElementById("v_4_q").style.borderColor = "black";
            document.getElementById("f_4_q").style.borderColor = "orangered";
            document.getElementById("m_4_q").style.borderColor = "orangered";

            document.getElementById("v_4_r").style.borderColor = "black";
            document.getElementById("f_4_r").style.borderColor = "orangered";
            document.getElementById("m_4_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "f_4_q"){
            document.getElementById("f_4_q").style.borderColor = "black";
            document.getElementById("v_4_q").style.borderColor = "orangered";
            document.getElementById("m_4_q").style.borderColor = "orangered";

            document.getElementById("f_4_r").style.borderColor = "black";
            document.getElementById("v_4_r").style.borderColor = "orangered";
            document.getElementById("m_4_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "m_4_q"){
            document.getElementById("m_4_q").style.borderColor = "black";
            document.getElementById("f_4_q").style.borderColor = "orangered";
            document.getElementById("v_4_q").style.borderColor = "orangered";

            document.getElementById("m_4_r").style.borderColor = "black";
            document.getElementById("f_4_r").style.borderColor = "orangered";
            document.getElementById("v_4_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "v_5_q"){
            document.getElementById("v_5_q").style.borderColor = "black";
            document.getElementById("f_5_q").style.borderColor = "orangered";
            document.getElementById("m_5_q").style.borderColor = "orangered";

            document.getElementById("v_5_r").style.borderColor = "black";
            document.getElementById("f_5_r").style.borderColor = "orangered";
            document.getElementById("m_5_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "f_5_q"){
            document.getElementById("f_5_q").style.borderColor = "black";
            document.getElementById("v_5_q").style.borderColor = "orangered";
            document.getElementById("m_5_q").style.borderColor = "orangered";

            document.getElementById("f_5_r").style.borderColor = "black";
            document.getElementById("v_5_r").style.borderColor = "orangered";
            document.getElementById("m_5_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "m_5_q"){
            document.getElementById("m_5_q").style.borderColor = "black";
            document.getElementById("f_5_q").style.borderColor = "orangered";
            document.getElementById("v_5_q").style.borderColor = "orangered";

            document.getElementById("m_5_r").style.borderColor = "black";
            document.getElementById("f_5_r").style.borderColor = "orangered";
            document.getElementById("v_5_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "v_6_q"){
            document.getElementById("v_6_q").style.borderColor = "black";
            document.getElementById("f_6_q").style.borderColor = "orangered";
            document.getElementById("m_6_q").style.borderColor = "orangered";

            document.getElementById("v_6_r").style.borderColor = "black";
            document.getElementById("f_6_r").style.borderColor = "orangered";
            document.getElementById("m_6_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "f_6_q"){
            document.getElementById("f_6_q").style.borderColor = "black";
            document.getElementById("v_6_q").style.borderColor = "orangered";
            document.getElementById("m_6_q").style.borderColor = "orangered";

            document.getElementById("f_6_r").style.borderColor = "black";
            document.getElementById("v_6_r").style.borderColor = "orangered";
            document.getElementById("m_6_r").style.borderColor = "orangered";           
        }
        if(elemento.id == "m_6_q"){
            document.getElementById("m_6_q").style.borderColor = "black";
            document.getElementById("f_6_q").style.borderColor = "orangered";
            document.getElementById("v_6_q").style.borderColor = "orangered";

            document.getElementById("m_6_r").style.borderColor = "black";
            document.getElementById("f_6_r").style.borderColor = "orangered";
            document.getElementById("v_6_r").style.borderColor = "orangered";           
        }

        //
        if(elemento.id == "bt_problema_1"){
           let code = "#Código digitado \n"+editAreaLoader.getValue("problema_1_input");
           editAreaLoader.setValue("problema_1_output",code);
           console.log(code);
        }




    }
    
})();
    