
function mostrarDica() {

    document
        .getElementById("dica")
        .classList.toggle("escondida");

}


function mostrarGabarito() {

    document
        .getElementById("gabarito")
        .classList.toggle("escondida");

}


function recomecarCodigo() {

    document
        .getElementById("codigo")
        .value = codigoInicial;


    document
        .getElementById("saida")
        .innerHTML = "";


    document
        .getElementById("mensagem")
        .className =
        "mensagem escondida";

}


/* =========================================
   RODAR CÓDIGO
   ========================================= */

function rodarCodigo() {

    const codigo =
        document
        .getElementById("codigo")
        .value;


    const saida =
        document
        .getElementById("saida");


    if (codigo.trim() === "") {

        saida.innerHTML =
            "Digite seu código antes de rodar!";

        return;

    }


    /*
       Criamos um iframe para que o código
       HTML + JavaScript do aluno seja
       executado separadamente da página
       principal do Stranger Code.
    */

    const iframe =
        document.createElement("iframe");


    iframe.style.width = "100%";
    iframe.style.minHeight = "350px";
    iframe.style.border = "none";
    iframe.style.background = "white";
    iframe.style.borderRadius = "8px";


    /*
       O sandbox permite executar JavaScript
       dentro do código do aluno sem permitir
       que ele altere a página principal.
    */

    iframe.setAttribute(
        "sandbox",
        "allow-scripts"
    );


    iframe.srcdoc = codigo;


    saida.innerHTML = "";


    saida.appendChild(iframe);

}


/* =========================================
   VERIFICAR CÓDIGO
   ========================================= */

function verificarCodigo() {

    const codigo =
        document
        .getElementById("codigo")
        .value
        .toLowerCase();


    let erros = [];


    /*
       Verifica se o aluno criou elementos
       HTML necessários.
    */

    const temInput =
        codigo.includes("<input") ||
        codigo.includes("input");


    const temButton =
        codigo.includes("<button") ||
        codigo.includes("button");


    const temParagrafo =
        codigo.includes("<p") ||
        codigo.includes("<p>") ||
        codigo.includes("p>");


    if (!temInput) {

        erros.push(
            "Está faltando criar um input."
        );

    }


    if (!temButton) {

        erros.push(
            "Está faltando criar um button."
        );

    }


    if (!temParagrafo) {

        erros.push(
            "Está faltando criar um elemento <p>."
        );

    }


    /*
       Verifica acesso aos elementos HTML.
    */

    if (
        !codigo.includes(
            "getelementbyid"
        )
    ) {

        erros.push(
            "Use document.getElementById() para acessar elementos HTML."
        );

    }


    /*
       Verifica se o aluno utilizou .value.
    */

    if (
        !codigo.includes(".value")
    ) {

        erros.push(
            "Use .value para pegar o valor digitado no input."
        );

    }


    /*
       Verifica se existe conversão para número.
    */

    const temConversao =
        codigo.includes("number(") ||
        codigo.includes("parseint(") ||
        codigo.includes("parsefloat(");


    if (!temConversao) {

        erros.push(
            "Converta o valor do input para número usando Number(), parseInt() ou parseFloat()."
        );

    }


    /*
       Verifica função.
    */

    if (
        !codigo.includes("function")
    ) {

        erros.push(
            "Crie uma função para calcular o dano."
        );

    }


    /*
       Verifica return.
    */

    if (
        !codigo.includes("return")
    ) {

        erros.push(
            "Sua função precisa utilizar return."
        );

    }


    /*
       Verifica if e else.
    */

    if (
        !codigo.includes("if")
    ) {

        erros.push(
            "Use if para verificar a situação da batalha."
        );

    }


    if (
        !codigo.includes("else")
    ) {

        erros.push(
            "Use else para definir o que acontece quando Vecna ainda está vivo."
        );

    }


    /*
       Verifica vetor.

       Procuramos por [] e também por
       métodos comuns de vetor.
    */

    const temVetor =
        codigo.includes("[]") ||
        codigo.includes("array");


    if (!temVetor) {

        erros.push(
            "Crie um vetor para armazenar os ataques."
        );

    }


    /*
       Verifica se algo é adicionado ao vetor.
    */

    if (
        !codigo.includes("push")
    ) {

        erros.push(
            "Use push() para registrar os ataques no vetor."
        );

    }


    /*
       Verifica estrutura de repetição.

       O exercício permite for OU while.
    */

    const temFor =
        codigo.includes("for");


    const temWhile =
        codigo.includes("while");


    if (
        !temFor &&
        !temWhile
    ) {

        erros.push(
            "Use uma estrutura de repetição (for ou while) para percorrer o vetor."
        );

    }


    /*
       Verifica atualização do HTML.
    */

    const temInnerText =
        codigo.includes("innertext");


    const temInnerHTML =
        codigo.includes("innerhtml");


    if (
        !temInnerText &&
        !temInnerHTML
    ) {

        erros.push(
            "Use innerText ou innerHTML para mostrar o resultado na página."
        );

    }


    /*
       Verifica evento de clique.
    */

    if (
        !codigo.includes("addeventlistener")
    ) {

        erros.push(
            "Use addEventListener() para detectar o clique no botão."
        );

    }


    /*
       Mostra resultado.
    */

    const mensagem =
        document
        .getElementById("mensagem");


    if (erros.length === 0) {

        mensagem.className =
            "mensagem sucesso";


        mensagem.innerHTML =
            "<strong>⚔ VECNA FOI DERROTADO!</strong>" +
            "<br><br>" +
            "Você utilizou os principais conhecimentos " +
            "aprendidos durante o Stranger Code!" +
            "<br><br>" +
            "🎉 Você completou a batalha final!";


        concluirFase();

    }

    else {

        mensagem.className =
            "mensagem erro";


        mensagem.innerHTML =
            "<strong>⚠ A batalha ainda não terminou!</strong>" +
            "<br><br>" +
            erros.join("<br><br>");

    }

}

