/*dando um click nos botoes vai chamr a funcao insert*/

function insert(num)/* vai receber um parametro num, que vai enterder que esta vindo um numero */ {
    var numero = document.getElementById('resultado').value; /* vai pegar o numero que foi digitado e vai acrescentando outros ao lado */
    document.getElementById('resultado').value = numero + num;
}

/* funcao limpar */

function clean() {
    document.getElementById('resultado').value = "";
}

/* funcao limpar um por um */
function back() {
    var resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado.substring(0, resultado.length - 1); /* vai deminuir cada elemento  */
}


/*funcao calcular */

function calcular() {
    var resultado = document.getElementById('resultado').value;
    
    if (resultado) {
        document.getElementById('resultado').value = eval(resultado); /* esta funcao vai ser responsavel por fazer os calculos de todas as operacoes */
    } else {
        document.getElementById("resultado").value = "Nada";
        alert("precnha o campo");
    }
}






function botao() {
    document.body.style.backgroundColor = "white";
}

function botao1() {
    document.body.style.backgroundColor = "black";
}

// Obter o campo de entrada
var input = document.getElementById("resultado");
// executa uma função quando o usuário pressiona uma tecla no teclado
input.addEventListener("keypress", function (event) {
    // Se o usuário pressionar a tecla "Enter" no teclado
    if (event.key === "Enter") {
        // Cancele a ação padrão, se necessário
        event.preventDefault();
        // Acione o elemento de botão com um clique
        document.getElementById("calc").click();
    }
});