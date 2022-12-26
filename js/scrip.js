/*dando um click nos botoes vai chamr a funcao insert*/

function insert(num)/* vai receber um parametro num, que vai enterder que esta vindo um numero */
{  
 var numero = document.getElementById('resultado').innerHTML; /* vai pegar o numero que foi digitado e vai acrescentando outros ao lado */
 document.getElementById('resultado').innerHTML = numero + num;
  
}

/* funcao limpar */

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

/* funcao limpar um por um */
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado. length -1); /* vai deminuir cada elemento  */
}


/* funcao calcular */

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado); /* esta funcao vai ser responsavel por fazer os calculos de todas as operacoes */
    }else{
        document.getElementById("resultado").innerHTML = "Nada";
    }
    document.body.style.backgroundColor = "black";
}


function botao(){
  document.body.style.backgroundColor = "white";

}

function botao1(){
  document.body.style.backgroundColor = "black";

}